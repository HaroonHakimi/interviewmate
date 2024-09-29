"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/aiGeminiModel";
import { LoaderCircle } from "lucide-react";
import { db } from "@/utils/db";
import { InterviewMate } from "@/utils/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import moment from "moment/moment";
import { useRouter } from "next/navigation";

const AddNewInterview = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobExperience, setJobExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const [jsonResp, setJsonResp] = useState([]);
  const { user } = useUser();
  const router = useRouter();

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const inputPrompt = `
    Job Position: ${jobPosition}, Job Description: ${jobDescription}, Years of Experience: ${jobExperience}.

    Using the provided information (Job Position, Job Description, and Years of Experience), generate 5 relevant interview questions and answers related to the role. Return the result in a JSON format with "question" and "answer" fields, as follows:

    [
        {
            "question": "Sample question 1",
            "answer": "Sample answer 1"
        },
        {
            "question": "Sample question 2",
            "answer": "Sample answer 2"
        },
        ...
    ]
    `;
    const result = await chatSession.sendMessage(inputPrompt);

    const text = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");

    console.log(text);

    setJsonResp(text);

    if (text) {
      const resp = await db
        .insert(InterviewMate)
        .values({
          mockId: uuidv4(),
          jsonMockResp: text,
          jobDescription: jobDescription,
          jobExperience: jobExperience,
          jobPosition: jobPosition,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("DD-MM-YYYY"),
        })
        .returning({
          mockId: InterviewMate.mockId,
        });

      console.log("inserted id: ", resp);

      if (resp) {
        setOpenDialog(false);
        router.push(`/dashboard/interview/${resp[0].mockId}`)
      }
    } else {
      console.log("Error");
    }

    setLoading(false);
    setJobDescription("");
    setJobExperience("");
    setJobPosition("");
    console.log(text);
  };
  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-secondary
        hover:scale-105 hover:shadow-md cursor-pointer transition-all"
      >
        <h2
          onClick={() => setOpenDialog(true)}
          className="font-bold text-lg text-center"
        >
          + Add New
        </h2>
      </div>
      <Dialog open={openDialog}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about your job interview
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div className="mt-3">
                  <h2>
                    Add Details about your job position/role, job description
                    and years of experience
                  </h2>
                  <div className="mt-7 my-3">
                    <label htmlFor="">Job Role</label>
                    <Input
                      onChange={(e) => setJobPosition(e.target.value)}
                      placeholder="Fullstack Developer"
                      required
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="">Job Description/Tech Stack</label>
                    <Textarea
                      onChange={(e) => setJobDescription(e.target.value)}
                      placeholder="Mern Stack"
                      required
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="">Years of experience</label>
                    <Input
                      onChange={(e) => setJobExperience(e.target.value)}
                      placeholder="5"
                      max="50"
                      required
                      type="number"
                    />
                  </div>
                </div>
                <div className="flex gap-5  justify-start">
                  <Button
                    type="button"
                    onClick={() => setOpenDialog(false)}
                    variant="ghost"
                  >
                    Cancel
                  </Button>
                  <Button disabled={loading} type="submit">
                    {loading ? (
                      <>
                        <LoaderCircle className="animate-spin" />
                      </>
                    ) : (
                      <>Start Interview</>
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewInterview;

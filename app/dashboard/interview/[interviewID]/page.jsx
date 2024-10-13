"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { InterviewMate } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, WebcamIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

const Interview = ({ params }) => {
  const [interviewData, setInterviewData] = useState();
  const [webcamEnabled, setWebcamEnabled] = useState(false);

  const getInterviewDetails = async () => {
    const res = await db
      .select()
      .from(InterviewMate)
      .where(eq(InterviewMate.mockId, params.interviewID));

    setInterviewData(res);
  };

  useEffect(() => {
    getInterviewDetails();
  }, []);
  return (
    <div className="my-10 ">
      <h2 className="font-bold text-2xl">Lets Get Started</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className="flex flex-col my-5 gap-5">
          <div className="flex flex-col p-5 rounded-lg border gap-5">
            <h2 className="text-lg">
              <strong>Job Role/ Position:</strong>{" "}
              {interviewData?.[0]?.jobPosition}
            </h2>
            <h2 className="text-lg">
              <strong>Job Description/ Teckstack:</strong>{" "}
              {interviewData?.[0]?.jobDescription}
            </h2>
            <h2 className="text-lg">
              <strong>Years of experience:</strong>{" "}
              {interviewData?.[0]?.jobExperience}
            </h2>
          </div>

          <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-50">
            <h2 className="flex gap-2 items-center text-yellow-600">
              <Lightbulb />
              <strong>Information</strong>
            </h2>
            <h2 className="mt-3 text-yellow-600">
              Enable view webcam and Microphone to start your AI generated mock
              interview. You will be tested with 5 questions which you can
              answer in real time, and review your results at the end.
            </h2>
          </div>
        </div>
        <div className="">
          {webcamEnabled ? (
            <Webcam
              onUserMedia={() => setWebcamEnabled(true)}
              onUserMediaError={() => setWebcamEnabled(false)}
              mirrored={true}
              style={{
                height: 300,
                width: 300,
              }}
            />
          ) : (
            <div className="">
              <WebcamIcon className="h-64 my-4 w-full p-20 bg-secondary rounded-lg border" />
              <Button
                className="w-full"
                variant="outline"
                onClick={() => setWebcamEnabled(true)}
              >
                Enable Webcam and Microphone
              </Button>
              <div className="mt-3">
                <Link href={`/dashboard/interview/${params.interviewID}/start`}>
                  <Button className="w-full">Start Interview</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Interview;

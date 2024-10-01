"use client";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Feedback = ({ params }) => {
  const [feedback, setFeedback] = useState([]);
  const [textColor, setTextColor] = useState("text-red-500");
  const router = useRouter();

  const getFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewID))
      .orderBy(UserAnswer.id);
    setFeedback(result);

  };

  let totalFeedback = 0
  for (const item of feedback) {
    totalFeedback += parseInt(item.rating[0]) / 5
  }


  if (feedback.length) {
    if (feedback[0].rating > 5) setTextColor("text-green-500");
    else if (feedback[0].rating < 5) setTextColor("text-red-500");
  }

  useEffect(() => {
    getFeedback();
  }, []);

  return (
    <div className="p-10">
      {feedback?.length === 0 ? (
        <h2 className="font-bold text-xl text-gray-500">
          No Interview Recorded
        </h2>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-green-600">Congratulations</h2>
          <h2 className="text-2xl font-bold">
            Here is your interview feedback
          </h2>
          <h2 className="text-primary text-lg my-3">
            Your overall interview rating: {totalFeedback}/10 <strong></strong>
          </h2>

          <h2 className="tex-xl text-gray-500">
            Find below the correct answer, your answer and improvements.
          </h2>

          {feedback &&
            feedback.map((item, index) => {
              return (
                <Collapsible key={index} className="mt-7">
                  <CollapsibleTrigger className="w-full text-sm md:text-lg gap-7 flex justify-between bg-secondary p-4 rounded-lg my-5">
                    {item.question}
                    <ChevronsUpDown className="h-5 w-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="flex flex-col gap-5">
                      <h2
                        className={`text-sm md:text-lg border p-5 rounded-lg ${textColor}`}
                      >
                        <b>Rating: </b>
                        {item.rating}
                      </h2>
                      <h2 className="p-2 border text-red-600 rounded-lg bg-red-50 text-sm">
                        <strong>Your Answer: </strong>
                        {item.userAns}
                      </h2>
                      <h2 className="p-2 border text-blue-600 rounded-lg bg-blue-50 text-sm">
                        <strong>Feedback: </strong>
                        {item.feedback}
                      </h2>
                      <h2 className="p-2 border text-green-600 rounded-lg bg-green-50 text-sm">
                        <strong>Correct Answer: </strong>
                        {item.correctAnswer}
                      </h2>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              );
            })}

          <Button onClick={() => router.push("/dashboard")}>Go Home</Button>
        </>
      )}
    </div>
  );
};

export default Feedback;

"use client";
import { db } from "@/utils/db";
import { InterviewMate } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import QuestionsSection from "./_components/QuestionsSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const StartInterview = ({ params }) => {
  const [interviewData, setInterviewData] = useState(null);
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(0);

  const getInterviewDetails = async () => {
    const res = await db
      .select()
      .from(InterviewMate)
      .where(eq(InterviewMate.mockId, params.interviewID));

    try {
      const jsonMockResp = JSON.parse(res[0].jsonMockResp);
      setMockInterviewQuestion(jsonMockResp);
      setInterviewData(res[0]);
    } catch (error) {
      console.error("Error parsing JSON dinky:", error);
    }
  };

  useEffect(() => {
    getInterviewDetails();
  }, [params.interviewID]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        <QuestionsSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestion={activeQuestion}
        />

        <RecordAnswerSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestion={activeQuestion}
          interviewData={interviewData}
        />
      </div>

      <div className="flex justify-end gap-3">
        {activeQuestion > 0 && (
          <Button onClick={() => setActiveQuestion(activeQuestion - 1)}>
            Previous Question
          </Button>
        )}
        {activeQuestion !== mockInterviewQuestion?.length && (
          <Button onClick={() => setActiveQuestion(activeQuestion + 1)}>
            Next Question
          </Button>
        )}
        {activeQuestion === mockInterviewQuestion?.length - 1 && (
          <Link href={`/dashboard/interview/${interviewData?.mockId}/feedback`}>
            <Button onClick={() => setActiveQuestion(activeQuestion + 1)}>
              End Interview
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default StartInterview;

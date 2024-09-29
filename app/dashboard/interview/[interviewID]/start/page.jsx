"use client";
import { db } from "@/utils/db";
import { InterviewMate } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import QuestionsSection from "./_components/QuestionsSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";

const StartInterview = ({ params }) => {
    const [interviewData, setInterviewData] = useState();
    const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
    const [activeQuestion, setActiveQuestion] = useState(0);

  const getInterviewDetails = async () => {
    const res = await db
      .select()
      .from(InterviewMate)
      .where(eq(InterviewMate.mockId, params.interviewID));

      const jsonMockResp = JSON.parse(res[0].jsonMockResp);
      console.log(jsonMockResp);

      setMockInterviewQuestion(jsonMockResp);
      setInterviewData(res[0]);

  };

  useEffect(() => {
    getInterviewDetails()
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        <QuestionsSection mockInterviewQuestion={mockInterviewQuestion} 
        activeQuestionIndex={activeQuestion}
        />
         
         <RecordAnswerSection/>
    </div>  
)
};

export default StartInterview;

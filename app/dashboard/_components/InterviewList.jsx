"use client";
import { db } from "@/utils/db";
import { InterviewMate } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import React, { use, useEffect, useState } from "react";
import InterviewItemCard from "./InterviewItemCard";

const InterviewList = () => {
  const [interviews, setInterviews] = useState([]);
  const { user } = useUser();

  const getInterviewList = async () => {
    const result = await db
      .select()
      .from(InterviewMate)
      .where(
        eq(InterviewMate.createdBy, user?.primaryEmailAddress?.emailAddress)
      )
      .orderBy(desc(InterviewMate.createdAt));

    console.log(result);

    setInterviews(result);
  };

  useEffect(() => {
    getInterviewList();
  }, [user]);
  return (
    <div className="font-medium text-xl">
      <h2>
        <b>Previous Mock Interviews</b>
      </h2>
      <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {interviews?.map((interview, index) => {
          return <InterviewItemCard 
          interview={interview}
          key={index} />;
        })}
      </div>
    </div>
  );
};

export default InterviewList;

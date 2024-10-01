import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const InterviewItemCard = ({ interview }) => {
  return (
    <div className="border shadow-sm rounded-lg p-4 space-y-1">
      <h2 className="font-bold text-primary">{interview?.jobPosition}</h2>
      <h2 className="text-sm text-gray-500">
        Years of Experience: {interview?.jobExperience}
      </h2>
      <h2 className="text-sm text-gray-400">
        Created At: {interview?.createdAt}
      </h2>

      <div className="flex justify-between mt-2 w-full gap-5">
        <Link
          href={`/dashboard/interview/${interview?.mockId}/feedback`}
          className="w-1/2"
        >
          <Button variant="outline" className="w-full">
            Feedback
          </Button>
        </Link>
        <Link
          href={`/dashboard/interview/${interview?.mockId}/start`}
          className="w-1/2"
        >
          <Button className="w-full">Start</Button>
        </Link>
      </div>
    </div>
  );
};

export default InterviewItemCard;

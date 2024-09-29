import { Lightbulb } from "lucide-react";
import React from "react";

const QuestionsSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
  return (
    <div className="p-5 border rounded-lg mt-10">
      <div className="grid gird-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {mockInterviewQuestion?.map((question, index) => {
          return (
            <h2
              className={`p-2 bg-secondary rounded-full md:text-xs text-center  cursor-pointer ${
                activeQuestionIndex === index && "bg-primary text-white"
              }`}
            >
              Question # {index + 1}
            </h2>
          );
        })}
      </div>
      <h2 className="my-5 text-md md:text-lg text-center">
        {mockInterviewQuestion?.[activeQuestionIndex]?.question}
      </h2>

      <div className="border flex  rounded-lg p-5 bg-blue-50 mt-10">
        <h2 className="flex gap-2 items-center text-blue-700">
          <Lightbulb />
          <strong>Note: </strong>
          <h2 className="text-sm">
            Click on record answer when you are ready, Good Luck!
          </h2>
        </h2>
      </div>
    </div>
  );
};

export default QuestionsSection;

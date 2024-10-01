import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";

const QuestionsSection = ({ mockInterviewQuestion, activeQuestion }) => {
  const textToSpeech = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry your browser does not support text to speech");
    }
  };

  return (
    <div className="p-5 border md:flex md:flex-col md:justify-around rounded-lg mt-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {mockInterviewQuestion &&
          mockInterviewQuestion.map((question, index) => {
            return (
              <h2
                key={index}
                className={`p-2 bg-secondary rounded-full md:text-xs text-center cursor-pointer ${
                  activeQuestion === index ? "bg-primary text-white" : ""
                }`}
              >
                Question # {index + 1}
              </h2>
            );
          })}
      </div>
      <h2 className="my-5 text-md md:text-lg text-center">
        {mockInterviewQuestion?.[activeQuestion]?.question}
      </h2>

      <Volume2
        className="cursor-pointer my-5"
        onClick={() =>
          textToSpeech(mockInterviewQuestion?.[activeQuestion]?.question)
        }
      />

      <div className="border flex  rounded-lg p-5 bg-blue-50">
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

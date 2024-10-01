"use client";
import { Button } from "@/components/ui/button";
import { chatSession } from "@/utils/aiGeminiModel";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { Mic, StopCircle } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useSpeechToText from "react-hook-speech-to-text";
import Webcam from "react-webcam";
import { toast } from "sonner";

const RecordAnswerSection = ({
  mockInterviewQuestion,
  activeQuestion,
  interviewData,
}) => {
  const [userAnswer, setUserAnswer] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  const startStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      startSpeechToText();
    }
  };

  const updateUserAnswer = async () => {
    setLoading(true);
    const feedbackPrompt = `{
      "question": "${mockInterviewQuestion[activeQuestion].question}",
      "answer": "${mockInterviewQuestion[activeQuestion].answer}",
      "userAnswer": "${userAnswer}",
      "request": "Based on the provided interview question and user's answer, please give feedback. Highlight areas of improvement if any. Limit the feedback to 3-5 lines.",
      "responseFormat": {
      "rating": "Out of 10",
      "feedback": "3-5 lines providing constructive feedback and suggestions for improvement"
      }
    }`;

    const result = await chatSession.sendMessage(feedbackPrompt);

    const mockJsonResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");

    const jsonFeedback = JSON.parse(mockJsonResp);

    const resp = await db.insert(UserAnswer).values({
      mockIdRef: interviewData.mockId,
      question: mockInterviewQuestion[activeQuestion].question,
      correctAnswer: mockInterviewQuestion[activeQuestion].answer,
      userAns: userAnswer,
      feedback: jsonFeedback.feedback,
      rating: jsonFeedback.rating,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("YYYY-MM-DD"),
    });

    if (resp) {
      toast("Answer saved successfully");
      setUserAnswer("");
      setResults([]);
    }
    setResults([]);
    setLoading(false);
  };

  useEffect(() => {
    results.map((result) => {
      setUserAnswer((prevAns) => prevAns + result.transcript);
    });
  }, [results]);

  useEffect(() => {
    if (!isRecording && userAnswer.length > 5) {
      updateUserAnswer();
      // if (userAnswer.length < 5) {
      //   setLoading(false);
      //   toast("Error while saving your answer, Please record again");
      //   return;
      // }
    }
  }, [userAnswer]);

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col justify-center items-center bg-secondary rounded-lg p-5 mt-10">
        <Image
          src={"/webcam.svg"}
          width={200}
          height={200}
          className="absolute"
        />
        <Webcam
          mirrored={true}
          style={{
            height: "100%",
            width: "100%",
            zIndex: 10,
          }}
        />
      </div>

      <Button
        disabled={loading}
        onClick={startStopRecording}
        variant="outline"
        className="mt-10  w-full"
      >
        {isRecording ? (
          <h2 className="text-red-400 flex gap-2">
            <StopCircle /> Stop Recording
          </h2>
        ) : (
          <h2 className="text-red-400 flex gap-2">
            <Mic /> Record Answer
          </h2>
        )}
      </Button>
    </div>
  );
};

export default RecordAnswerSection;

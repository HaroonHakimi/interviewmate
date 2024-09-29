import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Webcam from "react-webcam";

const RecordAnswerSection = () => {
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

      <Button variant="outline" className="mt-10  w-full">Record Answer</Button>
    </div>
  );
};

export default RecordAnswerSection;

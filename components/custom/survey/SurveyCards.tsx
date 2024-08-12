import { Card, CardContent } from "@/components/ui/card";
import { File, Folder } from "lucide-react";
import React from "react";

export const SurveyCards = () => {
  return (
    <>
      <Card className="w-full bg-[#F6F7F8] h-full shadow-none border-0">
        <CardContent className="p-5 flex flex-col justify-between gap-10">
          <div>
            <Folder
              className="bg-[#4A65EE80] p-2 rounded-md border"
              size="45"
            />
          </div>
          <div className="flex flex-col space-y-2 ">
            <span className="font-bold">Folder Name/Project Name</span>
            <span className="text-gray-500 ">Jan 24, 2022 </span>
          </div>
          <div className="grid grid-cols-4 gap-3 p-4 bg-[#fff]">
            <File />
            <File />
            <File />
            <File />
            <File />
            <File />
            <File />
            <File />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

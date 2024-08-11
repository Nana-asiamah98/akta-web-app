import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

interface IDashboardMinorCards {
    className?: string;
  value?: number | string;
}
export const DashboardMinorCards = ({ className, value }: IDashboardMinorCards) => {
  return (
    <>
      <Card className="shadow-xl">
        <CardContent className="flex flex-col space-y-5 my-5 ">
          <div
            className={cn(`flex flex-row border rounded-md bg-yellow-400 h-20 w-20 justify-center  items-center border-black border-`, className)}
          >
            <span className="text-2xl font-bold ">{value ?? 10}</span>
          </div>
          <span className="text-lg font-semibold">
            Total Number of Completed Surveys
          </span>
        </CardContent>
      </Card>
    </>
  );
};

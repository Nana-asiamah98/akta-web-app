import { Card, CardContent } from "@/components/ui/card";

interface IDashbardFolderCards {
  percentage?: number;
  completedRecords?: number;
  expectedCompletedRecords?: number;
  title?: string;
}
export const DashbardFolderCards = ({
  percentage,
  title,
  completedRecords,
  expectedCompletedRecords,
}: IDashbardFolderCards) => {
  return (
    <>
      <Card className="border-0 shadow-none rounded-sm">
        <CardContent className="p-6 flex w-full h-28 m-auto justify-start space-x-5 bg-[#F8F9FD] rounded-md shadow-none">
          <div className="flex w-[20%]">
            <div className="flex items-center justify-center">
              <label className="flex h-10 w-10 md:h-10 md:w-10 lg:h-16 lg:w-16 cursor-pointer flex-col items-center justify-center rounded-full border-[5px] border-[#0D548A] bg-[#F8F9FD] uppercase tracking-wide text-[#0D548A] shadow-lg">
                <span className="text-sm font-bold leading-normal">{percentage ?? 100} %</span>
              </label>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full">
            <span className="font-bold">Folder One</span>
            <div className="flex flex-row space-x-3 justify-between">
              <span className="font-bold text-gray-400">
                {title ?? "Completed Records"}
              </span>
              <div className="flex space-x-2 font-bold">
                <span className="">{completedRecords ?? 10}</span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-400">
                  {expectedCompletedRecords ?? 10}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

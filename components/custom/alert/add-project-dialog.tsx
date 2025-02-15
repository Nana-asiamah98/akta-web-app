import { Plus } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { toastMessage } from "@/components/utils/common-utils";

export const AddProjectDialog = () => {
  const [projectName, setProjectName] = useState("");
  const { toast } = useToast();


  const submit = () =>{
    toastMessage("Projected Successfully!")
  }

  

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="flex items-start text-[15px] text-[#0D548A] ">
          <span
            // onClick={() => alert("Favorites Button Clicked")}
            className="flex p-2  gap-2 cursor-pointer hover:cursor-pointer flex-row text-[15px] group-data-[collapsible=icon]:justify-center justify-between bg-transparent hover:bg-transparent text-[#3f3f46b3] "
          >
            <Plus color="#0D548A" />{" "}
            <span className="group-data-[collapsible=icon]:hidden">
              Add Project
            </span>
          </span>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Create A Project</AlertDialogTitle>
          </AlertDialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Project Name
              </Label>
              <Input
                id="name"
                value={projectName}
                className="col-span-3"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setProjectName(e.target.value);
                }}
              />
            </div>
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={submit}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

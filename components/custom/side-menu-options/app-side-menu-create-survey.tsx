import { AktaLogo } from "@/components/customIcons/AktaLogo";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ChevronDown, CirclePlus, Link } from "lucide-react";
import React from "react";
import { Button } from "../button";
import { useToast } from "@/hooks/use-toast";

const SidebarCreateSurvey = () => {
  const { toast } = useToast();

  const toastMessage = (message?: string): void => {
    const date: Date = new Date();
    toast({
      title: message,
      description: date.toISOString as any,
    });
  };
  return (
    <div>
      {" "}
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            className="w-full flex !border !rounded justify-center gap-2 text-white bg-[#0D548A] hover:bg-[#183348] hover:text-white active:bg-[#183348] active:text-white"
            tooltip={"Create Survey"}
            onClick={() => {toastMessage("Create Survey")}}
          >
            <span className="group-data-[collapsible=icon]:h-5 group-data-[collapsible=icon]:w-10  !group-data-[collapsible=icon]:flex  group-data-[collapsible=icon]:m-auto">
              <CirclePlus size={15} />{" "}
            </span>
            <span className="group-data-[collapsible=icon]:hidden">
              Create Survey
            </span>
            <span className="group-data-[collapsible=icon]:hidden">
              <ChevronDown />
            </span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </div>
  );
};

export default SidebarCreateSurvey;

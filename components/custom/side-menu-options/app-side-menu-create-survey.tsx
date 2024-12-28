import { AktaLogo } from "@/components/customIcons/AktaLogo";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ChevronDown, CirclePlus, Link } from "lucide-react";
import React from "react";
import { Button } from "../button";

const SidebarCreateSurvey = () => {
  return (
    <div>
      {" "}
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton className="w-full flex !border !rounded justify-center gap-2 text-white bg-[#0D548A] hover:bg-[#183348] hover:text-white" tooltip={"Create Survey"}>
            <span className="group-data-[collapsible=icon]:h-5 group-data-[collapsible=icon]:w-10  !group-data-[collapsible=icon]:mx-10 ">
              <CirclePlus size={15}/>{" "}
            </span>
            <span className="group-data-[collapsible=icon]:hidden">
              Create Survey
            </span>
            <span>
              <ChevronDown />
            </span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </div>
  );
};

export default SidebarCreateSurvey;

"use client";
import { Crown } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Separator } from "@radix-ui/react-separator";
import { SidebarTrigger } from "../ui/sidebar";

const Navbar = () => {
  return (
    <div>
      <header className="flex h-16 shrink-0 items-center text-white bg-[#0D548A] gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4 w-full">
          <SidebarTrigger className="-ml-1 text-white" />
          <Separator className="mr-2 h-4" />
          <div className="w-full m-auto text-sm flex justify-between p-3 text-white">
            <div className="w-full flex justify-start m-auto">
              <span className="overflow-hidden truncate w-10 text-sm  lg:w-full">
                You’re currently on a free package plan. Would you like to
                upgrade to a premium package?
              </span>
            </div>
            <Button className="flex h-8 justify-start gap-2 px-4 bg-[#F8F9FD] text-[#0D548A] text-sm">
              <Crown
                color="#F2994A"
                strokeWidth={2}
                absoluteStrokeWidth={true}
              />{" "}
              Upgrade to Premium
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

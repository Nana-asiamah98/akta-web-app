"use client";

import { AktaLogo } from "@/components/customIcons/AktaLogo";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import * as React from "react";
import Link from "next/link";

const SidebarMenuIcon = () => {

  return (
    <div>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton className="group-data-[collapsible=icon]:size-1">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <AktaLogo className="size-2" />
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </div>
  );
};

export default SidebarMenuIcon;

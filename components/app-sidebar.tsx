"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Folder,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import SidebarMenuIcon from "./custom/side-menu-options/app-side-menu-icon";
import { Separator } from "./ui/separator";
import SidebarCreateSurvey from "./custom/side-menu-options/app-side-menu-create-survey";
import { SidebarFavouriteMenu } from "./custom/side-menu-options/app-side-menu-favourite";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Folder Name/Project Name",
      url: "#",
      icon: Folder,
      isActive: true,
      items: [
        {
          title: "Politics",
          url: "#",
        },
        {
          title: "Finance",
          url: "#",
        },
        {
          title: "Health",
          url: "#",
        },
        {
          title: "Education",
          url: "#",
        },
        {
          title: "Law",
          url: "#",
        },
      ],
    },
    {
      title: "Folder Name/Project Name",
      url: "#",
      icon: Folder,
      isActive: false,
      items: [
        {
          title: "Politics",
          url: "#",
        },
        {
          title: "Finance",
          url: "#",
        },
        {
          title: "Health",
          url: "#",
        },
        {
          title: "Education",
          url: "#",
        },
        {
          title: "Law",
          url: "#",
        },
      ],
    },
  ],
  favourites: [
    {
      name: "Health",
      colorHexCode: "#0D548A",
      url: "#",
    },
    {
      name: "Finance",
      colorHexCode: "#636363",
      url: "#",
    },
    {
      name: "Agriculture",
      colorHexCode: "#27AE60",
      url: "#",
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="space-y-5 my-5">
        <SidebarMenuIcon />
        <SidebarSeparator />
        <SidebarCreateSurvey />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <SidebarFavouriteMenu items={data.favourites}  />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

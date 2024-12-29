import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Circle } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ISidebarFavouriteMenu {
  name: string;
  colorHexCode: string;
  url?: string | null;
}

export const SidebarFavouriteMenu = ({
  items,
}: {
  items: {
    name: string;
    colorHexCode: string;
    url: string ;
  }[];
}) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-[18px] font-semibold">
        Favourite
      </SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild tooltip={item.name}>
                <span className="flex gap-3 text-sm">
                  <Circle
                    size={16}
                    color={item.colorHexCode}
                    strokeWidth={3}
                    absoluteStrokeWidth
                  />
                  {item.name}
                </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

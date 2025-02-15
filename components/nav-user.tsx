"use client";

import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Power,
  Sparkles,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  IKeycloakUserInfoResponse,
  getUserInfo,
  logoutKeycloakSession,
} from "@/services/keycloak-services";
import { ICustomRESTResponse } from "@/lib/interfaces";
import { stringAvatar } from "@/hooks/use-string-avatar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

export function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const { isMobile } = useSidebar();

  const { data: session } = useSession();
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<
    IKeycloakUserInfoResponse | undefined
  >();

  useEffect(() => {
    getUserInfo(session?.tokens?.access_token).then(
      (response: ICustomRESTResponse) => {
        if (!response.isError) {
          const { data } = response;
          setUserInfo(data);
        }
      }
    );
  }, [session]);

  const userAuthLogout = async (state: boolean) => {
    logoutKeycloakSession(session?.tokens?.refresh_token).then(
      (response: ICustomRESTResponse) => {
        if (!response.isError) {
          signOut({ redirect: false, callbackUrl: "/" }).then((value: any) => {
            router.push(value?.url);
          });
        }
        console.log("Failed :: ", { response });
      }
    );
  };

  return (
    <>
      <Dialog>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage
                      {...stringAvatar(userInfo?.name ?? "User Name")}
                      alt={userInfo?.name}
                    />
                    <AvatarFallback
                      className="rounded-lg"
                      {...stringAvatar(userInfo?.name ?? "User Name")}
                    />
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      {userInfo?.name ?? "User Name"}
                    </span>
                    <span className="truncate text-xs">
                      {userInfo?.email ?? "User Email"}
                    </span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage
                        {...stringAvatar(userInfo?.name ?? "User Name")}
                        alt={userInfo?.name}
                      />
                      <AvatarFallback
                        className="rounded-lg"
                        {...stringAvatar(userInfo?.name ?? "User Name")}
                      />
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {userInfo?.name ?? "User Name"}
                      </span>
                      <span className="truncate text-xs">
                        {userInfo?.email ?? "User Email"}
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <BadgeCheck />
                    Account
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell />
                    Notifications
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DialogTrigger asChild>
                  <DropdownMenuItem onClick={(e) => e.preventDefault}>
                    <span className="flex justify-start gap-3 cursor-pointer font-semibold text-red-500">
                      <Power /> Logout
                    </span>
                  </DropdownMenuItem>
                </DialogTrigger>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
        <DialogContent className="!backdrop-blur sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Logout {userInfo?.given_name}</DialogTitle>
            <DialogDescription>Do you want to logout?</DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <div className="flex w-full justify-end  space-x-2">
                <Button
                  onClick={() => userAuthLogout(true)}
                  size="sm"
                  className="px-3 bg-red-600"
                >
                  Yes
                </Button>
                <Button
                  onClick={() => userAuthLogout(false)}
                  size="sm"
                  className="px-3 bg-[#0D548A]"
                >
                  No
                </Button>
              </div>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

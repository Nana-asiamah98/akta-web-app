"use client";
import { Power, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { DialogClose } from "@radix-ui/react-dialog";
import {
  IKeycloakResponse,
  IKeycloakUserInfoResponse,
} from "@/services/keycloak-services";

interface ILogout {
  approveLogout: (state: boolean) => void;
  userInfo: IKeycloakUserInfoResponse | undefined;
}
export const UserProfileDropDown = ({ approveLogout, userInfo }: ILogout) => {
  return (
    <>
      <Dialog >
        
        <DropdownMenu>
          <DropdownMenuTrigger className="flex flex-row gap-8 h-14 items-center border-t px-6 lg:h-[90px] lg:px-6">
            <Avatar>
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1 text-sm ">
              <span className="font-semibold">
                {userInfo?.name ?? "User Name"}
              </span>
              <span>{userInfo?.email ?? "User Email"}</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent side={`right`} sideOffset={10}>
            <DropdownMenuLabel>
              <span>{userInfo?.name ?? "User Name"}</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex justify-start gap-3">
              <User /> <span>Profile</span>
            </DropdownMenuItem>

            <DialogTrigger asChild>
              <DropdownMenuItem onClick={(e) => e.preventDefault}>
                <span className="flex justify-start gap-3 font-semibold text-red-500">
                  <Power /> Logout
                </span>
              </DropdownMenuItem>
            </DialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>
        <DialogContent className="!backdrop-blur sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Logout {userInfo?.given_name}</DialogTitle>
            <DialogDescription>Do you want to logout?</DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <div className="flex w-full justify-end  space-x-2">
                <Button
                  onClick={() => approveLogout(true)}
                  size="sm"
                  className="px-3 bg-red-600"
                >
                  Yes
                </Button>
                <Button
                  onClick={() => approveLogout(false)}
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
};

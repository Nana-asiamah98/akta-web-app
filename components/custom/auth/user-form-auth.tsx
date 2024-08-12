"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "../Icons";
import Link from "next/link";
import { Clipboard } from "lucide-react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <>
      <div className="relative flex w-full flex-col justify-center space-y-6 sm:w-[450px] ">
        <div className="flex flex-col space-y-2 text-start">
          <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
          <p className="text-sm text-muted-foreground">
            Welcome back, discover an efficient way of creating and responding
            to surveys!
          </p>
        </div>
        <div className={cn("grid gap-6", className)} {...props}>
          <form onSubmit={onSubmit}>
            <div className="grid gap-7">
              <div className="grid gap-1">
                <Label className="sr-only" htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="Email"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  disabled={isLoading}
                />
              </div>
              <div className="grid gap-1">
                <Label className="sr-only" htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="Password"
                  type="password"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  disabled={isLoading}
                />
              </div>
              <div className="flex items-end justify-end">
                <Link href={`#0`} className="font-semibold">
                  Forgot Password?
                </Link>
              </div>
              <Button disabled={isLoading} className="bg-[#0D548A]">
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Login
              </Button>
            </div>
          </form>

          <div className=" bg-[#F8F9FD] w-full h-24 flex justify-between p-5 m-auto items-center">
            <Clipboard  className="w-4 h-4 md:w-10 md:h-10"/>
            <div className="flex flex-col space-y-2">
              <span className="text-[12px] md:text-sm">
                Are you a respondent looking to answer a survey?
              </span>
              <Link
                className="font-semibold text-[12px] md:text-sm text-[#0D548A]"
                href={`/#0`}
              >
                Click here to answer a survey
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 bottom-0    mb-4 text-center text-black  dark:text-white">
        <span className="text-center">
        Don’t have an account? {"  "}
          <Link href={`/register`} className="font-bold text-[#0D548A]">
          Register
          </Link>
        </span>
      </div>
    </>
  );
}

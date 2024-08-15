"use client";
import Image from "next/image";
import Link from "next/link";

import { UserAuthForm } from "@/components/custom/auth/user-form-auth";
import { signIn, SignInResponse } from "next-auth/react";

import { AktaLogo } from "@/components/customIcons/AktaLogo";
import { NEXT_STATE, PREVIOUS_STATE } from "@/utils/AppConstants";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import React, { useState } from "react";

interface IJumbotron {
  key: string;
  header: string;
  description: string;
}

const jumbotronTextData: IJumbotron[] = [
  {
    key: `firstLayer`,
    header: `Let’s create beautiful data together.`,
    description: `A text here will really be helpful. A slider of texts indication
  who Researchers, Businesses and Respondents are.`,
  },
  {
    key: `secondLayer`,
    header: `Let’s create beautiful data together. Updated`,
    description: `A text here will really be helpful. A slider of texts indication
  who Researchers, Businesses and Respondents are. Updated`,
  },
  {
    key: `thirdLayer`,
    header: `Let’s create beautiful data together. Updated Third`,
    description: `A text here will really be helpful. A slider of texts indication
  who Researchers, Businesses and Respondents are. Updated Third`,
  },
];

export default function AuthenticatedLogin() {
  const [jumbotron, setJumbotron] = useState<IJumbotron>(jumbotronTextData[0]);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      signIn("credentials", {
        username: username,
        password: password,
        redirect: true,
        callbackUrl: `${process.env.NEXT_PUBLIC_PREFIX_URL}/${username}`,
      }).then((response: SignInResponse | undefined) => {
        const { ok, error, status } = response as SignInResponse;
        if (ok) {
          console.log("Login Successful");
        } else {
          console.log("Failed To Login", { error, status });
        }
      });
      setIsLoading(false);
    }, 3000);
  };

  const transitionLayer = (key: string) => {
    const selectedJumboTronArray: IJumbotron[] = jumbotronTextData.filter(
      (value: IJumbotron) => value.key === key
    );
    const currentJumbotron: number = jumbotronTextData
      .map((value: IJumbotron) => value.key)
      .indexOf(jumbotron.key);
    setCounter(currentJumbotron);
    setJumbotron(selectedJumboTronArray[0]);
  };

  const buttonTransition = (state: string) => {
    const currentJumbotron: number = jumbotronTextData
      .map((value: IJumbotron) => value.key)
      .indexOf(jumbotron.key);
    const selectedValue: number =
      state === PREVIOUS_STATE
        ? currentJumbotron - 1 !== -1
          ? currentJumbotron - 1
          : 0
        : currentJumbotron + 1 > jumbotronTextData.length - 1
        ? jumbotronTextData.length - 1
        : currentJumbotron + 1;
    setCounter(selectedValue);
    setJumbotron(jumbotronTextData[selectedValue]);
  };

  return (
    <>
      <div className="md:hidden flex flex-row mt-10 items-center justify-center w-full ">
        <AktaLogo />
      </div>
      <div className="container relative  h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/"
          className={
            "absolute hidden lg:block right-4 top-4 md:right-8 md:top-8"
          }
        >
          <AktaLogo />
        </Link>
        <div className="relative lg:w-[70%] hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-[#0D548A]" />
          <div className="relative flex flex-col my-auto justify-center items-center text-lg font-medium space-y-20 w-full">
            <div className="flex mx-auto space-x-5  ">
              <button
                className={`${
                  counter === 0 ? `bg-white` : `bg-[#F8F9FD] bg-opacity-20`
                } w-14 h-2 rounded-md `}
                onClick={() => transitionLayer(`firstLayer`)}
              >
                {" "}
              </button>
              <button
                className={`${
                  counter === 1 ? `bg-white` : `bg-[#F8F9FD] bg-opacity-20`
                } w-14 h-2 rounded-md `}
                onClick={() => transitionLayer(`secondLayer`)}
              ></button>
              <button
                className={`${
                  counter === 2 ? `bg-white` : `bg-[#F8F9FD] bg-opacity-20`
                } w-14 h-2 rounded-md `}
                onClick={() => transitionLayer(`thirdLayer`)}
              ></button>
            </div>
            <div className="w-full flex justify-center">
              <Image
                src={`/childComputer.png`}
                alt="landpage_icon"
                width={300}
                height={300}
              />
            </div>
            <div className="flex flex-col space-y-10 w-[80%]">
              <h1 className="font-bold text-[32px] tracking-wider leading-relaxed">
                {jumbotron?.header}
              </h1>
              <p className="tracking-wider leading-relaxed font-light text-lg">
                {jumbotron?.description}
              </p>
            </div>
          </div>
          <div className="relative mt-5 flex flex-row pl-10 gap-2 justify-start w-full">
            <CircleArrowLeft
              onClick={() => buttonTransition(PREVIOUS_STATE)}
              className={`w-10 h-10 thumbsUpIcon`}
            />
            <CircleArrowRight
              onClick={() => buttonTransition(NEXT_STATE)}
              className={`w-10 h-10 thumbsUpIcon`}
            />
          </div>
        </div>
        <div className=" lg:p-8 lg:w-[50%] flex flex-col">
          <UserAuthForm
            onSubmit={onSubmit}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setPassword={setPassword}
            setUserName={setUsername}
          />
        </div>
      </div>
    </>
  );
}

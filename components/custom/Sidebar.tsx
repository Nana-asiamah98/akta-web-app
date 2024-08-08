'use client'
import {
  Bell,
  ChevronDown,
  Circle,
  CirclePlus,
  File,
  Folder,
  Home,
  LineChart,
  Mic,
  Package,
  Package2,
  Plus,
  ShoppingCart,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AktaLogo } from "../customIcons/AktaLogo";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

const Sidebar = () => {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center  px-6 lg:h-[60px] lg:px-6 lg:py-10">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <AktaLogo />
          </Link>
        </div>
        <div className="flex h-14 items-center border-b px-6 lg:h-[90px] lg:px-6">
          <Button
            size="lg"
            className="w-full flex justify-center gap-2 bg-[#0D548A]"
          >
            <CirclePlus /> Create Survey
            <ChevronDown />
          </Button>
        </div>
        <div className="flex-1 ">
          <nav className="grid items-start p-7 h-auto border-b text-sm font-medium lg:px-4 space-y-5">
            <Accordion type="multiple">
              <AccordionItem
                value="item-1"
                className="flex flex-col items-start gap-3 rounded-lg ext-muted-foreground transition-all hover:text-primary"
              >
                <AccordionTrigger className="flex flex-row justify-between w-full text-lg mb-5">
                  My Projects <ChevronDown />
                </AccordionTrigger>
                <AccordionContent>
                  <AccordionItem
                    value="item-1_1"
                    className="flex flex-col items-start gap-3 rounded-lg ext-muted-foreground transition-all hover:text-primary"
                  >
                    <AccordionTrigger className="flex flex-row items-start gap-2 ustify-between w-full">
                      <Folder /> Folder Name/ Project Name <ChevronDown />
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col items-start gap-2 px-7 ">
                      <div className="flex flex-row items-start gap-1">
                        <File /> Polictics
                      </div>
                      <div className="flex flex-row items-start gap-1">
                        <File /> Finance
                      </div>
                      <div className="flex flex-row items-start gap-1">
                        <File /> Education
                      </div>
                      <div className="flex flex-row items-start gap-1">
                        <File /> Health
                      </div>
                      <div className="flex flex-row items-start gap-1">
                        <File /> Law
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </AccordionContent>
                <AccordionContent>
                  <AccordionItem
                    value="item-1_2"
                    className="flex flex-col items-start gap-3 rounded-lg ext-muted-foreground transition-all hover:text-primary"
                  >
                    <AccordionTrigger className="flex flex-row items-start gap-2 ustify-between w-full">
                      <Folder /> Folder Name/ Project Name <ChevronDown />
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col items-start gap-2 px-7 ">
                      <div className="flex flex-row items-start gap-1">
                        <File /> Polictics
                      </div>
                      <div className="flex flex-row items-start gap-1">
                        <File /> Finance
                      </div>
                      <div className="flex flex-row items-start gap-1">
                        <File /> Education
                      </div>
                      <div className="flex flex-row items-start gap-1">
                        <File /> Health
                      </div>
                      <div className="flex flex-row items-start gap-1">
                        <File /> Law
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex items-start gap-4 text-[17px] text-[#0D548A]">
              
              <Button onClick={() => alert("Favorites Button Clicked")} className="flex  gap-4 cursor-pointer hover:cursor-pointer flex-row text-[17px] justify-between bg-transparent hover:bg-transparent text-black "><Plus color="#0D548A" /> Add Project</Button>

            </div>
          </nav>
          <nav className="grid items-start p-7 h-auto border-b text-sm font-medium lg:px-4 space-y-5">
            <div className="flex flex-col  w-full gap-4 text-[17px] text-[#0D548A]">
                <Button onClick={() => alert("Favorites Button Clicked")} className="flex cursor-pointer hover:cursor-pointer flex-row text-[17px] justify-between bg-transparent hover:bg-transparent text-black "><span>Favorites</span> <Plus /></Button>
              <span className="flex gap-3  text-sm">
                <Circle  size={16} strokeWidth={3} absoluteStrokeWidth /> Health
              </span>
              <span className="flex gap-3 text-sm">
              <Circle size={16} color="#636363" strokeWidth={3} absoluteStrokeWidth />Finance
              </span>
              <span className="flex gap-3 text-sm">
                <Circle  size={16} color="#27AE60" strokeWidth={3} absoluteStrokeWidth /> Agriculture
              </span>
              <span className="flex gap-3 text-sm">
                <Circle  size={16} color="#F2994A" strokeWidth={3} absoluteStrokeWidth /> Health
              </span>
            </div>
          </nav>
        </div>
        <div className="flex flex-row   h-14 items-center  px-6 lg:h-[90px] lg:px-6">
          <div className="flex flex-col w-full space-y-6 mb-16">
            <div className="flex flex-row justify-between w-full">
              <div className=" flex justify-start gap-1">
                <User />
                <span className="font-semibold">Profile</span>
              </div>
              <span className="px-2 bg-[#0D548A] text-white rounded-sm">3</span>
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className=" flex justify-start gap-1">
                <Bell />
                <span className="font-semibold">Notifications</span>
              </div>
              <span className="px-2 bg-[#0D548A] text-white rounded-sm">1</span>
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className=" flex justify-start gap-1 text-red-500">
                <Mic />
                <span className="font-semibold ">Speak To Experts</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-8 h-14 items-center border-t px-6 lg:h-[90px] lg:px-6">
          <Avatar>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1 text-sm ">
            <span className="font-semibold">Akta Analytics</span>
            <span>aktaanalytics@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

"use client";
import PageTitle from "@/components/custom/PageTitle";
import { DashbardFolderCards } from "@/components/custom/dashboard/DashbardFolderCards";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  File,
  Folder,
  Tablet,
  TabletIcon,
  TabletsIcon,
  TrendingUp,
} from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { DashboardMinorCards } from "@/components/custom/dashboard/DashboardMinorCards";
import { SurveyCards } from "@/components/custom/survey/SurveyCards";
import Image from "next/image";
const chartData = [
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const Dashboard = () => {
  return (
    <>
      <PageTitle pageTitle="Projects" />
      <div
        className="flex flex-1 rounded-lg border border-dashed shadow-xl bg-[#FFFFFF]"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col w-full s">
          <Tabs defaultValue="overview" className="h-10 ">
            <TabsList className="bg-[#F8F9FD] w-full flex justify-start border-b-blue-700">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="all_survey">All Survey</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="running">Running</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="flex justify-start space-x-4 w-full p-5 ">
                <div className="flex flex-col w-[60%] space-y-10">
                  <Card className="shadow-xl">
                    <CardContent>
                      <div className="flex w-full flex-col gap-2 mt-10">
                        <Card>
                          <CardContent className="flex p-6 items-center m-auto justify-between h-52 text-white bg-[#0D548A] border rounded-md">
                            <ChartContainer
                              config={chartConfig}
                              className="justify-start px-0 aspect-square min-h-[250px]"
                            >
                              <RadialBarChart
                                data={chartData}
                                startAngle={0}
                                endAngle={250}
                                innerRadius={80}
                                outerRadius={110}
                              >
                                <PolarGrid
                                  gridType="circle"
                                  radialLines={false}
                                  stroke="none"
                                  className="first:fill-muted last:fill-background !bg-[#0D548A]"
                                  polarRadius={[86, 74]}
                                />
                                <RadialBar
                                  dataKey="visitors"
                                  background
                                  cornerRadius={10}
                                />
                                <PolarRadiusAxis
                                  tick={false}
                                  tickLine={false}
                                  axisLine={false}
                                >
                                  <Label
                                    content={({ viewBox }) => {
                                      if (
                                        viewBox &&
                                        "cx" in viewBox &&
                                        "cy" in viewBox
                                      ) {
                                        return (
                                          <text
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                          >
                                            <tspan
                                              x={viewBox.cx}
                                              y={viewBox.cy}
                                              className="bg-[#0D548A] text-4xl font-bold"
                                            >
                                              {chartData[0].visitors.toLocaleString()}
                                            </tspan>
                                            <tspan
                                              x={viewBox.cx}
                                              y={(viewBox.cy || 0) + 24}
                                              className="fill-muted-foreground"
                                            >
                                              Visitors
                                            </tspan>
                                          </text>
                                        );
                                      }
                                    }}
                                  />
                                </PolarRadiusAxis>
                              </RadialBarChart>
                            </ChartContainer>

                            <div className="flex flex-col space-y-5 w-[40%]">
                              <span className="font-bold uppercase">
                                Total Survey
                              </span>
                              <span className="text-sm">
                                30/40 Surveys Completed
                              </span>
                            </div>

                            <>
                              <Image
                                src={`/assets/TabletIcon.png`}
                                // className="w-40 h-40"
                                width={100}
                                height={100}
                                alt="TabletIcon"
                              />
                            </>
                          </CardContent>
                        </Card>
                        <Card className="border-0">
                          <CardContent className="p-0 grid grid-cols-2 gap-4 ">
                            <DashbardFolderCards />
                            <DashbardFolderCards />
                            <DashbardFolderCards />
                            <DashbardFolderCards />
                            <DashbardFolderCards />
                            <DashbardFolderCards />
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex flex-col w-[40%]">
                  <Card className="shadow-xl">
                    <CardContent className="grid grid-cols-2 gap-3 my-5 text-white">
                      <DashboardMinorCards />
                      <DashboardMinorCards
                        className={`bg-green-600 !text-white`}
                        value={14}
                      />
                      <DashboardMinorCards className="bg-[#14213D] !text-white" />
                      <DashboardMinorCards className="bg-[#EF476F] text-white" />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="all_survey">
              <div className="flex justify-start space-x-4 w-full p-5 ">
                <div className="grid grid-cols-4 gap-32">
                  <SurveyCards />
                  <SurveyCards />
                  <SurveyCards />
                  <SurveyCards />
                  <SurveyCards />
                  <SurveyCards />
                  <SurveyCards />
                  <SurveyCards />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="drafts">Drafts</TabsContent>
            <TabsContent value="completed">Completed</TabsContent>
            <TabsContent value="running">Running</TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

import PageTitle from "@/components/custom/PageTitle";
import { DashbardFolderCards } from "@/components/custom/dashboard/DashbardFolderCards";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  return (
    <>
      <PageTitle pageTitle="Projects" />
      <div
        className="flex flex-1 rounded-lg border border-dashed shadow-sm bg-[#FFFFFF]"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col w-full">
          <Tabs defaultValue="overview" className="h-10 ">
            <TabsList className="bg-[#F8F9FD] w-full flex justify-start border-b-blue-700">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="all_survey">All Survey</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="running">Running</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="flex justify-start space-x-4 w-full p-5">
                <div className="flex flex-col w-[60%] space-y-10">
                  <Card>
                    <CardContent>
                      <div className="flex w-full flex-col gap-5 mt-10">
                        <Card>
                          <CardContent className="flex p-6 px-10 items-center m-auto justify-between h-52 bg-[#0D548A] border rounded-md">
                            <span>Progress</span>
                            <span>Total Survey</span>
                            <span>Checklist</span>
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
                  <span>Secondary Card</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="all_survey">All Survey</TabsContent>
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

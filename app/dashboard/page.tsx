import PageTitle from "@/components/custom/PageTitle";
import { Button } from "@/components/ui/button";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <PageTitle pageTitle="Projects" />
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            This is the Dashboard Page
          </h3>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

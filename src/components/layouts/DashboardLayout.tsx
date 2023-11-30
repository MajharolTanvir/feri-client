import React, { ReactNode } from "react";
import DashboardNav from "../UI/DashboardNav";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <DashboardNav />
      <div className="min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;

import React, { ReactNode } from "react";

const DetailsTab = ({ children }: { children: ReactNode }) => {
  return <div className="w-[95%] md:w-[90%] mx-auto">{children}</div>;
};

export default DetailsTab;

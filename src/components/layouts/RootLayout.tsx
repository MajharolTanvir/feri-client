import React, { ReactNode } from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import MenuBar from "../UI/Menu";
import Hero from "../UI/Hero";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;

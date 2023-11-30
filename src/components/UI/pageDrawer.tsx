import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { SiPowerpages } from "react-icons/si";
import MenuBar from "./Menu";

const PageDrawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <p
        onClick={showDrawer}
        className="text-sm md:text-md lg:text-lg text-slate-100 cursor-pointer"
      >
        All pages
      </p>
      <Drawer
        title="Menubar"
        width={300}
        closable={true}
        onClose={onClose}
        open={open}
        placement="left"
        zIndex={500}
      >
        <MenuBar />
      </Drawer>
    </>
  );
};

export default PageDrawer;

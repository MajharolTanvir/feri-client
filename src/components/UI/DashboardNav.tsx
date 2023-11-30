import { Drawer, Menu } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { SidebarItems } from "./DashboardMenuItems";
import { getUserInfo } from "@/services/auth.services";

const DashboardNav = () => {
    const [open, setOpen] = useState(false);
    const { role } = getUserInfo() as any;

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <section className="bg-slate-900 text-slate-100 p-2 shadow">
      <div className="w-[95%] md:w-[90%] mx-auto">
        <div className="flex justify-between items-center">
          <Link
            className="text-orange-500 no-underline text-md md:text-xl lg:text-2xl font-bold"
            href="/"
          >
            Feri
          </Link>
          <div>
            <span
              className="text-slate-100 cursor-pointer font-medium"
              onClick={showDrawer}
            >
              Pages
            </span>
            <Drawer
              title="Menus"
              placement="left"
              width="250"
              onClose={onClose}
              open={open}
            >
              <Menu
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={SidebarItems(role)}
              />
            </Drawer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardNav;

import React, { useMemo, useState } from "react";
import { Badge, Popover } from "antd";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import PageDrawer from "./pageDrawer";
import SearchBar from "./SearchBar";
import { isLoggedIn, removeUserInfo } from "@/services/auth.services";
import ButtonCom from "./button";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const userInfo = isLoggedIn();
  const [showArrow, setShowArrow] = useState(true);
  const [arrowAtCenter, setArrowAtCenter] = useState(false);
  const router = useRouter();

  const click = () => {
    removeUserInfo(authKey);
    router.push("/auth/signin");
  };

  const mergedArrow = useMemo(() => {
    if (arrowAtCenter) return { pointAtCenter: true };
    return showArrow;
  }, [showArrow, arrowAtCenter]);

  const content = (
    <div className="flex flex-col">
      <Link className="my-1 pr-5 text-black" href="/dashboard">
        Dashboard
      </Link>
      <Link className="my-1 pr-5 text-black" href="/profile">
        Profile
      </Link>
      {!userInfo && (
        <Link className="my-1 pr-5 text-black" href="/auth/signin">
          Log in
        </Link>
      )}
      {!userInfo && (
        <Link className="my-1 pr-5 text-black" href="/auth/signup">
          Sign up
        </Link>
      )}
      {userInfo && <ButtonCom click={click}>Sign out</ButtonCom>}
    </div>
  );

  return (
    <section className="bg-slate-900">
      <div className="w-[95%] md:w-[90%] mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-3 justify-between items-center gap-5">
          <div className="flex gap-4 items-center">
            <Link
              className="text-orange-500 no-underline text-md md:text-xl lg:text-2xl font-bold"
              href="/"
            >
              Feri
            </Link>
            <PageDrawer />
          </div>
          <div className="hidden md:block">
            <SearchBar />
          </div>
          <div className="flex gap-2 items-center justify-end">
            <Popover
              placement="bottomRight"
              content={content}
              arrow={mergedArrow}
            >
              <Badge count={5}>
                <HiMiniShoppingBag className="text-lg md:text-2xl bg-slate-100 text-slate-900 p-1 rounded-full" />
              </Badge>
            </Popover>

            <Popover
              placement="bottomRight"
              content={content}
              arrow={mergedArrow}
            >
              <FaUserCircle className="text-lg md:text-2xl bg-slate-100 text-slate-900 p-1 rounded-full" />
            </Popover>
          </div>
        </div>
        <div className="md:hidden block">
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default Navbar;

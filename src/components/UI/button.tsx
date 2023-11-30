import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  click?: any;
};

const ButtonCom = ({ children, click }: ButtonProps) => {
  return (
    <button
      onClick={click}
      className="w-full p-3 my-2 text-slate-100 bg-slate-900 font-bold outline-none border-none rounded-md hover:bg-orange-500 hover:text-slate-100"
    >
      {children}
    </button>
  );
};

export default ButtonCom;

import React from "react";
import { Logo } from "../../constants/logo";
import { data } from "../../constants/index";

const Sidebar = ({ setActiveTab }) => {
  return (
    <div className="w-full flex flex-col px-6 justify-start items-center h-screen">
      <div className="flex items-center basis-[20%] mt-5 w-[50%]">
        <Logo className="size-28" />
        <span className="text-2xl text-white">Master Coding</span>
      </div>
      <div
        className="flex flex-col basis-[80%] overflow-x-auto max-h-[650px] gap-4 items-start"
      >
        {data.map(({ id, task }) => (
          <div
            key={id}
            className="flex w-full py-2 px-4 items-center justify-start rounded outline-none text-white bg-gray-200/20 cursor-pointer transition duration-200 transform shadow-lg hover:bg-[#444] hover:text-hover hover:translate-y-1 hover:shadow-xl text-wrap"
            onClick={() => setActiveTab(id)}
          >
            <span className="font-semibold text-lg ">{task}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

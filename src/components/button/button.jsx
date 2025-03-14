import React from "react";

const Button = ({ setClicked }) => {
  return (
    <button
      onClick={setClicked}
      className="px-4 py-2 bg-[#2f2f2f] cursor-pointer border rounded-2xl text-xl font-bold w-40 hover:bg-white hover:text-black"
    >
      Kết quả
    </button>
  );
};

export default Button;

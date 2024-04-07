import React from "react";
import { LiaSpinnerSolid } from "react-icons/lia";

const Button = ({type, children, busy}) => {
  return (
    <button 
      type={type}
      className="w-full flex justify-center items-center border-2 border-[#418160] h-10 font-semibold bg-[#418160] text-[#fff] hover:bg-[#fff] hover:text-[#418160]  rounded-[4px]"
    >
      { busy ? <LiaSpinnerSolid size={28} className="animate-spin" /> : children }
    </button>
  );
};

export default Button;

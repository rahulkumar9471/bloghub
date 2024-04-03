import React from "react";

const Button = ({children}) => {
  return (
    <button 
      className="w-full border-2 border-[#418160] p-3 font-semibold bg-[#418160] text-[#fff] hover:bg-[#fff] hover:text-[#418160]  rounded-[4px]"
    >
      {children}
    </button>
  );
};

export default Button;

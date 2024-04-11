import React from "react";
import { LiaSpinnerSolid } from "react-icons/lia";

const Button = ({type, children, busy}) => {
  return (
    <button 
      type={type}
      className="w-full flex justify-center items-center h-10 font-semibold border-2 dark:border-dark-subtle dark:text-dark-subtle dark:hover:bg-dark-subtle dark:hover:text-light-subtle border-light-subtle text-light-subtle hover:bg-light-subtle hover:text-dark-subtle focus:outline-none rounded-[4px]"
    >
      { busy ? <LiaSpinnerSolid size={28} className="animate-spin" /> : children }
    </button>
  );
};

export default Button;

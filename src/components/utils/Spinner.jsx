import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <>
      <div className="fixed bg-[#000] flex justify-center items-center max-w-full h-[100vh] top-0 right-0 bottom-0 left-0 shadow-md z-50 transition duration-300 ease-in-out opacity-70 ">
        <div className="loader"></div>
      </div>
    </>
  );
};

export default Spinner;

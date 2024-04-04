import React from "react";

const Title = ({children}) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-[#418160] mb-5">{children}</h1>
    </div>
  );
};

export default Title;

import React from "react";

const Title = ({children}) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold dark:text-dark-subtle text-light-subtle mb-5">{children}</h1>
    </div>
  );
};

export default Title;

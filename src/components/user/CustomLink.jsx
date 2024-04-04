import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ to, children, className }) => {
  return (
    <Link to={to} className={"hover:text-[#418160] " + className}>
      {children}
    </Link>
  );
};

export default CustomLink;

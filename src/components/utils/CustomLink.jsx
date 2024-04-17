import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ to, children, className }) => {
  return (
    <Link to={to} className={"dark:text-dark-subtle text-tertiary hover:text-light-subtle " + className}>
      {children}
    </Link>
  );
};

export default CustomLink;

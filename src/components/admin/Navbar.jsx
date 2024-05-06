import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { FaBloggerB } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../../hooks/"
const Navbar = () => {
    const { handleLogout } = useAuth();
  return (
    <nav className="w-48 min-h-screen bg-[#272727] border-r border-gray-300">
      <div className="flex flex-col justify-between pl-5 h-screen sticky top-0">
        <ul className="">
          <li className="mb-10">
            <Link to="/" className="h-14 p-2 text-white">
              Educationtoday
            </Link>
          </li>
          <li>
            <NavItem to="/">
              <CiHome />
              <span>Home</span>
            </NavItem>
          </li>
          <li>
            <NavItem to="/blog">
              <FaBloggerB />
              <span>Blog</span>
            </NavItem>
          </li>
          <li>
            <NavItem to="/author">
              <FaRegUser />
              <span>Author</span>
            </NavItem>
          </li>
        </ul>
        <div className="flex flex-col items-start p-5">
          <span className="font-blod text-white text-xl">Admin</span>
          <button onClick={handleLogout} className="flex items-center text-red-500 text-sm hover:text-white transition space-x-1">
            <FiLogOut />
            <span>LogOut</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ children, to }) => {
  const commonClasses =
    " flex items-center text-lg space-x-2 p-2 hover:opacity-80";
  return (
    <NavLink
      className={({ isActive }) =>
        (isActive ? "text-white" : "text-gray-400") + commonClasses
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};
export default Navbar;

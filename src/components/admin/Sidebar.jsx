import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { FaBloggerB } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../../hooks";
const Sidebar = () => {
  const { handleLogout, authInfo } = useAuth();
  return (
    <aside className="min-h-screen bg-[#272727] border-r border-gray-300">
      <div className="flex flex-col justify-between p-2 h-screen w-[180px] sticky top-0">
        <ul className="mt-14">
          <li>
            <SideItem to="/">
              <CiHome />
              <span>Home</span>
            </SideItem>
          </li>
          <li>
            <SideItem to="/blog">
              <FaBloggerB />
              <span>Blog</span>
            </SideItem>
          </li>
          <li>
            <SideItem to="/author">
              <FaRegUser />
              <span>Author</span>
            </SideItem>
          </li>
        </ul>
        <div className="flex flex-col items-start p-5">
          <span className="font-blod text-white text-xl">
            {authInfo.profile.name}
          </span>
          <button
            onClick={handleLogout}
            className="flex items-center text-red-500 text-sm hover:text-white transition space-x-1"
          >
            <FiLogOut />
            <span>LogOut</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

const SideItem = ({ children, to }) => {
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
export default Sidebar;

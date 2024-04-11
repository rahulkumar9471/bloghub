import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import CustomLink from "./CustomLink";
import { useAuth, useTheme } from "../../hooks";
import { IoSunnyOutline } from "react-icons/io5";

const Navbar = ({ toggleSidebar }) => {
  const { toggleTheme } = useTheme();

  const [isOpen, setIsOpen] = useState(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const { authInfo, handleLogout } = useAuth();
  const { isLoggedIn } = authInfo;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsHeaderFixed(
        scrollPosition > document.documentElement.clientHeight * 0.2
      );
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <header
      className={`dark:bg-primary bg-secondary w-full z-50 shadow-md dark:border-b-2 dark:border-dark-subtle  ${
        isHeaderFixed ? "fixed top-0" : ""
      }`}
    >
      <nav className="flex w-full justify-between px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] py-4 md:py-6 items-center">
        <div>
          <Link to="/">
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold uppercase dark:bg-dark-subtle bg-light-subtle inline-block text-transparent bg-clip-text">
              EducationToday
            </h1>
          </Link>
        </div>
        <div className="relative lg:w-[20rem] xl:w-[30rem] hidden sm:hidden md:hidden lg:block xl:block">
          <input
            type="text"
            className="w-full border-2 dark:border-dark-subtle dark:text-dark-subtle  border-light-subtle text-light-subtle p-2 pl-[40px] bg-transparent rounded-[4px]"
            placeholder="Search"
          />
          <span className="absolute left-2 top-[10px]">
            {" "}
            <CiSearch className="dark:text-dark-subtle text-light-subtle" size={24} />
          </span>
        </div>
        <div>
          <ul className="flex gap-x-6 md:gap-x-4 lg:gap-x-6 xl:gap-x-8 font-semibold items-center">
            <li className="block">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-[4px] border-2 dark:border-dark-subtle dark:text-dark-subtle dark:hover:bg-dark-subtle dark:hover:text-light-subtle border-light-subtle text-light-subtle hover:bg-light-subtle hover:text-dark-subtle"
              >
                <IoSunnyOutline size={24} />
              </button>
            </li>
            <li className="hidden sm:hidden md:hidden lg:block">
              {isLoggedIn ? (
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="px-4 py-2 border-2 dark:border-dark-subtle dark:text-dark-subtle dark:hover:bg-dark-subtle dark:hover:text-light-subtle border-light-subtle text-light-subtle hover:bg-light-subtle hover:text-dark-subtle rounded focus:outline-none"
                  >
                    {authInfo.profile.name}
                  </button>
                  {isOpen && (
                    <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg origin-top-right right-0">
                      <div className="py-1">
                        {/* Dropdown Items */}

                        <Link
                          to=""
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                          Profile
                        </Link>
                        <Link
                          onClick={handleLogout}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/auth/sign-up"
                  className="px-4 py-3 border-2 dark:border-dark-subtle dark:text-dark-subtle dark:hover:bg-dark-subtle dark:hover:text-light-subtle border-light-subtle text-light-subtle hover:bg-light-subtle hover:text-dark-subtle rounded focus:outline-none"
                >
                  Create an account
                </Link>
              )}
            </li>
            <li className="block sm:block md:block lg:block xl:hidden">
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-[4px] border-2 dark:border-dark-subtle dark:text-dark-subtle dark:hover:bg-dark-subtle dark:hover:text-light-subtle border-light-subtle text-light-subtle hover:bg-light-subtle hover:text-dark-subtle"
              >
                <FaBars size={24} />
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="hidden sm:hidden md:hidden lg:hidden xl:block">
        <ul className="flex w-full justify-around px-[8rem] pb-6 pt-2 font-semibold">
          <li>
            <CustomLink to="/" className="uppercase">
              Home
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/Ui-Ux-Design" className="uppercase">
              Ui/Ux Design
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/Web-Development" className="uppercase">
              Web Development
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/Typography" className="uppercase">
              Typography
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/Freelance-Business" className="uppercase">
              Freelance Business
            </CustomLink>
          </li>
          <li className="flex justify-between items-center">
            <CustomLink to="/Lifestyle" className="uppercase">
              Lifestyle
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/Startups" className="uppercase">
              Startups
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/MoreLayouts" className="uppercase">
              More Layouts
            </CustomLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

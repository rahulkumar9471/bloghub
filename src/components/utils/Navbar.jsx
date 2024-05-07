import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import CustomLink from "./CustomLink";
import { useAuth, useTheme, useSidebar, useNavFixed } from "../../hooks";
import { IoSunnyOutline, IoMoon } from "react-icons/io5";

const Navbar = () => {
  const { toggleTheme, theme } = useTheme();
  const { isHeaderFixed, navhidden } = useNavFixed();
  const { toggleSidebar } = useSidebar();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { authInfo, handleLogout } = useAuth();

  const { isLoggedIn } = authInfo;
  const isVerified = authInfo.profile?.isVerified;

  const navigate = useNavigate();
  const navigateToVerification = () => {
    navigate("/auth/verification", {
      state: authInfo.profile,
    });
  };

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <header
        className={`dark:bg-primary bg-secondary w-full z-50 shadow-md dark:border-dark-subtle border-b-[1px]  ${
          isHeaderFixed ? "fixed top-0" : ""
        }`}
      >
        {isLoggedIn && !isVerified ? (
          <div className="bg-light-subtle text-dark-subtle w-full p-2 text-center border-b-[1px] border-light-subtle">
            <p className="text-sm">
              It looks like you haven't verified your account.{" "}
              <button
                onClick={navigateToVerification}
                className="border-b-[1px] "
              >
                Click to verified.
              </button>
            </p>
          </div>
        ) : null}
        <nav className="flex w-full justify-between px-[1rem] sm:px-[3rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] py-4 md:py-6 items-center">
          <div>
            <Link to="/">
              <h1 className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold uppercase dark:bg-secondary bg-gradient-to-r from-[#34433b] via-[#418160] to-[#236543] inline-block text-transparent bg-clip-text">
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
              <CiSearch
                className="dark:text-dark-subtle text-light-subtle"
                size={24}
              />
            </span>
          </div>
          <div>
            <ul className="flex gap-x-4 md:gap-x-4 lg:gap-x-6 xl:gap-x-8 font-semibold items-center">
              <li className="block">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-[4px] border-2 dark:border-dark-subtle dark:text-dark-subtle dark:hover:bg-dark-subtle dark:hover:text-light-subtle border-light-subtle text-light-subtle hover:bg-light-subtle hover:text-dark-subtle"
                >
                  {theme === "dark" ? (
                    <IoMoon size={20} />
                  ) : (
                    <IoSunnyOutline size={20} />
                  )}
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
                  <>
                    <Link
                      to="/auth/sign-up"
                      className="px-4 py-3 border-2 dark:border-dark-subtle dark:text-dark-subtle dark:hover:bg-dark-subtle dark:hover:text-light-subtle border-light-subtle text-light-subtle hover:bg-light-subtle hover:text-dark-subtle rounded focus:outline-none"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </li>
              <li className="block sm:block md:block lg:block xl:hidden">
                <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-[4px] border-2 dark:border-dark-subtle dark:text-dark-subtle dark:hover:bg-dark-subtle dark:hover:text-light-subtle border-light-subtle text-light-subtle hover:bg-light-subtle hover:text-dark-subtle"
                >
                  <FaBars size={20} />
                </button>
              </li>
            </ul>
          </div>
        </nav>
        {!navhidden && (
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
        )}
      </header>
    </>
  );
};

export default Navbar;

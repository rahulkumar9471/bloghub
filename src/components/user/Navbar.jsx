import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import CustomLink from "./CustomLink";
import { useAuth } from "../../hooks";  

const Navbar = ({toggleSidebar}) => {
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

  return (
    <header
      className={`bg-white w-full z-50 shadow-md ${
        isHeaderFixed ? "fixed top-0" : ""
      }`}
    >
      <nav className="flex w-full justify-between px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] py-4 md:py-6 items-center">
        <div>
          <Link to="/">
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold uppercase bg-gradient-to-r from-[#34433b] via-[#418160] to-[#236543] inline-block text-transparent bg-clip-text">
              EducationToday
            </h1>
          </Link>
        </div>
        <div>
          <ul className="flex gap-x-10 font-semibold items-center">
            <li className="hidden sm:hidden md:hidden lg:block">
              <button className="dark:text-primary text-[#203656] hover:text-[#418160] flex items-center">
                <span className="mr-1">Search</span> <CiSearch className="" />
              </button>
            </li>
            <li className="hidden sm:hidden md:hidden lg:block">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout} 
                  className="text-[#203656] hover:text-[#418160]"
                >
                  {authInfo.profile.name}
                </button>
              ) : (
                <Link
                  href=""
                  to="/auth/sign-in"
                  className="text-[#203656] hover:text-[#418160]"
                >
                  Sign in
                </Link>
              )}
            </li>
            {isLoggedIn ? (
              ""
            ) : (
              <li className="hidden sm:hidden md:hidden lg:block">
                <Link
                  to="/auth/sign-up"
                  className="border-2 border-[#418160] p-3 font-semibold text-[#418160] hover:bg-[#418160] hover:text-[#fff] rounded-[4px]"
                >
                  Create an account
                </Link>
              </li>
            )}
            <li className="block sm:block md:block lg:block xl:hidden">
              <button onClick={toggleSidebar} className="border-2 border-[#418160] p-3 text-[#418160] hover:bg-[#418160] hover:text-[#fff] rounded-[4px]">
                <FaBars />
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
          <li className="flex justify-between items-center">
            <button className="text-[#203656] hover:text-[#418160] uppercase mr-2">
              More Layouts
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

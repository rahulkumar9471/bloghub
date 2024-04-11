import React from "react";
import { Link } from "react-router-dom";
import { IoIosMail, IoIosSend } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import SocialPlugin from "./SocialPlugin";
import CustomLink from "./CustomLink";

const Footer = () => {
  return (
    <>
      <div className="relative h-28 dark:bg-primary bg-secondary shadow-md">
        <div className="absolute w-full px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] bottom-[-80px]">
          <div className="bg-[#000] text-[#fff] p-8 rounded-[10px]">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex justify-start items-center">
                <IoIosMail className="text-[100px] text-red-500" />
                <p className="text-2xl ml-3 font-medium">
                  Subscribe now to get <br />
                  latest updates
                </p>
              </div>
              <div className="flex">
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-[#fff] w-[300px] text-[#fff] p-2 focus:outline-none"
                  placeholder="Email Address...."
                />
                <button className="text-3xl">
                  <IoIosSend />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="border-t-2 dark:bg-primary bg-secondary shadow-md">
        <div className="w-full flex flex-wrap justify-between px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] py-4 md:py-[140px] pt-[140px] text-white text-center">
          <div className="w-full sm:w-full md:w-6/12 lg:w-3/12 xl:w-3/12 text-center">
            <Link to="#">
              <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold uppercase dark:bg-dark-subtle bg-light-subtle inline-block text-transparent bg-clip-text">
                EducationToday
              </h1>
            </Link>
            <p className="mt-4 dark:text-dark-subtle text-light-subtle">
              Include popular icons in your React projects easily with
              react-icons, which utilizes ES6 imports that allows you to include
              only the icons that your project is using.
            </p>
            <SocialPlugin />
          </div>
          <div className="w-full sm:w-full md:w-6/12 lg:w-3/12 xl:w-3/12 text-center mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0">
            <div className="mb-5">
              <h1 className="text-2xl dark:text-dark-subtle text-light-subtle">Explore</h1>
            </div>
            <ul className="flex flex-col gap-y-3">
              <li>
                <CustomLink to="#">Home</CustomLink>
              </li>
              <li>
                <CustomLink to="#">Our Projects</CustomLink>
              </li>
              <li>
                <CustomLink to="#">Profile</CustomLink>
              </li>
              <li>
                <CustomLink to="#">About us</CustomLink>
              </li>
              <li>
                <CustomLink to="Contact-us">Contact us</CustomLink>
              </li>
              <li>
                <CustomLink to="#">Create a account</CustomLink>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-full md:w-6/12 lg:w-3/12 xl:w-3/12 text-center mt-5 sm:mt-5 md:mt-5 lg:mt-0 xl:mt-0">
            <div className="mb-5">
              <h1 className="text-2xl dark:text-dark-subtle text-light-subtle">Explore</h1>
            </div>
            <ul className="flex flex-col gap-y-3">
              <li>
                <CustomLink to="#">Ui/Ux Design</CustomLink>
              </li>
              <li>
                <CustomLink to="#">Web Development</CustomLink>
              </li>
              <li>
                <CustomLink to="#">Typography</CustomLink>
              </li>
              <li>
                <CustomLink to="#">Freelance Business</CustomLink>
              </li>
              <li>
                <CustomLink to="#">Lifestyle</CustomLink>
              </li>
              <li>
                <CustomLink to="#">Startups</CustomLink>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-full md:w-6/12 lg:w-3/12 xl:w-3/12 text-center mt-5 sm:mt-5 md:mt-5 lg:mt-0 xl:mt-0">
            <div className="mb-5">
              <h1 className="text-2xl dark:text-dark-subtle text-light-subtle">Contact</h1>
            </div>
            <div className="text-center dark:text-dark-subtle text-light-subtle">
              <p>
                3rd floor, no 461, Sai sobagu, Outer Ring Rd, Teacher's Colony,
                Sector 5, HSR Layout, Bengaluru, Karnataka 560034
              </p>

              <Link
                className="text-xl flex justify-center items-center gap-x-2 text-center mt-5"
                to=""
              >
                <IoIosMail className="text-center" />
                <p className="text-sm">rk8717989@gmail.com</p>
              </Link>

              <Link
                className="text-l flex justify-center items-center gap-x-2 text-center mt-5"
                to=""
              >
                <FaPhoneAlt />
                <p className="text-sm">+91 7368035305</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-[1px] border-[#2b2b2b]"></div>
        <div className="text-center p-4 dark:text-dark-subtle text-light-subtle">
          <h1 className="text-l">
            &#169; Copyright 2024{" "}
            <Link
              to="https://webkledges.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Educationtoday
            </Link>
          </h1>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React from 'react'
import CustomLink from './CustomLink'
import SocialPlugin from './SocialPlugin'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaArrowDownLong } from 'react-icons/fa6'  

const Sidebar = (props) => {

  const isSidebarOpen= props.isSidebarOpen;
  const toggleSidebar= props.toggleSidebar;

  return (
    <div className="">
    <div
      className={`fixed  ${isSidebarOpen ? '' : "hidden"} bg-[#000] max-w-full h-[100vh] top-0 right-0 bottom-0 left-0 shadow-md z-50 transition duration-300 ease-in-out opacity-70 `}
    ></div>
    <div
      className={`bg-[#fff] ${isSidebarOpen ? "max-w-[400px]" : "max-w-[0px]"}  fixed dark:bg-primary bg-secondary top-0 right-0 h-[100vh] shadow-md z-50 transition-all duration-300 ease-out`}
    >
      <div className="text-right">
        <button onClick={toggleSidebar} className="px-2 mr-8 mt-4 py-1">
          <MdClose className="text-2xl dark:text-dark-subtle text-light-subtle" />
        </button>
      </div>
      <div className="p-10">
        <div className="mt-1">
          <Link to="/">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text3xl font-bold uppercase dark:bg-dark-subtle bg-light-subtle inline-block text-transparent bg-clip-text">
              EducationToday
            </h1>
          </Link>
        </div>
        <div className="mt-2 overflow-hidden">
          <ul className="flex-col">
            <li className="border-b-2 py-3 border-gray">
              <CustomLink
                to="/"
                className="uppercase"
              >
                Home
              </CustomLink>
            </li>
            <li className="border-b-2 py-3 border-gray">
              <CustomLink
                to="Ui-Ux-Design"
                className="uppercase"
              >
                Ui/Ux Design
              </CustomLink>
            </li>
            <li className="border-b-2 py-3 border-gray">
              <CustomLink
                to="Web-Development"
                className="uppercase"
              >
                Web Development
              </CustomLink>
            </li>
            <li className="border-b-2 py-3 border-gray">
              <CustomLink
                to="Typography"
                className="uppercase"
              >
                Typography
              </CustomLink>
            </li>
            <li className="border-b-2 py-3 border-gray">
              <CustomLink
                to="Freelance-Business"
                className="uppercase"
              >
                Freelance Business
              </CustomLink>
            </li>
            <li className="border-b-2 py-3 border-gray">
              <CustomLink
                to="Lifestyle"
                className="uppercase"
              >
                Lifestyle
              </CustomLink>
            </li>
            <li className="border-b-2 py-3 border-gray">
              <CustomLink
                to="Startups"
                className="uppercase"
              >
                Startups
              </CustomLink>
            </li>
            <li className="flex justify-between items-center border-b-2 py-3 border-gray">
              <CustomLink
                to="/"
                className="uppercase mr-2"
              >
                More Layouts
              </CustomLink>
              <FaArrowDownLong />
            </li>
          </ul>
          <div className="">
            <SocialPlugin />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Sidebar
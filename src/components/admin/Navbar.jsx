import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaRegUser } from "react-icons/fa6";
import { useAuth } from "../../hooks";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const { authInfo, handleLogout } = useAuth();
  const [showOption, setShowOption] = useState(false);

  const options = [{ title: "Add Movie" }, { title: "Add Actor" }];
  return (
    <header
      className={`dark:bg-primary bg-secondary w-full z-50 shadow-md dark:border-dark-subtle border-b-[1px] fixed top-0"
      }`}
    >
      <nav className="w-full flex px-[1rem] py-2 gap-x-4">
        <div>
          <Link to="/" className="h-14 text-[#000000] text-xl">
            Educationtoday
          </Link>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="">
            <button className="p-2 rounded-[4px] text-light-subtle">
              <FaBars size={16} />
            </button>
          </div>
          <div className="relative lg:w-[20rem] xl:w-[30rem]">
            <input
              type="text"
              className="w-full border-2 dark:border-dark-subtle dark:text-dark-subtle  border-light-subtle text-light-subtle p-1 pl-[40px] bg-transparent rounded-[4px]"
              placeholder="Search"
            />
            <span className="absolute left-2 top-[6px]">
              {" "}
              <CiSearch
                className="dark:text-dark-subtle text-light-subtle"
                size={24}
              />
            </span>
          </div>
          <div className="relative mr-4">
            <button
              onClick={() => setShowOption(true)}
              className="py-1 rounded-full border-2 p-1 text-light-subtle"
            >
              RK
            </button>
            <CreateOption
              visible={showOption}
              onClose={() => setShowOption(false)}
              handleLogout={handleLogout}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

const CreateOption = ({ handleLogout, visible, onClose }) => {
  const container = useRef();
  const containerID = "options-container";
  useEffect(() => {
    const handleClose = (e) => {
      if (!visible) return;
      const { parentElement, id } = e.target;

      if (parentElement.id === containerID || id === containerID) return;

      if (container.current) {
        if (!container.current.classList.contains("animate-scale"))
          container.current.classList.add("animate-scale-reverse");
      }
    };

    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [visible]);

  // const handleClick = (fn) => {
  //   fn();
  //   onClose();
  // };

  if (!visible) return null;
  return (
    <div
      id={containerID}
      ref={container}
      className="absolute right-0 top-12 flex flex-col py-4 w-[140px] text-center bg-[#FFF] drop-shadow-lg rounded-md animate-scale"
      onAnimationEnd={(e) => {
        if (e.target.classList.contains("animate-scale-reverse")) onClose();
        e.target.classList.remove("animate-scale");
      }}
    >
      <Option
        onClick={onClose}
        className="flex justify-center items-center space-x-2"
      >
        <FaRegUser />
        <span>Profile</span>
      </Option>
      <Option
        onClick={handleLogout}
        className="flex justify-center items-center space-x-2"
      >
        <FiLogOut />
        <span>LogOut</span>
      </Option>
    </div>
  );
};

const Option = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={
        `hover:opacity-80 transition py-1 hover:bg-[#1d2a35] hover:text-white ` +
        className
      }
    >
      {children}
    </button>
  );
};

export default Navbar;

import React from "react";
import { FaRegBookmark, FaRegEye, FaStar } from "react-icons/fa6";
import banner from "../../images/banner.jpg";
import { Link } from "react-router-dom";

const PostCard = () => {
  return (
    <div className="W-full dark:bg-tertiary bg-secondary mt-10 shadow-xl rounded-[4px]">
      <div className="">
        <div className="relative h-[200px] overflow-hidden rounded-t-[4px]">
          <img
            src={banner}
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
            alt=""
          />
          <span className="absolute right-2 top-4 mr-2 text-xl cursor-pointer z-10">
            <FaRegBookmark fontSize={20} fill="#fff" />
          </span>
        </div>
        <div className="px-4 py-4 dark:text-dark-subtle text-light-subtle">
          <div className="">
            <Link to={`/Blog`}>
              <h1 className="text-2xl font-bold mb-2">What is Lorem Ipsum?</h1>
            </Link>
            <div className="flex justify-between items-center">
              <p className="flex justify-start items-center gap-x-1 mt-1">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </p>
              <div className="">
                <p className="text-sm">
                  1,012 <span className="text-[16px] ml-1">Rating</span>
                </p>
              </div>
            </div>
          </div>
          <div className="border-[1px] mt-3 mb-3"></div>
          <div className="flex justify-between items-center">
            <div>
              <h1>Rahul Kumar</h1>
              <p>02 24, 2024</p>
            </div>
            <div className="text-center">
              <FaRegEye className="mx-auto" />
              <p>257</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

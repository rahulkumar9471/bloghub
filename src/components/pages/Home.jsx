import React from "react";
import banner from "../../images/banner.jpg";
import { Link } from "react-router-dom";
import { FaAward, FaBlogger } from "react-icons/fa6";
import { FaBookReader, FaRegBookmark, FaPlayCircle } from "react-icons/fa";
import NumberCounter from "number-counter";
import PostCard from "../utils/PostCard";

const Home = () => {
  const postCards = [];

  const latests = ["1", "2", "3", "4", "5", "6", "7", "8"];
  for (let i = 0; i < latests.length; i++) {
    const latest = latests[i];
    postCards.push(<PostCard key={latest.key} />);
  }

  return (
    <>
      <section className="dark:bg-primary bg-secondary">
        <div className="px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] py-6">
          <div
            className="w-full h-[500px] bg-no-repeat bg-center bg-cover rounded-[4px] relative shadow-lg"
            style={{ backgroundImage: `url(${banner})` }}
          >
            <div className="bg-light-subtle h-[500px] rounded-[4px] opacity-60"></div>
            <div className="absolute top-10 left-0 right-0 p-10">
              <div className="w-full sm:w-full md:w-full lg:w-6/12 text-center sm:text-center md:text-center lg:text-center">
                <h1 className="text-secondary text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold">
                  Find Our Best Online Educational
                  <br /> Blogs & PDF.
                </h1>
                <p className="text-[#fff] mt-8 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
                  Include popular icons in your React projects easily with
                  react-icons, which utilizes ES6 imports that allows you to
                  include only the icons that your project is using.
                </p>
                <div className="mt-8 flex justify-center gap-x-10">
                  <button className="px-4 py-2 border-2 border-dark-subtle text-dark-subtle hover:bg-dark-subtle hover:text-light-subtle rounded focus:outline-none">
                    Learn More
                  </button>
                  <Link
                    to="/auth/sign-up"
                    className="px-4 py-2 border-2 border-dark-subtle bg-dark-subtle text-light-subtle rounded focus:outline-none"
                  >
                    Create Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] py-8">
          <div className="flex flex-wrap justify-around items-center text-center">
            <div className="flex justify-center items-center gap-x-4 text-left my-4">
              <button className="shadow-xl dark:bg-tertiary flex items-center justify-center p-4 w-18 h-18 rounded-full">
                <FaAward size={48} className="text-xl text-[#6366F1]" />
              </button>
              <div>
                <h3 className="text-xl font-bold dark:text-dark-subtle text-light-subtle ">
                  <NumberCounter end={20000} delay={4} postFix="+" />
                </h3>
                <p className="text-l font-medium dark:text-dark-subtle text-light-subtle ">
                  Special Course
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-x-4 text-left my-4">
              <button className="shadow-xl dark:bg-tertiary flex items-center justify-center p-4 w-18 h-18 rounded-full">
                <FaBlogger size={48} className="text-xl text-[#6366F1]" />
              </button>
              <div>
                <h3 className="text-xl font-bold dark:text-dark-subtle text-light-subtle  ">
                  <NumberCounter end={10000} delay={4} postFix="+" />
                </h3>
                <p className="text-l font-medium dark:text-dark-subtle text-light-subtle ">
                  Blogs
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-x-4 text-left my-4">
              <button className="shadow-xl dark:bg-tertiary flex items-center justify-center p-4 w-18 h-18 rounded-full">
                <FaBookReader size={48} className="text-xl text-[#6366F1]" />
              </button>
              <div>
                <h3 className="text-xl font-bold dark:text-dark-subtle text-light-subtle  ">
                  <NumberCounter end={1000} delay={4} postFix="+" />
                </h3>
                <p className="text-l font-medium dark:text-dark-subtle text-light-subtle ">
                  Users
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] py-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold dark:text-dark-subtle text-light-subtle">
                Our Popular Courses
              </h2>
              <div className="border-b-2 mt-4 dark:border-dark-subtle border-light-subtle w-4/12"></div>
            </div>
            <Link
              to="/"
              className="px-4 py-2 border-2 dark:border-dark-subtle dark:text-dark-subtle dark:hover:bg-dark-subtle dark:hover:text-light-subtle border-light-subtle text-light-subtle hover:bg-light-subtle hover:text-dark-subtle rounded focus:outline-none"
            >
              All Courses
            </Link>
          </div>
          <div className="">
            <div className="lg:flex gap-x-10">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6">
                  {postCards}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light-subtle">
        <div className="px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] py-6">
          <div className="lg:flex gap-x-10">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6">
                <div className="md:flex justify-center items-center gap-x-14">
                  <div className="w-full sm:w-full md:w-full sm:text-center md:text-center lg:text-left">
                    <h2 className="text-3xl sm:text-3xl md:text-5xl font-semibold text-dark-subtle">
                      Find Your Course that make Bright Future
                    </h2>
                    <div className="border-b-4 mt-4 border-dark-subtle sm:w-10/12 md:w-10/12 lg:w-3/12 sm:mx-auto md:mx-auto lg:mx-0"></div>
                    <p className="text-sm mb-4 mt-4 text-dark-subtle">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                    <button className="px-4 py-3 border-2 border-dark-subtle text-dark-subtle hover:bg-dark-subtle hover:text-light-subtle rounded focus:outline-none">
                      Get Started
                    </button>
                  </div>
                </div>
                <div className="md:flex justify-center items-center gap-x-14">
                  <div className="w-full sm:w-full md:w-full text-center sm:text-center md:text-center lg:text-center">
                    <div className="p-10 flex justify-center">
                      <div className="relative flex justify-center items-center h-[400px] w-[350px] overflow-hidden rounded-[4px]">
                        <img
                          src={banner}
                          className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
                          alt=""
                        />
                        <span className="absolute play-btn text-center text-xl cursor-pointer z-10"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

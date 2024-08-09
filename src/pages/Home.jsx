import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Startup Job
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() =>
              document
                .getElementById("navbar-default")
                .classList.toggle("hidden")
            }
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="relative bg-white overflow-hidden p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <div className="max-w-7xl mx-auto m-4 p-2">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <div className="mt-10 mx-auto max-w-7xl">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="px-4 sm:px-6 md:px-8 lg:px-0">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block xl:inline">
                        We help you to find your
                      </span>
                      <span className="block space-x-1 text-indigo-700 xl:inline">
                        Job
                      </span>
                    </h1>
                    <p className="mt-3 space-x-3 text-base text-gray-500 sm:mt-5 text-justify sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      Startup Job is the worldwide leader on insights about jobs
                      and companies. Search millions of jobs and get the inside
                      scoop on companies with employee reviews, personalized
                      salary tools, and more. Hiring? Post a job for free.
                    </p>
                    <div className="mt-5 sm:mt-8 m-1% p-3 sm:flex sm:justify-center text-right lg:justify-start">
                      <div className="rounded-md shadow">
                        <Link
                          to="/job"
                          className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-700 px-8 py-3 text-base font-medium text-white hover:bg-indigo-800 md:py-4 md:px-10 md:text-lg"
                        >
                          Search a Job
                          <svg
                            className="w-5 h-5 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </Link>
                      </div>
                      <div className="mt-3 sm:mt-0 m-0  sm:ml-3">
                        <Link
                          to="/Login"
                          className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-200 px-8 py-3 text-base font-medium text-indigo-800 hover:bg-indigo-300 md:py-4 md:px-10 md:text-lg"
                        >
                          Login
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 lg:mt-0 lg:relative">
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                      <img
                        className="h-full w-full rounded-xl object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
                        src="https://img.freepik.com/premium-photo/visual-person-using-productivity-tools-techniques-manage-work-tasks-efficiently_1314467-25711.jpg?w=740"
                        alt="Foto Hero"
                        style={{ filter: "brightness(85%)" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

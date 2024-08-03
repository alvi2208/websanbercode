import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";

const Navigation = () => {
  return (
    <>
      <Navbar>
        <Navbar fluid rounded>
          <Navbar.Brand href="https://flowbite-react.com">
            <img
              src="/favicon.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Flowbite React
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Link
              to="/"
              className="text-black-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/Tugas6"
              className="text-black-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white"
            >
              Tugas6
            </Link>

            <Link
              to="/Tugas7"
              className="text-black-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white"
            >
              Tugas7
            </Link>

            <Link
              to="/Tugas8"
              className="text-black-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white"
            >
              Tugas8
            </Link>

            <Link
              to="/Tugas9"
              className="text-black-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white"
            >
              Tugas9
            </Link>

            <Link
              to="/Tugas10"
              className="text-black-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white"
            >
              Tugas10
            </Link>

            <Link
              to="/Tugas11"
              className="text-black-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white"
            >
              Tugas11
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </Navbar>
    </>
  );
};

export default Navigation;

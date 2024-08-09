import React, { useState, useEffect } from "react";
import axios from "axios";

const Job = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((response) => {
        setJobs(response.data.data); // Sesuaikan dengan struktur data yang diterima
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
      });
  }, []);

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Open Vacancy Job
        </h2>
        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
          Explore the job that suits to you
        </p>
        {/* Search Form */}
        <div className="flex">
          <form className="w-full">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Job here..."
                required=""
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
          <button className="bg-red-600 rounded-lg text-white w-36 ml-5">
            Reset Data
          </button>
        </div>
      </div>

      {/* Job List */}
      <div className="w-full justify-self-center mt-5">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job.id}
              className="p-4 mb-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {job.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {job.job_description}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                <strong>Company:</strong> {job.company_name}, {job.company_city}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                <strong>Type:</strong> {job.job_type} | <strong>Tenure:</strong>{" "}
                {job.job_tenure}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                <strong>Salary:</strong> Rp {job.salary_min} - Rp{" "}
                {job.salary_max}
              </p>
              <img
                src={job.company_image_url}
                alt={`${job.company_name} logo`}
                className="mt-2 w-32"
              />
            </div>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            No job vacancies available.
          </p>
        )}
      </div>

      <div className="w-full justify-self-center mt-5 border-2">
        <div
          className="divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700 rounded-lg border"
          data-testid="flowbite-accordion"
        >
          <button
            className="flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800 text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white"
            type="button"
          >
            <h2 className="text-black font-semibold">Search for jobs</h2>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="h-6 w-6 shrink-0 rotate-180"
              data-testid="flowbite-accordion-arrow"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg"
            data-testid="flowbite-accordion-content"
          >
            <form>
              <div className="mb-3">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Title
                </label>
                <input
                  placeholder="insert job title"
                  name="title"
                  type="text"
                  id="title"
                  className="block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="company_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Company
                </label>
                <input
                  placeholder="insert company name"
                  name="company_name"
                  type="text"
                  id="company_name"
                  className="block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="company_city"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Location
                </label>
                <input
                  placeholder="insert company city"
                  name="company_city"
                  type="text"
                  id="company_city"
                  className="block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-20 p-3 text-white bg-blue-600 rounded-lg"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;

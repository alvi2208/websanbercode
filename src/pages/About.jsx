import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="py-8 px-4 m-30 p-5 mx-auto max-w-screen-xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 gap-16 items-center">
        <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2">
          <img
            className="w-full rounded-lg object-cover"
            src="https://media.istockphoto.com/photos/got-to-make-it-a-productive-night-picture-id886465858?k=20&m=886465858&s=612x612&w=0&h=CN-q-5X6ZiuJET2AIUKz71kvboDpGsmgQCUX9QU9lZQ="
            alt="office content 1"
          />
          <img
            className="w-full rounded-lg object-cover mt-4 sm:mt-0 lg:mt-10"
            src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1lcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="office content 2"
          />
        </div>

        <div className="font-light text-gray-500 sm:text-lg lg:mt-0 mt-8">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-xl text-black text-justify mb-4">
            Startup Job Website is an application made by a local named Alvi
            Adnan, this application is accompanied by a simple UI so that it can
            make it easier for its users. And can also help you find the job you
            want. Look for a job that suits your interests and talents. High
            salary is not the main priority. Most importantly, you can work
            according to your heart's desire and have a balance between life and
            work.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

import React from "react";
import PropTypes from "prop-types";
import banner from "../../assets/banner.png";

function Banner(props) {
  return (
    <section className="container">
      <div
        className="hero min-h-[37.5rem] rounded-3xl"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className=""></div>
        <div className="">
          <div className="">
            <h1 className="text-white text-52 font-bold leading-[4.75rem] w-full max-w-[56.0625rem] mx-auto text-center">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mt-6 text-white text-lg leading-8 text-center w-full max-w-[58.3125rem]">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className="flex items-center gap-6 justify-center mt-10">
              <button className="bg-main px-8 py-6 rounded-full text-xl font-semibold text-black-900">
                Explore Now
              </button>
              <button className="border border-white px-8 py-6 rounded-full text-xl font-semibold text-white">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Banner.propTypes = {};

export default Banner;

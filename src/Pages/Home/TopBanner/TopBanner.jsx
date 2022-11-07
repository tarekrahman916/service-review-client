import React from "react";
import banner from "../../../assets/banner.jpg";

const TopBanner = () => {
  return (
    <div>
      <section className="bg-gray-800 text-gray-100">
        <div className="h-full">
          <img
            src={banner}
            alt=""
            className="w-full h-96 opacity-40 object-cover"
          />
          <div className="container flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl absolute  -translate-y-1/2  top-1/2">
            <h1 className="text-4xl font-bold leading-none sm:text-5xl">
              Photograpy for you
            </h1>
            <p className="px-8 mt-8 mb-12 text-lg">
              Cupiditate minima voluptate temporibus quia? Architecto beatae
              esse ab amet vero eaque explicabo!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopBanner;

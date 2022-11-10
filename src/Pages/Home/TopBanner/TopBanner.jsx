import React from "react";
import profile from "../../../assets/profile.png";
import Typical from "react-typical";

const TopBanner = () => {
  return (
    <div className="h-full top-banner ">
      <section className="bg-gray-700 text-gray-100 ">
        <div className="h-full ">
          <div className="container flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32  ">
            <div className="grid md:grid-cols-2 justify-center">
              <div>
                <h1 className="md:text-5xl text-3xl font-bold leading-none ">
                  HEY, I am Johns
                </h1>
                <h3 className="text-2xl font-bold leading-none mt-5  text-gray-300">
                  I am a professional Photographer
                </h3>
                <p className="px-8 mt-8 mb-12 text-lg">
                  <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                      "Wedding Photography",
                      2000,
                      "BirthDay Photography",
                      2000,
                      "Travel Photography",
                      2000,
                    ]}
                  />
                </p>
              </div>
              <div>
                <img
                  className="border-2 lg:w-full w-1/2 shadow-2xl mx-auto rounded-full "
                  src={profile}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopBanner;

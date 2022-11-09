import React from "react";
import TopBanner from "../TopBanner/TopBanner";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "../../Shared/ServiceCard/ServiceCard";

const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <TopBanner />
      <section>
        <h2 className="text-center text-4xl my-10">Services</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-2 md:mx-10">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="flex justify-center my-5">
          <Link to="/services">
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 inline-flex items-center"
            >
              See All Services
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-5 h-5"
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
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

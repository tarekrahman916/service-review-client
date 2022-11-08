import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ServiceCard from "../Shared/ServiceCard/ServiceCard";

const Services = () => {
  const { user } = useContext(AuthContext);
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <section>
        <h2 className="text-3xl text-center mb-5">All Services</h2>
        <hr />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-2 md:mx-10 my-5">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-3xl text-center mb-5">Reviews</h2>
        <hr />
        <div>
          {user?.uid ? (
            <form className="w-1/2 mx-auto bg-gray-800 p-10 rounded-md mb-5">
              <label
                htmlFor="reviews"
                className="block mb-2 text-sm font-medium  text-gray-400"
              >
                Your Reviews
              </label>
              <textarea
                id="reviews"
                rows="4"
                className="mb-5 block p-2.5 w-full text-sm  rounded-lg border    bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your reviews..."
                required
              ></textarea>
              <div>
                <label
                  for="ratting"
                  className="block mb-2 text-sm font-medium  text-gray-300"
                >
                  Ratings
                </label>
                <input
                  type="text"
                  id="first_name"
                  className=" border mb-5 text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ratings"
                  required
                />
              </div>
              <button
                type="submit"
                class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
              >
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Submit
                </span>
              </button>
            </form>
          ) : (
            <div className="flex justify-center">
              <Link to="/login">
                <button
                  type="button"
                  class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Please login to add a review.
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;

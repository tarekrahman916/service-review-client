import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewCard from "../Shared/RevewCard/ReviewCard";

const ServiceDetails = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { _id, img, name, description, price, ratings } = service;

  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const text = form.text.value;
    const ratings = form.ratings.value;

    const review = {
      text,
      ratings,
      author: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
      service_id: _id,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  console.log(reviews);

  return (
    <div className="mx-2">
      <div class="grid md:grid-cols-2  rounded-lg border shadow-md md:w-9/12 mx-auto my-5   border-gray-700 bg-gray-800 hover:bg-gray-900">
        <img
          class="object-cover w-full rounded-t-lg md:h-auto  md:rounded-none md:rounded-l-lg"
          src={img}
          alt=""
        />
        <div class=" p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight  text-white">
            {name}
          </h5>
          <p class="mb-3 font-normal  text-gray-300">{description}</p>
          <p class="mb-3 text-2xl  text-gray-300">Price: ${price}</p>

          <div className="flex items-center space-x-2 text-yellow-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
            </svg>
            <span className="text-xl font-bold">{ratings}</span>
          </div>
        </div>
      </div>
      <section>
        <h2 className="text-3xl text-center mb-5">Reviews</h2>
        <hr />
        <div>
          {user?.uid ? (
            <form
              onSubmit={handleAddReview}
              className="w-1/2 mx-auto bg-gray-800 p-10 rounded-md mb-5"
            >
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium  text-gray-400"
              >
                Your Reviews
              </label>
              <textarea
                id="text"
                name="text"
                rows="4"
                className="mb-5 block p-2.5 w-full text-sm  rounded-lg border    bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your reviews..."
                required
              ></textarea>
              <div>
                <label
                  htmlFor="ratings"
                  className="block mb-2 text-sm font-medium  text-gray-300"
                >
                  Ratings
                </label>
                <input
                  type="text"
                  id="ratings"
                  name="ratings"
                  className=" border mb-5 text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ratings"
                  required
                />
              </div>
              <button
                type="submit"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-green-200 focus:ring-green-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                  Submit
                </span>
              </button>
            </form>
          ) : (
            <div className="flex justify-center">
              <Link to="/login">
                <button
                  type="button"
                  className="text-white focus:outline-none focus:ring-4  font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-gray-700 border-gray-700"
                >
                  Please login to add a review.
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="grid lg:grid-cols-1 gap-8 mx-10 my-5">
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;

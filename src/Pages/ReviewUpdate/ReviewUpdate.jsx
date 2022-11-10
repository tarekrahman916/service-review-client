import React, { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const ReviewUpdate = () => {
  const review = useLoaderData();
  console.log(review);
  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    const editedReview = {
      text: e.target.text.value,
      ratings: e.target.ratings.value,
    };

    console.log(editedReview);

    fetch(
      `https://service-review-server-gold.vercel.app/review/${review._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(editedReview),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/reviews");
      })
      .catch((err) => console.error(err));
  };

  return (
    <form
      onSubmit={handleEdit}
      className="w-1/2 mx-auto bg-gray-800 p-10 rounded-md mb-5"
    >
      <h3 className="text-center text-white text-2xl">Update Review</h3>
      <label
        htmlFor="text"
        className="block mb-2 text-sm font-medium  text-gray-400"
      >
        Your Reviews
      </label>
      <textarea
        id="text"
        name="text"
        defaultValue={review.text}
        rows="3"
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
          defaultValue={review.ratings}
          className=" border mb-5 text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Ratings"
          required
        />
      </div>
      <div>
        <label
          htmlFor="serviceName"
          className="block mb-2 text-sm font-medium  text-gray-300"
        >
          Service Name
        </label>
        <input
          type="text"
          id="serviceName"
          name="serviceName"
          defaultValue={review.service_name}
          readOnly
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
  );
};

export default ReviewUpdate;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewTableRow from "./ReviewTableRow";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { email } = user;
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [email]);

  console.log(myReviews);
  return (
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg mx-10 my-5">
      <table class="w-full  text-left text-gray-400">
        <thead class=" text-base  uppercase text-gray-600">
          <tr>
            <th scope="col" class="py-3 px-6">
              Service Name
            </th>
            <th scope="col" class="py-3 px-6">
              Reviews
            </th>
            <th scope="col" class="py-3 px-6">
              Ratings
            </th>

            <th scope="col" class="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {myReviews.map((review) => (
            <ReviewTableRow key={review._id} review={review}></ReviewTableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReviews;

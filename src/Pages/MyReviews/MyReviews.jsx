import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import usePageTitle from "../../hooks/usePageTitle";
import ReviewTableRow from "./ReviewTableRow";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const { email } = user;
  const [myReviews, setMyReviews] = useState([]);
  usePageTitle("Review");

  useEffect(() => {
    fetch(
      `https://service-review-server-gold.vercel.app/reviews?email=${email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 402) {
          alert("Unauthorized Access");
          logOut();
        }
        return res.json();
      })
      .then((data) => {
        setMyReviews(data);
        console.log(data);
      });
  }, [email]);

  const handleDelete = (id) => {
    fetch(`https://service-review-server-gold.vercel.app/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = myReviews.filter((review) => review._id !== id);
        setMyReviews(remaining);
        toast.success("Deleted this review");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className=" relative shadow-md sm:rounded-lg mx-10 my-5 p-10 mb-28">
      {myReviews.length === 0 ? (
        <div className="text-center">
          <h1 className="text-4xl text-red-500">No reviews were added</h1>
        </div>
      ) : (
        <table className="w-full  text-left text-gray-400">
          <thead className=" text-base  uppercase text-gray-600">
            <tr>
              <th scope="col" className="py-3 px-6">
                Service Name
              </th>
              <th scope="col" className="py-3 px-6">
                Reviews
              </th>
              <th scope="col" className="py-3 px-6">
                Ratings
              </th>
              <th scope="col" className="py-3 px-6">
                Author
              </th>

              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {myReviews.map((review) => (
              <ReviewTableRow
                key={review._id}
                review={review}
                user={user}
                handleDelete={handleDelete}
              ></ReviewTableRow>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyReviews;

import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewTableRow from "./ReviewTableRow";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const { email } = user;
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 402) {
          alert("Unauthorized Access");
          logOut();
        }
        return res.json();
      })
      .then((data) => {
        setMyReviews(data);
        // console.log(data);
      });
  }, [email]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = myReviews.filter((review) => review._id !== id);
        setMyReviews(remaining);
      });
  };

  return (
    <div className=" relative shadow-md sm:rounded-lg mx-10 my-5 p-10 mb-28">
      {user.email === 0 ? (
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
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {myReviews.map((review) => (
              <ReviewTableRow
                key={review._id}
                review={review}
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

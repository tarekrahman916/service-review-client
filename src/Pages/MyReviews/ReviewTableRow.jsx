import React from "react";
import { useNavigate } from "react-router-dom";

const ReviewTableRow = ({ review, handleDelete, user }) => {
  const { _id, service_name, text, author, ratings } = review;
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/review/update/${id}`);
  };

  return (
    <tr className="border-b bg-gray-900 border-gray-700">
      <th
        scope="row"
        className="py-4 px-6 font-medium  whitespace-nowrap text-white"
      >
        {service_name}
      </th>
      <td className="py-4 px-6">{text}</td>
      <td className="py-4 px-6">{ratings}</td>
      <td className="py-4 px-6">{user?.displayName}</td>

      <td className="py-4 px-6">
        <button
          onClick={() => handleEdit(_id)}
          className=" font-medium  text-blue-500 hover:underline mr-5"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="font-medium  text-red-600 hover:underline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReviewTableRow;

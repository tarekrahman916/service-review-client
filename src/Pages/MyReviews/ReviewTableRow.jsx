import React from "react";

const ReviewTableRow = ({ review, handleDelete }) => {
  const { _id, service_name, text, author, ratings } = review;

  return (
    <tr class="border-b bg-gray-900 border-gray-700">
      <th
        scope="row"
        class="py-4 px-6 font-medium  whitespace-nowrap text-white"
      >
        {service_name}
      </th>
      <td class="py-4 px-6">{text}</td>
      <td class="py-4 px-6">{ratings}</td>

      <td class="py-4 px-6">
        <button class=" font-medium  text-blue-500 hover:underline mr-5">
          Edit
        </button>
        <button
          onClick={() => handleDelete(_id)}
          class="font-medium  text-red-600 hover:underline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReviewTableRow;

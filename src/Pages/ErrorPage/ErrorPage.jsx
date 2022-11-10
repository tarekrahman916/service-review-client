import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="text-center flex flex-col min-h-[500px]  justify-center items-center p-5 ">
      <div className="border-4 p-24 shadow-2xl bg-gray-800">
        <h1 className="text-4xl text-white">Ops! An Error Ocurred!</h1>
        {error && (
          <div className="text-xl">
            <p className="text-red-500 ">{error.statusText || error.message}</p>
            <p className="text-red-600">{error.status}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;

import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Shared/ServiceCard/ServiceCard";

const Services = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <h2 className="text-3xl text-center mb-5">All Services</h2>
      <hr />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-2 md:mx-10 my-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;

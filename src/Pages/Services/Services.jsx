import React from "react";
import { useLoaderData } from "react-router-dom";
import usePageTitle from "../../hooks/usePageTitle";
import ServiceCard from "../Shared/ServiceCard/ServiceCard";

const Services = () => {
  const services = useLoaderData();
  usePageTitle("Services");

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
    </div>
  );
};

export default Services;

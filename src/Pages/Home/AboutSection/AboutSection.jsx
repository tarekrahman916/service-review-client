import React from "react";
import photo from "../../../assets/photo1.jpg";

const AboutSection = () => {
  return (
    <div className="grid md:grid-cols-2 mx-16 bg-slate-500 rounded-md text-white">
      <div className="p-10">
        <h2 className="text-4xl  font-bold">About us</h2>
        <p className="mt-8 text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          consequatur consequuntur a rerum alias! Ab suscipit facilis laborum
          illum repellat pariatur rem aliquam laboriosam ullam veniam eius, quae
          laudantium cumque nisi officiis possimus corporis aspernatur ex modi
          odit architecto. Dolore iusto ipsa itaque illo, sunt eveniet odio
          aliquam! Inventore, soluta.
        </p>
      </div>
      <div>
        <img src={photo} alt="" srcset="" />
      </div>
    </div>
  );
};

export default AboutSection;

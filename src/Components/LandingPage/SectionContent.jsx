import React from "react";

const SectionContent = ({ img, h1, p, color }) => {
  return (
    <div className={color && "bg-[#f6f6f6] "}>
      <div className="mt-24 mx-6 md:mx-10 flex flex-col md:flex-row overflow-hidden gap-x-4">
        <img className={`md:w-1/2 ${color && "order-2"} `} src={img} alt="" />
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold mt-10 sm:text-3xl md:text-5xl md:leading-[120%]  text-gray-900 overflow-hidden">
            {h1}
          </h1>
          <p className="my-6 pb-10 text-zinc-600 leading-relaxed">{p}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionContent;

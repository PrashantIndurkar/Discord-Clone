import React from "react";

const SectionContent = ({ img, h1, p, color }) => {
  return (
    <div className={color && "bg-[#f6f6f6] "}>
      <div className="mt-24 mx-6">
        <img className="" src={img} alt="" />
        <h1 className="text-2xl font-bold mt-4 sm:text-3xl">{h1}</h1>
        <p className="my-6 pb-10 text-zinc-600">{p}</p>
      </div>
    </div>
  );
};

export default SectionContent;

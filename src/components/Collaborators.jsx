import React from "react";
import Aws_partner from "/collaborators-Icon/Aws_partner.png";
import Equiconsulting_services_pvt_ltd from "/collaborators-Icon/Equiconsulting_services_pvt_ltd.png";
import Microsoft_for_startups from "/collaborators-Icon/Microsoft_for_startups.png";
import { companies } from "../data/Constant";

const Collaborators = () => {
  return (
    <section id="collaborators">
      <h1 className="heading pb-4 w-full text-lg font-medium text-center md:text-5xl bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-300 mb-10">
        Our Collaborators
      </h1>

      <div className="flex bg-black flex-wrap items-center justify-between mx-auto max-w-[60vw] gap-4 md:gap-16  max-lg:mt-10">
        {companies.map((company) => (
          <div key={company.id} className="flex items-center w-20 h-20 gap-2">
            <img
              src={company.img}
              alt={company.name}
              className=" h-full w-full object-fit"
            />
            <p className="text-xl ml-1">{company.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collaborators;

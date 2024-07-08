/* eslint-disable no-unused-vars */

import React from "react";
import Aws_partner from "/collaborators-Icon/Aws_partner.png";
import Equiconsulting_services_pvt_ltd from "/collaborators-Icon/Equiconsulting_services_pvt_ltd.png";
import Microsoft_for_startups from "/collaborators-Icon/Microsoft_for_startups.png";
import { companies } from "../data/Constant";

const Collaborators = () => {
  return (
    <section id="collaborators" className="py-32">
      <h1 className="heading pb-4 w-full text-lg font-medium text-center md:text-5xl bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-300 mb-10">
        Our Collaborators
      </h1>

      <div className="flex flex-wrap items-center justify-between mx-auto max-w-[80vw] gap-4 md:gap-16 mt-10 bg-black p-8 rounded-lg shadow-lg">
        {companies.map((company) => (
          <div
            key={company.id}
            className="flex flex-col items-center w-20 h-20 gap-2 bg-white p-2 rounded-md shadow-md"
          >
            <img
              src={company.img}
              alt={company.name}
              className="h-full w-full object-contain"
            />
            <p className="text-xl text-center">{company.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
};

export default Collaborators;

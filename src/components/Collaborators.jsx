/* eslint-disable no-unused-vars */


import { companies } from "../data/Constant"
import '../App.css'

const Collaborators = () => {
  return (
    <section id="collaborators" className="py-32">
      <h1 className="heading pb-4 w-full text-lg font-medium text-center md:text-5xl bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-300 mb-10">
        Our Collaborators
      </h1>

      <section className="flex justify-center items-center  ">
        <div className="h-[500px] w-[400px] overflow-hidden relative">
          {/* <div className="w-full h-[50px] z-1 absolute top-0" style="background: linear-gradient(-180deg, white);">
                    </div>  */}
          <div className="h-[100px] absolute top-0 bg-black"></div>
          <div className=" w-full h-[100px] bg-gradient-to-b from-white absolute top-0 z-30"></div>
          <div className="flex">
            <div className="w-full  move-image-1  absolute bottom-0 z-10">
              {
                companies.map((company) =>
                  <img key={company.id} src={company.img} alt="" className="w-[200px] h-[200px] object-contain" />
                )
              }
            </div>
            <div className="w-full  move-image-2  absolute ">
              {
                companies.map((company) =>
                  <img key={company.id} src={company.img} alt="" className="w-[200px] h-[200px] object-contain" />
                )
              }
            </div>
          </div>
          <div className=" w-full h-[100px] bg-gradient-to-t from-white ... absolute bottom-0 z-1"></div>
        </div>
      </section>

    </section>
  )
};

export default Collaborators;

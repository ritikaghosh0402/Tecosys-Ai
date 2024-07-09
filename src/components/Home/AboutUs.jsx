import Lottie from "lottie-react";
import AboutUsAnimation from "../../data/AboutUsAnimation.json";
import { ImCheckboxChecked } from "react-icons/im";

const AboutUs = () => {
  return (
    <section className=" w-full mt-10 text-white font-mullish pb-[8rem] pt-[8rem] ">
      <div className="w-10/12 max-w-[1080px] mx-auto pt-4 ">
        {/* heading */}
        <div className="w-full space-y-2 ">
          <h2 className="text-center font-bold text-2xl md:text-5xl leading-[1.2]">
            Get to Know About Tecosys
          </h2>
          <div className="h-1 w-6 bg-greenLight mx-auto relative"></div>
        </div>
        <div className="max-w-[90rem] bg-richblack-900 border border-slate-600 rounded-2xl mx-auto mt-10 flex relative ">
          <div className="p-10 flex flex-col justify-between ">
            <p className="font-medium text-[1.4rem] bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-300">
              In the era of rapid advancement in generative AI, Tecosys is
              pioneering next-generation AI models that can reshape AI
              utilization. Founded in 2023 by Avishek Bhattacharjee, Tecosys
              delivers innovative products through Telegram. The team, bolstered
              by co-founder Haraprasad Hota and director Biswajit Rath, has
              overcome significant challenges to reach new heights in AI
              innovation.
            </p>

            <div className="flex flex-col md:flex-row p-6 mt-10 justify-center items-center ">
              <div className="Left flex w-full md:w-1/2 ">
                <ul className="flex  flex-col gap-4 text-lg opacity-90">
                  <li className="flex  items-center ">
                    <ImCheckboxChecked className="mr-3" />
                    Established in 2023 by Avishek Bhattacharjee.
                  </li>
                  <li className="flex  items-center ">
                    <ImCheckboxChecked className="mr-3" />
                    Building the next generation of AI models.
                  </li>
                  <li className="flex  items-center ">
                    <ImCheckboxChecked className="mr-3" /> Products delivered
                    online through Telegram.
                  </li>
                  <li className="flex  items-center ">
                    <ImCheckboxChecked className="mr-3" /> Haraprasad Hota
                    joined as co-founder in 2023
                  </li>
                  <li className="flex  items-center ">
                    <ImCheckboxChecked className="mr-3" />
                    Biswajit Rath joined as director in March 2024.
                  </li>
                  <li className="flex  items-center ">
                    <ImCheckboxChecked className="mr-3 md:w-6 md:h-6" />
                    Overcoming challenges and reaching new heights with
                    innovative AI solutions.
                  </li>
                </ul>
              </div>

              <div className="Right w-full md:w-1/2">
                <Lottie
                  animationData={AboutUsAnimation}
                  loop={true}
                  className="h-[40vh] w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* card */}
      </div>
    </section>
  );
};

export default AboutUs;

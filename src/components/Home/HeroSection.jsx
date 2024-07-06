import ActiveButton from "../common/ActiveButton";
import { FaArrowRight } from "react-icons/fa6";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { words } from "../../data/Constant";
import "../../App.css";

function HeroSection() {
  return (
    <div>
      <div className="w-10/12 mt-2 mx-auto ">
        <div>
          <TextGenerateEffect
            words={words}
            className="w-[80%] mx-auto text-center text-richblack-25 text-6xl leading-tight "
          />
        </div>

        <div className="w-full flex items-center flex-col mt-10  content-container ">
          <img
            src="hero-img-2.png"
            alt="Hero image"
            className="h-[50vh] pb-4 mb-4"
          />

          <div>
            <a href="/Tecosys.pdf" target="_blank">
              <ActiveButton
                key={1}
                text={"Read Whitepaper"}
                customClasses="bg-[#5a10c4] text-white"
                className="flex items-center"
              >
                <FaArrowRight />
              </ActiveButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
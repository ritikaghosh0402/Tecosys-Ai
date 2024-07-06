import ActiveButton from "../common/ActiveButton";
import { FaArrowRight } from "react-icons/fa6";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { words } from "../../data/Constant";
import "../../App.css";
import Lottie from "lottie-react";
import animationData from "../../data/RobortAnimation.json";
import { useNavigate } from "react-router-dom";

function HeroSection() {
    const navigate=useNavigate();
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
            
          <Lottie
            animationData={animationData}
            loop={true}
            className="h-[70vh] pb-4 mb-4 "
          />

          <div className="relative z-10">
            <a href="/Tecosys.pdf" target="">
              <ActiveButton
                text={"Read Whitepaper"}
                customClasses="bg-[#5a10c4] hover:scale-90 transition-all duration-300 shadow-sm shadow-white"
                className="flex items-center cursor-pointer"
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
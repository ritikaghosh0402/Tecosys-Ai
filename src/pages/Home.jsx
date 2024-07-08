import HeroSection from "../components/Home/HeroSection";
import ServicesAnimation from "../components/ServicesAnimation";
import GeminiSection from "../components/GeminiSection";
import Features from "../components/Home/Features";
import {Vortex} from "../components/ui/vortex";
import StarBackground from "../components/ui/StarBackground";
function Home() {
  return (
    <div className="text-richblack-5">
      {/* <StarBackground className="" /> */}
      {/* <Vortex> */}
      <HeroSection />
      {/* </Vortex> */}
      {/* <Features /> */}
      <ServicesAnimation/>
      <GeminiSection />
    </div>
  );
}

export default Home;

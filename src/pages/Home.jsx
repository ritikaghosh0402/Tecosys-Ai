import HeroSection from "../components/Home/HeroSection";
import Ecosystem from "../components/Ecosystem";
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
      <Features />
      <Ecosystem />
      <GeminiSection />
    </div>
  );
}

export default Home;

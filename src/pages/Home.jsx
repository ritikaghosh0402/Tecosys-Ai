import HeroSection from "../components/Home/HeroSection";
import Ecosystem from "../components/Ecosystem";
import GeminiSection from "../components/GeminiSection";
import Features from "../components/Home/Features";
import {Vortex} from "../components/ui/vortex";
function Home() {
  return (
    <div className="text-richblack-5">
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

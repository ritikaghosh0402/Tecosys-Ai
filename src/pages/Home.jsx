import HeroSection from "../components/Home/HeroSection";
import Ecosystem from "../components/Ecosystem";
import GeminiSection from "../components/GeminiSection";
import Features from "../components/Home/Features";

function Home() {
  return (
    <div className="text-richblack-5">
      <HeroSection />
      <Features />
      <Ecosystem />
      <GeminiSection />
    </div>
  );
}

export default Home;

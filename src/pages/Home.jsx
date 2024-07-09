/* eslint-disable no-unused-vars */

import HeroSection from "../components/Home/HeroSection";
import ServicesAnimation from "../components/Home/ServicesAnimation";
import GeminiSection from "../components/Home/GeminiSection";
import ParticlesComponent from "../components/common/ParticleBacground";
import SparklesCore from "../components/ui/sparkles";
import ContactUs from "../components/Home/ContactUs";
import AboutUs from "../components/Home/AboutUs";
import Colab from "../components/Home/Colab";

function Home() {
  return (
    <div className="text-richblack-5">
      <div className="hidden md:block">
      <ParticlesComponent id="particles"  />
      </div>
    
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full hidden md:block"
          particleColor="#FFFFFF"
        />
      
      <HeroSection />
      <AboutUs/>
      <ServicesAnimation/>
      <Colab/>
      <ContactUs />
      <GeminiSection />
    </div>
  );
}

export default Home;

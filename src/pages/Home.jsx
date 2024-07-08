import HeroSection from "../components/Home/HeroSection";
import ServicesAnimation from "../components/ServicesAnimation";
import GeminiSection from "../components/GeminiSection";
import ParticlesComponent from "../components/common/ParticleBacground";
import SparklesCore from "../components/ui/sparkles";
<<<<<<< HEAD
import ContactUs from "../components/Home/ContactUs";

=======
import Collaborators from "../components/Collaborators";
>>>>>>> 762e3af8a8ed2f5915368e727320ff9f20f7de40
function Home() {
  return (
    <div className="text-richblack-5">
      <ParticlesComponent id="particles"  />
    
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      
      <HeroSection />
      <ServicesAnimation/>
<<<<<<< HEAD
      <ContactUs />
=======
      <Collaborators/>
>>>>>>> 762e3af8a8ed2f5915368e727320ff9f20f7de40
      <GeminiSection />
    </div>
  );
}

export default Home;

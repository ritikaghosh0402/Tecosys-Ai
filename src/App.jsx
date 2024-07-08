/* eslint-disable no-unused-vars */

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import LocomotiveScroll from "locomotive-scroll";
import StarBackground from "./components/ui/StarBackground";
import ParticlesComponent from "./components/common/ParticleBackground";
import './App.css'


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter border">
      <Navbar />
      {/* <StarBackground className="" /> */}
      
      <ParticlesComponent id="particles" />
      {/* <div className="w-full h-screen text-white">
        jdhcjkvnkjn
      </div> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      {/* </ParticleBacground > */}


    </div>
  );
}

export default App;

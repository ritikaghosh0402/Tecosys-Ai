/* eslint-disable no-unused-vars */

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import LocomotiveScroll from "locomotive-scroll";
import ParticlesComponent from "./components/common/ParticleBacground";
import SparklesCore from "./components/ui/sparkles";
import RecievePayments from "./pages/RecievePayments";
import './App.css'


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter border">
      <Navbar />

      {/* <ParticlesComponent id="particles"  />
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invest" element={<RecievePayments />} />
        </Routes>



    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import LocomotiveScroll from "locomotive-scroll";
import StarBackground from "./components/ui/StarBackground";
import './App.css'


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter border">
      <Navbar />
      {/* <StarBackground className="" /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

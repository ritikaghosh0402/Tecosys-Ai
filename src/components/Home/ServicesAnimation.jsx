import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { isMobile } from "react-device-detect";

import chatbot from "/services_icon/Intelligent AI Chatbot.png";
import hospital from "/services_icon/AI-based Hospital Management System.png";
import education from "/services_icon/AI-based Education Management System.png";
import event from "/services_icon/AI-based Event Management System.png";
import researcher from "/services_icon/AI Researcher.png";
import doctor from "/services_icon/AI Doctor.png";
import bot from "/services_icon/Multimedia Bot Builder.png";
import lawyer from "/services_icon/AI Lawyer.png";

const ServicesAnimation = () => {
  const [rotation, setRotation] = useState(0);
  const [isHoveredOrClicked, setIsHoveredOrClicked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHoveredOrClicked) {
        setRotation((rotation) => rotation + 1); // Increase rotation angle gradually
      }
    }, 50); // Adjust the rotation speed as needed

    return () => clearInterval(interval);
  }, [isHoveredOrClicked]);

  const centerText = [
    {
      title: "Services",
      text: "Intelligent AI Chatbot",
    },
    {
      title: "Services",
      text: "AI-based Hospital Management System",
    },
    {
      title: "Services",
      text: "AI-based Education Management System",
    },
    {
      title: "Services",
      text: "AI-based Event Management System",
    },
    {
      title: "Services",
      text: "AI Researcher",
    },
    {
      title: "Services",
      text: "AI Doctor",
    },
    {
      title: "Services",
      text: "Multimedia Bot Builder",
    },
    {
      title: "Services",
      text: "AI Lawyer",
    },
  ];

  const [hoveredTxt, setHoveredTxt] = useState(0);

  return (
    <div id="services" className=" overflow-hidden">
      <div
        id="smooth-content"
        className="flex flex-col items-center justify-center w-full gap-4 third-section relative mt-[10vh]"
      >
        {/* ************ Heading & Sub-Heading ************  */}

        {!isMobile ? (
          <div className="relative w-[60em] h-[60em] mx-auto">
            {/* Larger circular border around the "Ecosystem" section */}
            <div className="relative w-full h-full">
              {/* Background image */}
              <img
                src="ecosystem-ellipse.png"
                alt="Ecosystem background"
                className="absolute inset-0 object-cover w-full h-full rounded-full"
                style={{ width: "80%", height: "80%", top: "10%", left: "10%" }}
              />
              {/* Outer image placed on the outer circle */}
              <img
                src="outer-ecosystem-ellipse.png"
                alt="Outer Ecosystem background"
                className="absolute inset-0 object-cover w-full h-full rounded-full ecosystem"
                style={{ width: "60%", height: "60%", top: "20%", left: "20%" }}
              />
              {/* Sprinkles image placed outside the inner circle but inside the outer circle */}
              <img
                src="sprinkles-ecosystem-ellipse.png"
                alt="Sprinkles Ecosystem background"
                className="absolute inset-0 object-cover w-full h-full rounded-full"
                style={{ width: "100%", height: "100%", opacity: 0.2 }}
              />
              {/* Content centered within the circle */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="text-5xl font-medium text-white md:text-10xl">
                  {centerText[hoveredTxt].title}
                </h1>
                <p className="mt-3 text-pure-greys-300 text-md">
                  {centerText[hoveredTxt].text}
                </p>
              </div>
            </div>
            {/* Ecosystem cards positioned around the larger circle */}
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
              {/* <ServiceCard
                setAngle={[0,30]} rotation={rotation} /> components distributed evenly around the larger circle */}
              <div
                className="absolute w-96 h-96"
                style={{ transform: `rotate(${rotation - 35}deg)` }}
              >
                {/* Spacing the cards evenly */}
                <div
                  className="absolute -top-[110px] left-[135px]  w-16 h-16 rounded-full flex items-center justify-center"
                  onMouseEnter={() => setIsHoveredOrClicked(true)}
                  onMouseLeave={() => setIsHoveredOrClicked(false)}
                  onClick={() => setIsHoveredOrClicked(true)}
                  style={{ transform: `translate(-50%, -50%)` }}
                >
                  <ServiceCard
                    setAngle={[0, 45]}
                    rotation={rotation}
                    setHoveredTxt={setHoveredTxt}
                    index={0}
                    imgsrc={lawyer}
                    hoveredTxt={centerText[0].text}
                  />
                </div>
                <div
                  className="absolute -top-[25px] -left-[80px] w-16 h-16 rounded-full flex items-center justify-center"
                  onMouseEnter={() => setIsHoveredOrClicked(true)}
                  onMouseLeave={() => setIsHoveredOrClicked(false)}
                  onClick={() => setIsHoveredOrClicked(true)}
                  style={{ transform: `translate(-50%, -50%)` }}
                >
                  <ServiceCard
                    setAngle={[45, 90]}
                    rotation={rotation}
                    setHoveredTxt={setHoveredTxt}
                    index={1}
                    imgsrc={hospital}
                    hoveredTxt={centerText[1].text}
                  />
                </div>
                <div
                  className="absolute top-1/2 -left-[185px] w-16 h-16 rounded-full flex items-center justify-center"
                  onMouseEnter={() => setIsHoveredOrClicked(true)}
                  onMouseLeave={() => setIsHoveredOrClicked(false)}
                  onClick={() => setIsHoveredOrClicked(true)}
                  style={{ transform: `translate(-50%, -50%)` }}
                >
                  <ServiceCard
                    setAngle={[90, 135]}
                    rotation={rotation}
                    setHoveredTxt={setHoveredTxt}
                    index={2}
                    imgsrc={education}
                    hoveredTxt={centerText[2].text}
                  />
                </div>
                <div
                  className="absolute -bottom-[90px] -left-[90px] w-16 h-16 rounded-full flex items-center justify-center"
                  onMouseEnter={() => setIsHoveredOrClicked(true)}
                  onMouseLeave={() => setIsHoveredOrClicked(false)}
                  onClick={() => setIsHoveredOrClicked(true)}
                  style={{ transform: `translate(-50%, -50%)` }}
                >
                  <ServiceCard
                    setAngle={[135, 180]}
                    rotation={rotation}
                    setHoveredTxt={setHoveredTxt}
                    index={3}
                    imgsrc={event}
                    hoveredTxt={centerText[3].text}
                  />
                </div>
                <div
                  className="absolute -bottom-[190px] left-[145px] w-16 h-16 rounded-full flex items-center justify-center"
                  onMouseEnter={() => setIsHoveredOrClicked(true)}
                  onMouseLeave={() => setIsHoveredOrClicked(false)}
                  onClick={() => setIsHoveredOrClicked(true)}
                  style={{ transform: `translate(-50%, -50%)` }}
                >
                  <ServiceCard
                    setAngle={[180, 225]}
                    rotation={rotation}
                    setHoveredTxt={setHoveredTxt}
                    index={4}
                    imgsrc={researcher}
                    hoveredTxt={centerText[4].text}
                  />
                </div>
                <div
                  className="absolute -bottom-[90px] -right-[40px] w-16 h-16 rounded-full flex items-center justify-center"
                  onMouseEnter={() => setIsHoveredOrClicked(true)}
                  onMouseLeave={() => setIsHoveredOrClicked(false)}
                  onClick={() => setIsHoveredOrClicked(true)}
                  style={{ transform: `translate(-50%, -50%)` }}
                >
                  <ServiceCard
                    setAngle={[225, 270]}
                    rotation={rotation}
                    setHoveredTxt={setHoveredTxt}
                    index={5}
                    imgsrc={doctor}
                    hoveredTxt={centerText[5].text}
                  />
                </div>
                <div
                  className="absolute top-1/2 -right-[120px] w-16 h-16 rounded-full flex items-center justify-center"
                  onMouseEnter={() => setIsHoveredOrClicked(true)}
                  onMouseLeave={() => setIsHoveredOrClicked(false)}
                  onClick={() => setIsHoveredOrClicked(true)}
                  style={{ transform: `translate(-50%, -50%)` }}
                >
                  <ServiceCard
                    setAngle={[270, 315]}
                    rotation={rotation}
                    setHoveredTxt={setHoveredTxt}
                    index={6}
                    imgsrc={bot}
                    hoveredTxt={centerText[6].text}
                  />
                </div>
                <div
                  className="absolute -top-[25px] -right-[35px] w-16 h-16 rounded-full flex items-center justify-center"
                  onMouseEnter={() => setIsHoveredOrClicked(true)}
                  onMouseLeave={() => setIsHoveredOrClicked(false)}
                  onClick={() => setIsHoveredOrClicked(true)}
                  style={{ transform: `translate(-50%, -50%)` }}
                >
                  <ServiceCard
                    setAngle={[315, 360]}
                    rotation={rotation}
                    setHoveredTxt={setHoveredTxt}
                    index={7}
                    imgsrc={chatbot}
                    hoveredTxt={centerText[7].text}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-[35em] mx-auto">
            {/* Larger circular border around the "Ecosystem" section */}
            <div className="relative flex items-center justify-center w-full h-full">
              {/* Background image */}
              <img
                src="ecosystem-ellipse.png"
                alt="Ecosystem background"
                className="absolute object-contain w-full h-full rounded-full"
              // style={{ width: "70%", height: "100%"}}
              />
              {/* Outer image placed on the outer circle */}
              <img
                src="outer-ecosystem-ellipse.png"
                alt="Outer Ecosystem background"
                className="absolute inset-0 object-contain w-full h-full rounded-full"
                style={{ width: "70%", height: "100%", left: "15%" }}
              />
              {/* Sprinkles image placed outside the inner circle but inside the outer circle */}
              <img
                src="sprinkles-ecosystem-ellipse.png"
                alt="Sprinkles Ecosystem background"
                className="absolute inset-0 object-contain w-full h-full rounded-full"
              // style={{ width: "70%", height: "100%", left: "15%", opacity: 0.2}}
              />
              {/* Content centered within the circle */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="text-xl font-bold text-white md:text-10xl">
                  {centerText[hoveredTxt].title}
                </h1>
                <p className="mt-3 text-sm text-pure-greys-300">
                  {centerText[hoveredTxt].text}
                </p>
              </div>
            </div>
            {/* Ecosystem cards positioned around the larger circle */}
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
              {/* <ServiceCard
                setAngle={[0,30]} rotation={rotation} /> components distributed evenly around the larger circle */}
              <div
                className="absolute w-80 h-80"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                {/* Spacing the cards evenly */}
                <div
                  className="absolute top-[5px] left-1/2 w-16 h-16 rounded-full flex items-center justify-center"
                  onMouseEnter={() => setIsHoveredOrClicked(true)}
                  onMouseLeave={() => setIsHoveredOrClicked(false)}
                  onClick={() => setIsHoveredOrClicked(true)}
                  style={{ transform: "translate(-50%, -40%)" }}
                >
                  <ServiceCard
                    setAngle={[0, 45]}
                    rotation={rotation}
                    setHoveredTxt={setHoveredTxt}
                    index={0}
                    imgsrc={lawyer}
                    hoveredTxt={centerText[0].text}
                  />
                </div>
                <div
                  className="absolute top-[60px] left-[50px] w-16 h-16 rounded-full flex items-center justify-center"
                  onMouseEnter={() => setIsHoveredOrClicked(true)}
                  onMouseLeave={() => setIsHoveredOrClicked(false)}
                  onClick={() => setIsHoveredOrClicked(true)}
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  <ServiceCard
                    setAngle={[45, 90]}
                    rotation={rotation}
                    setHoveredTxt={setHoveredTxt}
                    index={1}
                    imgsrc={hospital}
                    hoveredTxt={centerText[1].text}
                  />
                </div>
                <div
                  className="absolute top-[60px] -right-[10px] w-16 h-16 rounded-full flex items-center justify-center"
                  onMouseEnter={() => setIsHoveredOrClicked(true)}
                  onMouseLeave={() => setIsHoveredOrClicked(false)}
                  onClick={() => setIsHoveredOrClicked(true)}
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  <ServiceCard
                    setAngle={[90, 135]}
                    rotation={rotation}
                    setHoveredTxt={setHoveredTxt}
                    index={2}
                    imgsrc={education}
                    hoveredTxt={centerText[2].text}
                  />
                </div>
                <div
                  className="absolute bottom-[95px] left-[10px] w-16 h-16 rounded-full flex items-center justify-center"
                  onMouseEnter={() => setIsHoveredOrClicked(true)}
                  onMouseLeave={() => setIsHoveredOrClicked(false)}
                  onClick={() => setIsHoveredOrClicked(true)}
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  <ServiceCard
                    setAngle={[135, 180]}
                    rotation={rotation}
                    setHoveredTxt={setHoveredTxt}
                    index={3}
                    imgsrc={event}
                    hoveredTxt={centerText[3].text}
                  />
                </div>
                <div
                  className="absolute -bottom-[65px] left-1/2 w-16 h-16 rounded-full flex items-center justify-center"
                  onMouseEnter={() => setIsHoveredOrClicked(true)}
                  onMouseLeave={() => setIsHoveredOrClicked(false)}
                  onClick={() => setIsHoveredOrClicked(true)}
                  style={{ transform: "translate(-50%, -70%)" }}
                >
                  <ServiceCard
                    setAngle={[180, 225]}
                    rotation={rotation}
                    setHoveredTxt={setHoveredTxt}
                    index={4}
                    imgsrc={researcher}
                    hoveredTxt={centerText[4].text}
                  />
                </div>
                <div
                  className="absolute bottom-[95px] -right-[50px] w-16 h-16 rounded-full flex items-center justify-center"
                  onMouseEnter={() => setIsHoveredOrClicked(true)}
                  onMouseLeave={() => setIsHoveredOrClicked(false)}
                  onClick={() => setIsHoveredOrClicked(true)}
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  <ServiceCard
                    setAngle={[225, 270]}
                    rotation={rotation}
                    setHoveredTxt={setHoveredTxt}
                    index={5}
                    imgsrc={doctor}
                    hoveredTxt={centerText[5].text}
                  />
                </div>
                <div
                  className="absolute -bottom-[0px] -right-[10px] w-16 h-16 rounded-full flex items-center justify-center"
                  onMouseEnter={() => setIsHoveredOrClicked(true)}
                  onMouseLeave={() => setIsHoveredOrClicked(false)}
                  onClick={() => setIsHoveredOrClicked(true)}
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  <ServiceCard
                    setAngle={[270, 315]}
                    rotation={rotation}
                    setHoveredTxt={setHoveredTxt}
                    index={6}
                    imgsrc={bot}
                    hoveredTxt={centerText[6].text}
                  />
                </div>
                <div
                  className="absolute -bottom-[10px] left-[50px] w-16 h-16 rounded-full flex items-center justify-center"
                  onMouseEnter={() => setIsHoveredOrClicked(true)}
                  onMouseLeave={() => setIsHoveredOrClicked(false)}
                  onClick={() => setIsHoveredOrClicked(true)}
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  <ServiceCard
                    setAngle={[315, 360]}
                    rotation={rotation}
                    setHoveredTxt={setHoveredTxt}
                    index={7}
                    imgsrc={chatbot}
                    hoveredTxt={centerText[7].text}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesAnimation;

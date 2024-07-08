// import React from 'react'
import { isMobile } from "react-device-detect";
import { useEffect } from "react";

const ServiceCard = ({
  rotation,
  imgsrc,
  setHoveredTxt,
  index,
  hoveredTxt,
  setAngle,
}) => {
  //   console.log(rotation, "rotation value");
  //   console.log(setAngle, "setAngle value");
  //   console.log(rotation % 360, "rotation value check");
  //   console.log(
  //     rotation % 360 > setAngle[0] && rotation % 360 < setAngle[1],
  //     "setAngle value check"
  //   );

  useEffect(() => {
    if (rotation % 360 > setAngle[0] && rotation % 360 < setAngle[1]) {
      setHoveredTxt(index);
    }
  });

  return (
    <div
      id="ecosystem-card"
      className="relative m-2 cursor-pointer ecosystem-card"
    >
      {!isMobile ? (
        <div className="flex items-center justify-between">
          <div
            className="borderOpacityHover absolute w-[100px] h-[100px] rounded-full border-2 border-neutral-800 p-7 flex items-center justify-center hover:bg-purple-glow transition-colors duration-300"
            style={{
              backgroundColor:
                rotation % 360 > setAngle[0] && rotation % 360 < setAngle[1]
                  ? "#2D1879"
                  : "#1c1428",
              transform: rotation ? `rotate(-${rotation}deg)` : "rotate(0deg)",
            }}
            // onMouseEnter={() => {
            //   setIsHovered(true), setHoveredTxt(index);
            // }}
            // onMouseDown={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
          >
            {/* Image positioned at the center of the circle */}
            <img
              src={imgsrc}
              alt="Gallery logo"
              className="w-[30px] h-[30px] rotate-[35deg]"
            />
          </div>
          {/* {isHovered && (
            <div
              className="absolute p-2 text-center rounded-md"
              style={{
                transform: `translate(-50%, -150%) ${
                  rotation ? `rotate(-${rotation}deg)` : "rotate(0deg)"
                }`,
              }}
            >
              {hoveredTxt}
            </div>
          )} */}
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <div
            className={`w-[50px] h-[50px] rounded-full border-2 border-neutral-800 p-7 flex items-center justify-center hover:bg-purple-glow transition-colors duration-300`}
            style={{
              backgroundColor:
                rotation % 360 > setAngle[0] && rotation % 360 < setAngle[1]
                  ? "#2D1879"
                  : "#1c1428",
              padding: "0.5rem",
              transform: rotation ? `rotate(-${rotation}deg)` : "rotate(0deg)",
            }}
            // onMouseEnter={() => {
            //   setIsHovered(true), setHoveredTxt(index);
            // }}
            // onMouseLeave={() => setIsHovered(false)}
          >
            {/* Image positioned at the center of the circle */}
            <img
              src={imgsrc}
              alt="Gallery logo"
              className="w-[20px] h-[20px]"
            />
          </div>
          {typeof window !== "undefined" &&
            // typeof window.innerWidth !== "undefined" &&
            window.innerWidth > 500 && (
              <div
                className="absolute p-2 text-center rounded-md"
                style={{
                  transform: `translate(-50%, -120%) ${
                    rotation ? `rotate(-${rotation}deg)` : "rotate(0deg)"
                  }`,
                }}
              >
                {hoveredTxt}
              </div>
            )}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;

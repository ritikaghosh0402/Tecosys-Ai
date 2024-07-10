import React, { useEffect } from "react";
import { isMobile } from "react-device-detect";

const EcosystemCard = ({
  rotation,
  imgsrc,
  setHoveredTxt,
  index,
  setAngle,
}) => {
  useEffect(() => {
    const normalizedRotation = rotation % 360;
    if (normalizedRotation > setAngle[0] && normalizedRotation < setAngle[1]) {
      setHoveredTxt(index);
    }
  }, [rotation, setAngle, setHoveredTxt, index]);

  const isWithinAngle = (rotation % 360 > setAngle[0] && rotation % 360 < setAngle[1]);

  return (
    <div
      id="ecosystem-card"
      className="relative m-2 cursor-pointer ecosystem-card hover:scale-105 transition-transform duration-300"
    >
      {!isMobile ? (
        <div className="flex items-center justify-between relative">
          <div
            className="borderOpacityHover absolute w-[100px] h-[100px] rounded-full border-2 border-neutral-800 p-7 flex items-center justify-center hover:bg-purple-glow transition-colors duration-300"
            style={{
              backgroundColor: isWithinAngle ? "#5D22B2" : "#1c1428",
              transform: rotation ? `rotate(-${rotation}deg)` : "rotate(0deg)",
            }}
          >
            <img
              src={imgsrc}
              alt="Gallery logo"
              className="w-[30px] h-[30px] rotate-[35deg]"
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between relative">
          <div
            className="w-[50px] h-[50px] rounded-full border-2 border-neutral-800 p-2 flex items-center justify-center hover:bg-purple-glow transition-colors duration-300"
            style={{
              backgroundColor: isWithinAngle ? "#5D22B2" : "#1c1428",
              transform: rotation ? `rotate(-${rotation}deg)` : "rotate(0deg)",
            }}
          >
            <img
              src={imgsrc}
              alt="Gallery logo"
              className="w-[20px] h-[20px]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EcosystemCard;

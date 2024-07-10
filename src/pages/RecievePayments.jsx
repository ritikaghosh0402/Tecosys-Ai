/* eslint-disable no-unused-vars */

import PaymentForm from "../components/common/PaymentForm";
import Card from "../components/common/Card";

import { HiChatBubbleLeftRight } from "react-icons/hi2"
import { BsGlobeCentralSouthAsia } from "react-icons/bs"
import { FaPhone } from "react-icons/fa6"

const cardData = [
  {
    logo: <HiChatBubbleLeftRight />,
    heading: "Chat on us",
    text1: "Our friendly team is here to help.",
    text2: "@mail address",
  },
  {
    logo: <BsGlobeCentralSouthAsia />,
    heading: "Visit us",
    text1: "Come and say hello at our office HQ.",
    text2: "Here is the location/ address",
  },
  {
    logo: <FaPhone />,
    heading: "Call us",
    text1: "Mon - Fri From 8am to 5pm",
    text2: "+123 456 7890",
  },
];

function RecievePayments() {
  return (
    <div className="w-11/12 mx-auto text-white  mt-10">
      {/* section-1 */}
      <div className="flex flex-wrap gap-10 justify-evenly">
        {/* <div className="h-[450px] sm:h-[390px] min-h-fit w-full sm:w-[450px] bg-richblack-800 rounded-lg flex flex-col justify-center px-14 gap-8 sm:gap-10">
            {cardData.map((data, index) => {
              return (
                <Card
                  key={index}
                  logo={data.logo}
                  heading={data.heading}
                  text1={data.text1}
                  text2={data.text2}
                />
              );
            })}
          </div> */}
        <div className="w-[600px] border-richblack-600 border p-5 sm:p-10 rounded-xl mb-20">
          <p className="font-bold text-richblack-25 text-3xl mb-5">
            Want to Invest? Let’s team up
          </p>
          <p className="text-richblack-300">
            Tall us more about yourself and what you’re got in mind.
          </p>
          <PaymentForm />
        </div>
      </div>
    </div>
  )
}

export default RecievePayments

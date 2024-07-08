import ContactUsForm from "../common/ContactUsForm";

import RobotHello from "../../data/RobotHello.json";
import Lottie from "lottie-react";

function ContactUs() {
  return (
    <div className="w-full items-center justify-center flex flex-col md:flex-row mt-20">
      <div className="max-w-maxContent w-1/2 sm:w-[600px] px-6 flex flex-col justify-center items-center gap-5  mx-auto ">
        <h1 className="text-4xl font-semibold text-richblack-25">
          Get in Touch
        </h1>
        <p className="text-base text-center ">
          We&apos;d love to here for you, Please fill out this form.
        </p>
        <ContactUsForm />
      </div>

      <div className=" w-1/2 ">
        <Lottie animationData={RobotHello} loop={true} className="h-[80vh]" />
      </div>
    </div>
  );
}

export default ContactUs;

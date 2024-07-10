import ContactUsForm from "../common/ContactUsForm";

import RobotHello from "../../data/RobotHello.json";
import Lottie from "lottie-react";

function ContactUs() {
  return (
    <div id="contact" className="mt-10 p-4 px-5">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-5xl font-semibold text-richblack-25">
          Get in Touch
        </h1>
        <p className="text-lg md:text-lg text-center w-[80%] md:w-full">
          We&apos;d love to here for you, Please fill out this form.
        </p>
      </div>
      <div className="w-full items-center justify-center flex flex-col md:flex-row ">

        <div className="max-w-maxContent w-full md:w-3/5 sm:w-[600px] md:px-6 flex flex-col justify-center items-center gap-5  mx-auto ">

          <ContactUsForm />
        </div>

        <div className="w-full md:w-2/5 ">
          <Lottie animationData={RobotHello} loop={true} className="h-[30vh] md:h-[80vh]" />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

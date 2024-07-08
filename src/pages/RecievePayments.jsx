import ContactUsForm from "../components/common/ContactUsForm";


function RecievePayments() {
  return (
    <div className="w-11/12 mx-auto text-white  ">
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
          <div className="w-[600px] border-richblack-600 border p-5 sm:p-10 rounded-xl">
            <p className="font-bold text-richblack-25 text-3xl mb-5">
              Got a Idea? We’ve got the skills. Let’s team up
            </p>
            <p className="text-richblack-300">
              Tall us more about yourself and what you’re got in mind.
            </p>
            <ContactUsForm />
          </div>
        </div>
</div>
  )
}

export default RecievePayments

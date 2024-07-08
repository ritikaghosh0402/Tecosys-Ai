import ContactUsForm from '../common/ContactUsForm'

function ContactUs() {
  return (
    
    <div className='max-w-maxContent w-full sm:w-[600px] px-6 flex flex-col justify-center items-center gap-5  mx-auto '>
      <h1 className='text-4xl font-semibold text-richblack-25'>Get in Touch</h1>
      <p className='text-base text-center '>We&apos;d love to here for you, Please fill out this form.</p>
      <ContactUsForm />
    </div>
  )
}

export default ContactUs

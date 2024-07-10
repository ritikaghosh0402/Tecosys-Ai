/* eslint-disable no-undef */
const { contactUsEmail } = require("../templets/contactFormRes")
const { mailSender } = require("../utils/mailSender")


exports.contactUs = async (req, res) => {
  const { email, firstName, lastName, message, phoneNo, countrycode } = req.body
  try {


    await mailSender(
      email,
      "Your Data send successfully",
      contactUsEmail(email, firstName, lastName, message, phoneNo, countrycode)
    )
    await mailSender(
      process.env.MAIL_USER,
      "Contact us message",
      contactUsEmail(email, firstName, lastName, message, phoneNo, countrycode)
    )

    // send email to admin

    return res.json({
      success: true,
      message: "Email send successfully",
    })
  } catch (error) {
    return res.json({
      success: false,
      message: "Something went wrong..." + error.message,
    })
  }
}

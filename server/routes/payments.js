/* eslint-disable no-undef */
// Import the required modules

const express = require("express")
const router = express.Router()

const { capturePayment, verifyPayment, sendPaymentSuccessfullEmail } = require("../controller/payment")

router.post("/capturePayment", capturePayment)
router.post("/verifyPayment", verifyPayment)
router.post("/paymentEmail", sendPaymentSuccessfullEmail)  

module.exports = router
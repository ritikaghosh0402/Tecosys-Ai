/* eslint-disable no-undef */

const { instance } = require("../config/razorpay")
const { mailSender } = require("../utils/mailSender")
const { paymentSuccessEmail } = require("../templets/paymentSuccessEmail")
const { paymentEmailAdmin } = require("../templets/paymentEmailAdmin")

const crypto = require("crypto")

// capture the payment
exports.capturePayment = async (req, res) => {
  try {
    //get courseId, userId from req body
    const { userDetails } = req.body;

    const currency = "INR";

    const options = {
      amount: userDetails.amount * 100,
      currency,
      receipt: Math.random(Date.now()).toString(),
    };

    try {

      const paymentResponse = await instance.orders.create(options);

      return res.status(200).json({
        success: true,
        orderId: paymentResponse.id,
        currency: paymentResponse.currency,
        amount: paymentResponse.amount,
        message: paymentResponse,
      });
    } catch (error) {
      // console.log(error);
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// verify signature
exports.verifyPayment = async (req, res) => {
  try {
    const razorpay_payment_id = req.body?.razorpay_payment_id;
    const razorpay_order_id = req.body?.razorpay_order_id;
    const razorpay_signature = req.body?.razorpay_signature;


    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
      return res
        .status(300)
        .json({ success: false, message: "Payment Failed" });
    }

    // generated_signature = hmac_sha256(order_id + "|" + razorpay_payment_id, secret);
    let body = razorpay_order_id + "|" + razorpay_payment_id;
    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body.toString())
      .digest("hex");

    if (generated_signature == razorpay_signature) {
      return res
        .status(200)
        .json({ success: true, message: "Payment successful" });
    }
    return res.status(300).json({ success: false, message: "Payment Failed" });
  } catch (error) {
    console.log(error, "verify payment");
  }
};


exports.sendPaymentSuccessfullEmail = async (req, res) => {
  const { orderId, paymentId, amount, user } = req.body;

  if (!orderId || !paymentId || !amount) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all the fields" });
  }
  try {
    await mailSender(
      user.email,
      "Payment Received",
      paymentSuccessEmail(
        `${user.firstName} ${user.lastName}`,
        `${amount / 100}`,
        `${orderId}`,
        `${paymentId}`,
      )

    );
    await mailSender(
      process.env.MAIL_USER,
      `Payment Received `,
      paymentEmailAdmin(
        `${user.firstName} ${user.lastName}`,
        `${amount / 100}`,
        `${orderId}`,
        `${paymentId}`,
      )

    );
    // console.log("mail send")
  } catch (error) {
    console.log("Error in sending mail for payment", error);
    return res
      .status(500)
      .json({ success: false, message: "couldn,t send the mail" });
  }
};
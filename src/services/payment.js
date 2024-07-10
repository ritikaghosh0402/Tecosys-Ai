const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

import logo from '../../public/logo-tecosys.png'
import { apiConnector } from './apiConnector'
import toast from "react-hot-toast";

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    }

    )
}

export const pay = async (userDetails, navigate) => {
    const toastId = toast.loading(" Payment Loading...")
    try {

        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
        if (!res) { toast.error("Razorpay SDK failed to load") }

        const orderResponse = await apiConnector(
            "POST",
            `${BACKEND_URL}/capturePayment`,
            { userDetails },
        )

        if (!orderResponse.data.success) {
            throw new Error(orderResponse.data.message)
        }
        //options
        var options = {
            "key": RAZORPAY_KEY,
            "amount": `${orderResponse.data.message.amount}`, // 2000 paise = INR 20
            "currency": orderResponse.data.message.currency,
            "name": "Tecosys.AI",
            "description": "Thanks for Purchasing the course",
            "image": logo,
            "order_id": orderResponse.data.message.id,
            "handler": function (response) {
                //add receipt
                sendPaymentSuccessfullEmail(response, orderResponse.data.message.amount, userDetails)
                verifyPayment({ ...response }, navigate)
            },
            "prefill": {
                "name": `${userDetails.firstName} ${userDetails.lastName}`,
                "email": `${userDetails.email}`,
                "contact": `${userDetails.phoneNo}`
            },
            "notes": {
                "address": "Tecosys Corporate Office"
            },
            "theme": {
                "color": "#a36cef"
            }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        paymentObject.on("payment.failed", function (response) {
            toast.error("oops, payment failed");
            console.log(response.error);
        })

    } catch (error) {
        console.log("PAYMENT API ERROR... ", error)
        toast.error("couldn't make payment")
    }
    toast.dismiss(toastId)
}

async function sendPaymentSuccessfullEmail(response, amount, user) {
    // add print 
    try {
        await apiConnector("POST", `${BACKEND_URL}/paymentEmail`, {
            orderId: response.razorpay_order_id,
            paymentId: response.razorpay_payment_id,
            amount,
            user,
        })
    } catch (error) {
        console.log("payment successfull email error...", error)
    }
}

async function verifyPayment(bodyData, navigate) {
    const toastId = toast.loading("Verifying payment...")
    // dispatch(setPaymentLoading(true))
    try {
        const response = await apiConnector(
            "POST",
            `${BACKEND_URL}/verifyPayment`,
            bodyData
        )
        if (!response.data.success) {
            throw new Error(response.data.message)
        }
        toast.success("Successfully Invested")
        navigate("/")
    } catch (error) {
        console.log("payment verify error...", error)
        toast.error("couldn't verify Payment")
    }
    toast.dismiss(toastId)
}
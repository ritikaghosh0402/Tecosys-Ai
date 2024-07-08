const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY

import { toast } from 'react-toastify'
import logo from '../../public/logo-tecosys.png'


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

export const buyCourse = async (token, courses, userDetails, navigate, dispatch) => {
    // console.log("buy course", courses, token, userDetails)
    const toastId = toast.loading("Loading...")
    try {

        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
        if (!res) { toast.error("Razorpay SDK failed to load") }

        const headers = {
            "Content-Type": "application/json"
        }
        const orderResponse = fetch(`http://localhost:8080/payment`, {
            method: 'POST',
            headers,
            // body: JSON.stringify(body)
        }).then(response => {
            console.log(response)
            const { status } = response
            console.log('Status', status)
        }).catch(error => console.log(error))
        // console.log("hello")
        if (!orderResponse.data.success) {
            throw new Error(orderResponse.data.message)
        }

        //options
        var options = {
            "key": RAZORPAY_KEY,
            "amount": `${orderResponse.data.message.amount}`, // 2000 paise = INR 20
            "currency": orderResponse.data.message.currency,
            "name": "StudyNotion",
            "description": "Thanks for Purchasing the course",
            "image": logo,
            "order_id": orderResponse.data.message.id,
            "handler": function (response) {
                //add receipt
                // sendPaymentSuccessfullEmail(response, orderResponse.data.message.amount, token)
                verifyPayment({ ...response, courses }, token, navigate, dispatch)
            },
            "prefill": {
                "name": `${userDetails.firstName} ${userDetails.lastName}`,
                "email": `${userDetails.email}`,
                "contact": `${userDetails.additionalDetails.contactNumber}`
            },
            "notes": {
                "address": "StudyNotion Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
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

// async function sendPaymentSuccessfullEmail(response, amount, token) {
//     // add print 
//     try {
//         // await apiConnector("POST", SEND_PAYMENT_SUCCESS_EMAIL_API, {
//         //     orderId: response.razorpay_order_id,
//         //     paymentId: response.razorpay_payment_id,
//         //     amount,
//         // }, 
//         // {
//         //     Authorization: `Bearer ${token}`
//         // })
//     } catch (error) {
//         console.log("payment successfull email error...", error)
//     }
// }

async function verifyPayment(bodyData, token, navigate) {
    const toastId = toast.loading("Verifying payment...")
    // dispatch(setPaymentLoading(true))
    try {
        // const response = await apiConnector("POST", COURSE_VERIFY_API, bodyData, {
        //     Authorization: `Bearer ${token}`
        // })
        // if (!response.data.success) {
        //     throw new Error(response.data.message)
        // }
        toast.success("Payment Successfull, You are added to the course")
    
        navigate("/dashboard/enrolled-courses")
    } catch (error) {
        console.log("payment verify error...", error)
        toast.error("couldn't verify Payment")
    }
    toast.dismiss(toastId)
}
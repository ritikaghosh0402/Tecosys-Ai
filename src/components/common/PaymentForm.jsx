import { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import CountryCode from '../../data/countrycode.json'
import StripeCheckout from 'react-stripe-checkout';

// import { apiConnector } from '../../services/apiConnector';
// import { contactusEndpoint } from '../../services/apis';
// import { toast } from 'react-hot-toast';

import "../../App.css";
const prod = [
    {
        service: "Service 1",
        amount: 100
    },
    {
        service: "Service 2",
        amount: 200
    },
    {
        service: "Service 3",
        amount: 300
    },
    {
        service: "Service 4",
        amount: 400
    },
    {
        service: "Service 5",
        amount: 500
    }
]

export default function PaymentForm() {
    const [loading, setLoading] = useState(false);
    // const makePayment = (token) => {
    //     const body = {
    //         token,
    //         service
    //     }

    //     const headers = {
    //         "Content-Type": "application/json"
    //     }
    //     return fetch(`http://localhost:8080/payment`, {
    //         method: 'POST',
    //         headers,
    //         body: JSON.stringify(body)
    //     }).then(response => {
    //         console.log(response)
    //         const { status } = response
    //         console.log('Status', status)
    //     }).catch(error => console.log(error))
    // }
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful }
    } = useForm();
    const [service, setService] = useState([prod[0].service, prod[0].amount])
    console.log(service)
    const submitContactForm = async (data, e) => {
        // const toastId = toast.loading("Loading ...")
        try {
            setLoading(true);
            e.preventDefault()
            // const res = await apiConnector(
            //     "POST",
            //     contactusEndpoint.CONTACT_US_API,
            //     data
            //   )
            //   console.log(res)
            console.log(data)
            setLoading(false);
        } catch (error) {
            console.log("Error: ", error);
            setLoading(false);
        }
        // toast.dismiss(toastId)
    }
    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                firstName: "",
                lastName: "",
                email: "",
                phoneNo: "",
                message: "",
                amount: "",

            })
        }
    }, [reset, isSubmitSuccessful])
    return (
        <form onSubmit={handleSubmit(submitContactForm)}>
            <div className='flex flex-col w-full sm:w-[500px] gap-5 mx-auto mt-10 '>

                <div className='flex gap-5 justify-between '>
                    <div className='flex flex-col w-[47%] relative '>
                        <label htmlFor="firstname" className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>First Name<span className='text-pink-300'>*</span>
                            <input
                                type="text"
                                name='firstname'
                                id='firstname'
                                placeholder='Enter first name'
                                {...register("firstName", { required: true })}
                                style={{
                                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                }}
                                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                            />
                            {errors.firstName && (<span className='sm:absolute -bottom-6 left-0 text-pink-300'>Please enter your first name</span>)}
                        </label>
                    </div>

                    <div className='flex flex-col w-[47%] relative '>
                        <label htmlFor="lastname" className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>Last Name<span className='text-pink-300'>*</span>
                            <input
                                type="text"
                                name='lastname'
                                id='lastname'
                                placeholder='Enter last name'
                                {...register("lastName", { required: true })}
                                style={{
                                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                }}
                                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                            />
                            {errors.lastName && (<span className='sm:absolute -bottom-6 left-0 text-pink-300'>Please enter your last name</span>)}
                        </label>
                    </div>
                </div>

                <div className='flex flex-col relative'>
                    <label htmlFor="email" className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>Email Address<span className='text-pink-300'>*</span>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder='Enter email address'
                            {...register("email", { required: true })}
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                        />
                        {errors.email && (<span className='sm:absolute -bottom-6 left-0 text-pink-300'>Please enter your email address</span>)}
                    </label>
                </div>

                <div>
                    <label htmlFor="phonenumber" className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>Phone Number <span className='text-pink-300'>*</span></label>
                    <div className='flex w-full gap-5'>
                        <div className='w-[110px] '>
                            <select
                                name="dropdown"
                                id="dropdown"
                                {...register("countrycode", { required: true })}
                                style={{
                                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                }}
                                className="w-full rounded-[0.5rem] bg-richblack-800 py-[12px] pl-[8px] text-richblack-5 "
                            >
                                {
                                    CountryCode.map((element, index) => {
                                        return (
                                            <option key={index} value={element.code}>
                                                {element.code}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className='w-full relative'>
                            <input
                                type="tel"
                                name="phonenumber"
                                id="phonenumber"
                                placeholder='1234567890'
                                {...register("phoneNo",
                                    {
                                        required: { value: true, message: "Please enter phone number" },
                                        maxLength: { value: 10, message: "Inavlid Phone Number" },
                                        minLength: { value: 8, message: "Inavlid Phone Number" },
                                    })}
                                style={{
                                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                }}
                                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                            />
                            {errors.phoneNo && (<span className='sm:absolute -bottom-6 left-0 text-pink-300'>{errors.phoneNo.message}</span>)}

                        </div>
                    </div>
                </div>

                <div className='w-full '>
                    <div className='flex w-full gap-5 '>
                        <label htmlFor="service" className='w-1/3 mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>Service <span className='text-pink-300'>*</span>

                            <div className=' w-auto '>
                                <select
                                    name="dropdown"
                                    id="dropdown"
                                    {...register("service", { required: true })}
                                    style={{
                                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                    }}

                                    className="w-full rounded-[0.5rem] bg-richblack-800 py-[12px] pl-[8px] text-richblack-5"
                                    onChange={(e) => {
                                        setService(e.target.value.split(','))
                                        console.log()

                                    }}
                                >
                                    {
                                        prod.map((element, index) => {
                                            return (
                                                <option key={index} value={[element.service, element.amount]}>
                                                    {element.service}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </label>


                        <label htmlFor="service" className='w-2/3 mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>Amount <span className='text-pink-300'>*</span>
                            <div className=''>
                                <div className="w-full relative ">
                                    <input
                                        // value={service[1]}
                                        onChange={(e) => { setService([service[0], e.target.value]); console.log(service) }}
                                        type="number"
                                        id="amount"
                                        {...register("amount",
                                            {
                                                required: { value: true, message: "Please enter Amount" },
                                                min: { value: service[1], message: "Amount should be greater than " + service[1] + " for " + service[0] },
                                            })}

                                        style={{
                                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                        }}
                                        className="w-full rounded-[0.5rem] bg-richblack-800 py-[12px] pl-[8px] text-richblack-5 "
                                    />
                                    {errors.amount && (<span className='sm:absolute -bottom-6 left-0 text-pink-300'>{errors.amount.message}</span>)}

                                </div>
                            </div>
                        </label>

                    </div>
                </div>

                <div className='flex flex-col relative'>
                    <label htmlFor="message" className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>Message<span className='text-pink-300'>*</span>
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="5"
                            placeholder='Enter your message here'
                            {...register("message", 
                                // { required: true }
                            )}
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                        />
                        {/* {errors.message && (<span className='sm:absolute -bottom-6 left-0 text-pink-300'>Please enter your message.</span>)} */}
                    </label>
                </div>

                <button type="submit" className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px]  font-semibold text-lg text-richblack-900"
                    disabled={loading}>
                    Pay Now
                </button>
                {/*
                <StripeCheckout
                    stripeKey='key'
                    token={makePayment}
                    amount={service[1] * 100}
                    name={service[0]}
                    currency='INR'
                >
                    <button className=''>
                        Pay with Stripe
                    </button>
                </StripeCheckout>
                */}

            </div>
        </form>
    )
}
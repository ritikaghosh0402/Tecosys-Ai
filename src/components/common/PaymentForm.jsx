import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import CountryCode from '../../data/countrycode.json'
import { pay } from '../../services/payment'
import { useNavigate } from 'react-router-dom'
import {prod} from '../../data/Constant'
import "../../App.css"


export default function PaymentForm() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful }
    } = useForm();
    const [service, setService] = useState([prod[0].service, prod[0].amount])

    const submitContactForm = async (data, e) => {
        try {
            setLoading(true);
            e.preventDefault()

            const serve = data.service.split(',')[0]
            data = { ...data, service: serve }

            await pay(data, navigate)
            setLoading(false);

        } catch (error) {
            console.log("Error: ", error);
            setLoading(false);
        }
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
                    <label htmlFor="message" className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>Message
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

            </div>
        </form>
    )
}
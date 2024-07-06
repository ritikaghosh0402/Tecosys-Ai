import { motion } from "framer-motion"
import ActiveButton from "../common/ActiveButton"
import { FaArrowRight } from "react-icons/fa6"
import RobotAnimation from "./RobotAnimation"
import { Features } from "./Features"
import '../../App.css'
import { Link } from "react-router-dom"

function HeroSection() {
    return (
        <div>
            <div className="w-10/12 mt-2 mx-auto ">

                <div>
                    <motion.div
                        initial={{ x: 1200 }}
                        animate={{ x: [1200, 0] }}
                        transition={{ duration: 2, delay: 0.2 }}
                        whileHover={{ scale: 0.9, opacity: 0.8 }}
                        className="w-[80%] mx-auto text-center text-richblack-25 text-6xl leading-tight"
                    >
                        Explore the Next Generation AI Models with Tecosys
                    </motion.div>
                </div>

                <div className="w-full flex mt-10  content-container ">
                    <div className="w-2/5 flex pl-10 pr-2 flex-col justify-center gap-10">
                        <motion.div
                            initial={{ x: -800 }}
                            animate={{ x: [-800, 0] }}
                            transition={{ duration: 2, delay: 0.2 }}
                            className="text-start text-lg"
                        >
                            Tecosys is the hub of the next generation of AI models. We are building the next generation of AI models utilizing neuromorphic computing, quantum machine learning, transformers, diffusion, and GAN technologies. Let&#39;s explore our services and read the whitepaper.
                        </motion.div>
                        <div>
                            <a href="/Tecosys.pdf" target="_blank">
                                <ActiveButton key={1} text={'Read Whitepaper'} customClasses="" className="flex items-center" >
                                    <FaArrowRight />
                                </ActiveButton>
                            </a>
                        </div>

                    </div>
                    <div className="w-3/5  border">
                        <RobotAnimation />
                    </div>
                </div>
            </div>

            <div>
                <Features />
            </div>
        </div>
    )
}

export default HeroSection

import { motion } from "framer-motion"
import { HeroButton } from "../data/Constant"
import ActiveButton from "../components/common/ActiveButton"

function Home() {
  return (
    <div className="text-richblack-5">
      <div className="w-10/12 mt-7 mx-auto ">
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

        <div className="w-full flex mt-10">
          <div className="w-1/2 border">
            <motion.div
              initial={{ x: -800 }}
              animate={{ x: [-800, 0] }}
              transition={{ duration: 2, delay: 0.2 }}
              className=""
            >
              Tecosys is the hub of the next generation of AI models. We are building the next generation of AI models utilizing neuromorphic computing, quantum machine learning, transformers, diffusion, and GAN technologies. Let&#39;s explore our services and read the whitepaper.
            </motion.div>
            <div>
              
                <ActiveButton key={1} text={'Read Whitepaper'} customClasses="text-white" />
      
            </div>
            <div>
              {/* button */}
            </div>
          </div>
          <div className="w-1/2 border">
            {/* 3d model  */}nbdhcbhfd
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

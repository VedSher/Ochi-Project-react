import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div>
        <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full mt-32 py-20 rounded-t-2xl bg-[#004D43]">
            <div className='text border-t-2 border-b-2 border-white-300 text-teal-50 flex overflow-hidden whitespace-nowrap'>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration:10 }} className='text-[24vw] leading-none font-["Founders_Grotesk"] -mb-[10vw] pt-10 pb-10 uppercase font-medium pr-20'> we are ochi </motion.h1>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration:10 }} className='text-[24vw] leading-none font-["Founders_Grotesk"] -mb-[10vw] pt-10 pb-10 uppercase font-medium pr-20'> we are ochi </motion.h1>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration:10 }} className='text-[24vw] leading-none font-["Founders_Grotesk"] -mb-[10vw] pt-10 pb-10 uppercase font-medium pr-20'> we are ochi </motion.h1>
            </div>
        </div>
    </div>
  )
}

export default Marquee
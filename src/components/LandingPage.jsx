import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6"

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-white-900 md-20 pt-[2.5vw]'>
        <div className='textstructure mt-[9vw] px-[4vw]'>
          {["We Create","Eye Opening","Presention"].map((item, index)=>{
            return (
            <div className="masker">
                <div className="w-fit flex">
                          {index === 1 && (
                          <motion.div initial={{width: 0}} animate={{width: "9vw"}} transition={{ease: [0.25, 1, 0.5, 1],duration: 0.6}} className="mr-3 w-[8vw] rounded-md h-[6vw] relative -top-[1vw] bg-red-500"></motion.div>)}
                          <h1 className="flex items-center uppercase text-[9vw] h-full leading-[7.5vw] tracking-tight font-['Founders_Grotesk_Condensed'] font-bold">{item}</h1>
                      </div>
                </div>
            );
          })};
        </div>
        <div className="border-t-2 border-zinc-300 mt-[2vw] flex justify-between items-center mb-20 py-[1vw] px-[4vw]">
        {[
          "For public and private companies",
          "From the first pitch to IPO"
        ].map((item,index)=>(<p className="text-md font-light tracking-tight leading-none">{item}</p>
        ))}
        <div className="start flex items-center gap-1">
          <div className="px-[0.5vw] py-[0.1vw] border-[1px] border-zinc-900 font-light text-[1.2vw] uppercase rounded-full">Start the project</div>
          <div className="h-[2.2vw] w-[2.2vw] border-[2px] border-zinc-500 rounded-full flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
        </div>
    </div>
  )
}

export default LandingPage
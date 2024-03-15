import React, { useState } from 'react'
import Button from './Button'
import Tag from './Tag'
import { motion, useAnimate, useAnimation } from 'framer-motion'
import { Power4 } from 'gsap';

function Project() {
    const cards = [useAnimation(), useAnimation()];
    const handleHover = (index)=>{
        cards[index].start({y: "0"})
    }
    const handleHoverEnd = (index)=>{
        cards[index].start({y: "100%"})
    }

  return (
    <div className='w-full py-[5vw]'>
        <div className="w-full px-[3.5vw] border-b-2 pb-[5vw] border-zinc-400">
            <h1 className="text-[5vw] font-['Neue_Montreal'] tracking-tighter ">Featured Projects</h1>
        </div>
        <div className="px-[4.5]">
            <div className="cards w-full px-[1.5vw] flex gap-10 mt-[2.5vw]">
            <motion.div
                onHoverStart={() => handleHover(0)}
                onHoverEnd={()=> handleHoverEnd(0)}
                className="cardholder relative w-1/2 h-[75vh]">

                    <div className="card w-full h-full rounded-2xl overflow-hidden">
                        <h1 className="absolute flex overflow-hidden text-[#d8f960] font-['Neue_Montreal'] tracking-tighter z-[90] leading-none left-full -translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tighter text-8xl uppercase">
                        {"FYDE".split("").map((item, index) => (
                                <motion.span
                                    initial={{y: "100%"}}
                                    animate={cards[0]}
                                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*0.05}}
                                    className="inline-block">
                                        {item}
                                </motion.span>
                            ))}
                        </h1>
                        <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" />
                    </div>
                    <div className="flex gap-2 mt-[1vw]">
                        <Tag>Audit</Tag>
                        <Tag>copywriting</Tag>
                        <Tag>sales deck</Tag>
                        <Tag>slides design</Tag>
            </div>
                </motion.div>
                <motion.div 
                    onHoverStart={() => handleHover(1)}
                    onHoverEnd={()=> handleHoverEnd(1)}
                    className="cardholder relative w-1/2 h-[75vh]">
                    <div className="card w-full h-full rounded-2xl overflow-hidden">
                        <h1 className="absolute flex overflow-hidden text-[#d8f960] font-['Neue_Montreal'] tracking-tighter z-[90] leading-none right-full translate-x-1/3 top-1/2 -translate-y-1/2 tracking-tighter text-8xl uppercase">
                            {"VISE".split("").map((item, index) => (
                                <motion.span
                                    initial={{y: "100%"}}
                                    animate={cards[1]}
                                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*0.05}}
                                    className="inline-block">
                                    {item}
                            </motion.span>
                            ))}
                        </h1>
                        <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" />
                    </div>
                    <div className="flex gap-2 mt-[1vw] uppercase">
                        <Tag>agency</Tag>
                        <Tag>company presentation</Tag>
                    </div>
                </motion.div>
            </div>
        </div>
        
        <div className="flex items-center justify-center w-full mt-[5vw]">
            <Button>View All</Button>
        </div>
    </div>
  )
}

export default Project
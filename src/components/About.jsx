import React from 'react'
import Button from './Button'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.25" className="w-full py-[6vw] bg-[#cdea68] rounded-t-2xl text-zinc-900">
        <h1 className="font-['Neue_Montreal'] text-[4vw] pl-[3.5vw] pr-[20vw]  leading-[4vw] tracking-tighter">
            Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className="w-full pt-[5vw] bg-[#cdea68] font-['Neue_Montreal']">
            <div className='text-[1.1vw] border-2 pl-[3.5vw] pt-[1vw] pb-[6vw] border-[#a1b562] flex'>
                <div className="pr-[25vw]">
                    <p className="w-[20vw]">What you can expect:</p>
                </div>
                <div className="text-[1.1vw] w-[20vw] mr-[13vw]">
                    <p className="mb-[2vw]">
                    We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.
                    </p>
                    <p>
                    We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                    </p>
                </div>
                <div className="pt-[5.5vw] w-[10vw]">
                    <p className="pb-[1vw]">S:</p>
                    <a className="block" href="https://www.instagram.com/ochi_design/">Instagram</a>
                    <a className="block" href="https://www.linkedin.com/company/ochi-design/">Linkedin</a>
                </div>
          </div>
        </div>
        <div className='flex gap-5'>
            <div className="w-1/2 pl-[3.5vw]">
              <h1 className="text-[3.5vw] pb-[0.8vw]">Our approach:</h1>
              <Button>Read More</Button>
        </div>
              <img src="colors-1383652.jpg" className="w-1/2 h-[70vh] rounded-3xl mt-[1vw] mr-[4vw]"></img>
        </div>
    </div>
  )
}

export default About
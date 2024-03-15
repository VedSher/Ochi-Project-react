import React, { useEffect, useState } from 'react';

function Eyes() {
    const [rotate, setRot] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let delX = mouseX - window.innerWidth/2;
            let delY = mouseY - window.innerHeight/2;

            let angle = Math.atan2(delY,delX) * (180/Math.PI);
            setRot(angle-180);

        })
    })

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.7" className=" relative h-full w-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
            <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[80%] flex gap-10 ">
                <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
                    <div className="w-[9vw] h-[9vw] bg-zinc-800 rounded-full flex relative">
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="absolute line pl-1.5 rotate-0 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-1vw">
                            <div className="w-[1.5vw] h-[1.5vw] bg-zinc-50 rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="w-[15vw] h-[15vw] bg-zinc-100 flex items-center justify-center rounded-full">
                    <div className="w-[9vw] h-[9vw] bg-zinc-800 relative rounded-full">
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="absolute line pl-1.5 rotate-0 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-1vw">
                            <div className="w-[1.5vw] h-[1.5vw] bg-zinc-50 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes
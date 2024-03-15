import React from 'react'

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-100 flex items-center gap-5 px-[3vw]">
        <div className="cardholder h-[50vh] w-1/2">
            <div className="card w-full h-full rounded-xl relative bg-[#004D43] overflow-hidden flex items-center justify-center">
              <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="logo" width={150} />
              <button className='absolute left-10 bottom-10 border-[1px] rounded-full px-[1.3vh] py-[0.5vh] border-[#CDEA68] text-[#CDEA68] text-[1vw]'>©2019-2022</button>
            </div>
        </div>
        <div className="cardholder gap-5 flex w-1/2 h-[50vh]">
          <div className="card relative w-1/2 h-full bg-[#212121] rounded-xl overflow-hidden flex items-center justify-center">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" width={150} />
            <button className='absolute left-10 bottom-8 border-[1px] rounded-full px-[1.3vh] py-[0.5vh] border-[#ffffff] text-[#ffffff] text-[1vw] uppercase'>rating 5.0 on clutch</button>
          </div>
          <div className="card relative w-1/2 h-full overflow-hidden flex items-center justify-center bg-[#212121] rounded-xl">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" width={100} />
            <button className='absolute left-7 bottom-8 border-[1px] rounded-full px-[1.3vh] py-[0.5vh] border-[#ffffff] text-[#ffffff] text-[1vw] uppercase'>business bootcamp alumini</button>

          </div>
        </div>
    </div>
  )
}

export default Cards
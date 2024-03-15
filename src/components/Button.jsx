import React, { useState } from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';

function Button(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const { children } = props;

  const styles = {
    baseCircle: 'w-[0.5vw] h-[0.5vw] bg-zinc-50 rounded-full transition-all duration-300 ease-in-out',
    hoverCircle: 'w-[2vw] h-[2vw] bg-zinc-50 rounded-full flex justify-center items-center',
    arrow: 'text-zinc-900 rotate-45',
  };

  return (
    <button
      className="text-[1vw] border-[1px] px-[2vw] py-[1vw] uppercase rounded-[2vw] bg-zinc-800 text-white border-zinc-900 bg-zinc-950 flex items-center gap-[2vw]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div className={`${styles.baseCircle} ${isHovered ? styles.hoverCircle : ''}`}>
        <FaArrowUpLong className={styles.arrow} />
      </div>
    </button>
  );
}

export default Button;

import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 bg-[#0F0F0F]'>
      <div className='text flex overflow-hidden whitespace-nowrap'>
        <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", duration: 6, repeat: Infinity }} className='text-[12vw] leading-none font-sans pr-20 text-white'>ATOM SPACE</motion.h1>
        <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", duration: 6, repeat: Infinity }} className='text-[12vw] leading-none font-sans pr-20 text-white'>ATOM SPACE</motion.h1>
      </div>
    </div>
  );
}

export default Marquee;

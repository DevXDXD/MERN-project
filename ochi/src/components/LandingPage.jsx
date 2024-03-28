import { motion } from 'framer-motion';
import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import styles from './styles.module.css';

function LandingPage() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full h-screen bg-black pt-1 relative'>
      {/* Moon image */}
      <div className={`${styles.moon} absolute bottom-30 right-10 w-1/4 md:w-1/4 mt-[10vw]`}></div>
      
      {/* Text content */}
      <div className='textstructure mt-52 px-4 md:px-20'>
        {["We build", "Cutting-edge", "Structures"].map((item, index) => {
          return (
            <div className='masker' key={index}>
              <div className='w-fit flex items-center'>
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "6vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className='mr-0 rounded-md w-[6vw] h-[4vw] -top-[1.2vw] bg-red-500'
                  ></motion.div>
                )}
                <h1 className="uppercase text-3xl md:text-6xl lg:text-7xl leading-[6vw] tracking-tight font-sans font-bold text-white">{item}</h1>
              </div>
            </div>
          );
        })}
        <div className='border-t-[1px] border-zinc-800 mt-8 md:mt-32 flex flex-col md:flex-row justify-between items-center py-5 px-4 md:px-20'>
          {["High Energy Structures for Satellite Buses.", "We are currently in Stealth, More Information Coming Soon. "].map((item, index) => (
            <p className='text-lg md:text-xl font-light tracking-tight leading-none text-white mb-4 md:mb-0' key={index}>{item}</p>
          ))}
          <div className='start flex flex-col md:flex-row items-center'>
            <button onClick={scrollToBottom} className='px-5 py-2 border-[1px] border-zinc-500 font-light text-md capitalize rounded-full text-white mb-4 md:mb-0 md:mr-8'>Start the project</button>
            <div className='w-8 h-8 flex items-center justify-center border-[2px] border-zinc-500 rounded-full'>
              <IoIosArrowDown/>
            </div>
          </div>
        </div>
      </div>
      <div className='start flex items-center'></div>
    </div>
  );
}

export default LandingPage;

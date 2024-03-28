import React, { useState, useEffect } from 'react';

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed z-[999] w-full px-4 md:px-10 py-4 md:py-8 font-["Neue Montreal"] flex justify-between items-center transition-all duration-300 ${
      visible ? 'top-0' : '-top-full'
    }`}>
      <a href='http://localhost:5174/' className='logo'>
        Home
      </a>
      <a href='https://sites.google.com/view/atomspace/home?authuser=0' className='text-lg capitalize font-light md:px-4'>
        Atom Space
      </a>
      <div className='links flex gap-4 md:gap-10'>
        {['services', 'Our Work', 'About Us', 'Insights'].map((item, index) => (
          <a key={index} className={`text-lg capitalize font-light ${index === 3 && 'ml-4 md:ml-32'}`} onClick={index === 2 ? scrollToBottom : null}>
            {item}
          </a>
        ))}

        <a
          href='https://calendly.com/shryasbhurat'
          target='_blank'
          rel='noopener noreferrer'
          className='text-lg capitalize font-light'
        >
          Connect with us
        </a>
      </div>
    </div>
  );
}

export default Navbar;

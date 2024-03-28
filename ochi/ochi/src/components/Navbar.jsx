import React from 'react';

function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-10 py-8 font-["Neue Montreal"] flex justify-between items-center'>
      <div className='logo'>
        Home
      </div>
      <div className='textstructure ml-1'>
        Atom Space
      </div>
      <div className='links flex gap-10'>
        {["services", "Our Work", "About Us", "Insights"].map((item, index) => (
          <a key={index} className={`text-lg capitalize font-light ${index === 3 && "ml-32"}`}>{item}</a>
        ))}
        <a href="https://calendly.com/shryasbhurat" target="_blank" rel="noopener noreferrer" className="text-lg capitalize font-light">Connect with us</a>
      </div>
    </div> 
  );
}

export default Navbar;
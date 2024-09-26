import React from 'react';
import RippleEffect from './animations/RippleEffect';

function Contact() {
  return (
      <div className='mx-auto my-12 cursor-pointer'>
    <RippleEffect className="inline-block rounded-full font-semibold">
      <div className='text-black size-[22rem] rounded-full bg-slate-200 flex flex-col justify-center items-center hover:text-white hover:bg-transparent'>
        <p className='text-sm text-center'>Click to</p>
        <h1 className='text-3xl text-center font-semi-bold'>
          Get in touch
        </h1>
      </div>
    </RippleEffect>
    </div>
  );
}

export default Contact;

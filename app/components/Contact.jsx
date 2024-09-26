import React from 'react';

function Contact() {
  return (
    <div className='mx-auto my-12'>
      <div className='text-black size-[22rem] rounded-full bg-transition flex flex-col justify-center items-center hover:text-white transition ease-in-out delay-50 hover:scale-125 hover:bg-black'>
        <p className='text-sm text-center'>Click to</p>
        <h1 className='text-3xl text-center font-semi-bold transition-transform hover:text-slate-200'>
          Get in touch
        </h1>
      </div>
    </div>
  );
}

export default Contact;

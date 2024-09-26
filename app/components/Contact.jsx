import React from "react";
import RippleEffect from "./animations/RippleEffect";
import { useRouter } from "next/navigation";

function Contact() {
  const router = useRouter(); // use camelCase

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <RippleEffect className="relative inline-block rounded-full overflow-hidden">
        <div
          className="cursor-pointer group"
          onClick={() => router.push("/contact")}
        >
          <div className="relative text-black w-[22rem] h-[22rem] rounded-full bg-transition flex flex-col justify-center items-center transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
            <p className="text-sm text-center">Click to</p>
            <h1 className="text-3xl text-center font-semibold">Get in touch</h1>
          </div>
        </div>
      </RippleEffect>
    </div>
  );
}

export default Contact;

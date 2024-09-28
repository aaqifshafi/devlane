import { Typography, Button } from "@mui/material";
import RippleEffect from "./animations/RippleEffect";

function WhoWeAre() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Typography className="antialiased font-bold text-center text-4xl mb-32">
        Who We Are?
      </Typography>
      <Typography className="antialiased text-center font-semi-bold text-lg max-w-xl mb-6 text-white">
        We are a passionate team dedicated to crafting innovative solutions that
        empower businesses and enhance user experiences.
      </Typography>

      <RippleEffect className="antialiased inline-block rounded-full bg-background font-semibold">
        <button class="rounded-lg text-sm py-4 px-8 hover:text-white">
          Learn more
        </button>
      </RippleEffect>
    </div>
  );
}

export default WhoWeAre;

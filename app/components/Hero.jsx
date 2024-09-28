import { Typography } from "@mui/material";

function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
        <span className="tracking-wide antialiased text-cyan-50 font-thin text-center text-3xl">
          Design Develop & Deploy with
        </span>
      <Typography className="antialiased font-extrabold" variant="h2" component="div">
        devlane.
      </Typography>
    </div>
  );
}

export default Hero;
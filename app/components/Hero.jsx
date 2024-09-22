import { Typography } from "@mui/material";

function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <span className="font-semi-bold text-center text-4xl">
        Design Develop & Deploy with
      </span>
      <Typography className="font-extrabold" variant="h2" component="div">
        devlane.
      </Typography>
    </div>
  );
}

export default Hero;
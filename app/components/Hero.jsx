import { Typography } from "@mui/material";
import Blob from "./Blob";

function Hero() {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      <Blob />
      {/* Content */}
      <div className="z-10 text-center">
        <span className="text-white font-semi-bold text-4xl transition-transform transform hover:scale-105">
          Design Develop & Deploy with
        </span>
        <Typography
          className="font-extrabold transition-transform transform hover:scale-105"
          variant="h2"
          component="div"
        >
          devlane.
        </Typography>
      </div>
    </div>
  );
}

export default Hero;

import { Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

function WhoWeAre() {
  return (
    <div className="h-auto flex flex-col justify-center items-center mt-96">
      <Typography className="font-semibold text-center text-4xl mb-32">
        Who We Are ?
      </Typography>
      <Typography className="text-center text-lg max-w-xl mb-6">
        We are a passionate team dedicated to crafting innovative solutions that
        empower businesses and enhance user experiences.
      </Typography>
      <Button
        variant="outlined"
        size="large"
        sx={{ borderRadius: "20px" }}
        color="info"
      >
        Learn More
      </Button>
    </div>
  );
}

export default WhoWeAre;

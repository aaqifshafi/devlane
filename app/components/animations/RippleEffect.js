import { motion } from "framer-motion";
import { useState } from "react";

const RippleEffect = ({ children, className, ...props }) => {
    const [hovered, setHovered] = useState(false);

    // Animation variants for Framer Motion
    const rippleVariants = {
        initial: { height: 0 },
        hover: { height: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
        exit: { height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    };

    return (
        <div
            className={`relative overflow-hidden ${className}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            {...props}
        >
            {/* Motion div for the ripple effect */}
            <motion.div
                className="absolute top-0 left-0 w-full bg-black"
                variants={rippleVariants}
                initial="initial"
                animate={hovered ? "hover" : "exit"}
            />
            {/* Children content (MUI Button or any other component) */}
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default RippleEffect;

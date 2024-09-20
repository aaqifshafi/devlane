export const circularRevealVariants = {
    hidden: {
        clipPath: "ellipse(50% 0% at 50% 100%)",
        opacity: 1,
    },
    visible: {
        clipPath: "ellipse(100% 50% at 50% 50%)",
        opacity: 0.3,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
        },
    },
};

export const contentVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
        y: "0%",
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeInOut",
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

export const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" },
    },
};
import React from "react";
import { useEffect, useRef } from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children, width = "fit-content", textAlign, delay = 0.25 }) => {
    const theme = useTheme();
    const phoneView = useMediaQuery(theme.breakpoints.down('sm'));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            // alert("Sample123")
            mainControls.start("visible");
        }
    }, [isInView]);

    if (phoneView) {
        return (
            <motion.div>
                {children}
            </motion.div>
        )
    } else {
        return (
            <motion.div
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: delay }}
                style={{ width: width, textAlign: textAlign }}
            >
                {children}
            </motion.div>
        );
    }
};

export default Reveal;
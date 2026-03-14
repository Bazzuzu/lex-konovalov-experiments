import React from "react";
import { motion } from "framer-motion";

const Blob = ({ color, size, top, left, delay, duration = 20 }: {
    color: string,
    size: string,
    top: string,
    left: string,
    delay: number,
    duration?: number
}) => (
    <motion.div
        className="absolute rounded-full filter blur-[100px] opacity-40 pointer-events-none select-none"
        style={{
            backgroundColor: color,
            width: size,
            height: size,
            top,
            left,
        }}
        animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
            duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay,
        }}
    />
);

export function AnimatedBackground() {
    return (
        <div
            className="absolute top-0 left-0 w-full h-[600px] overflow-hidden pointer-events-none select-none z-0"
            style={{
                maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
            }}
        >
            {/* Teal Blob - Original large center blob */}
            <Blob
                color="#6CDAC4"
                size="1440px"
                top="-600px"
                left="calc(50% - 720px)"
                delay={0}
                duration={30}
            />

            {/* Purple Blob - Original left-side blob */}
            <Blob
                color="#7E52F4"
                size="800px"
                top="-300px"
                left="-200px"
                delay={2}
                duration={35}
            />

            {/* Pink Blob - Original top-left blob */}
            <Blob
                color="#ED5A7C"
                size="360px"
                top="-150px"
                left="-100px"
                delay={4}
                duration={25}
            />
        </div>
    );
}

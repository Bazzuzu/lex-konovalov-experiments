import React from "react";
import { motion } from "framer-motion";
import { Header } from "../../layout/Header";
import { Container } from "../../layout/Container";

function PrimaryButton() {
    return (
        <a href="#selected-works" className="relative group inline-flex items-center justify-center cursor-pointer isolation-auto shrink-0" data-name="Primary Button">
            {/* Minimalist interactive button */}
            <div className="absolute inset-0 rounded-[40px] bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-foreground text-background rounded-[40px] flex items-center justify-center gap-space-2 px-space-6 py-space-3 group-hover:bg-foreground/90 transition-colors duration-300 shadow-sm group-hover:shadow-md">
                <p className="font-body font-medium leading-none text-[16px] text-center text-nowrap">View Case Studies</p>
                <div className="size-[16px] relative shrink-0 transition-transform duration-300 group-hover:translate-y-1">
                    <svg viewBox="0 0 16 16" fill="none" className="size-full">
                        <path d="M8 3.33331V12.6666M8 12.6666L12.6667 7.99998M8 12.6666L3.33333 7.99998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </a>
    );
}

function LinkWraper() {
    return (
        <a href="mailto:lex.konovalov@gmail.com" className="group flex items-center justify-center relative cursor-pointer" data-name="Link wraper">
            <p className="text-body-large font-medium text-foreground text-center text-nowrap transition-opacity group-hover:opacity-70">Email me</p>
            <div className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-foreground origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
        </a>
    );
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
};

function HeroContent() {
    return (
        <Container className="flex-1 flex flex-col justify-center pb-space-20 pt-space-20 md:pt-space-32 relative z-10">
            <motion.div 
                className="flex flex-col items-start gap-space-8 w-full max-w-[800px]"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Greeting / Label */}
                <motion.div variants={itemVariants} className="flex gap-[24px] items-center w-full relative">
                    <p className="font-heading font-semibold text-title-small text-foreground/80 text-nowrap tracking-wider uppercase">
                        Lex Konovalov
                    </p>
                    <div className="basis-0 grow h-px bg-foreground/20" />
                </motion.div>

                {/* Main Headline */}
                <motion.h1 variants={itemVariants} className="text-display-large text-foreground leading-[1.1] md:leading-[1.1] tracking-tight">
                    Product Design focused on metrics over pixels.
                </motion.h1>

                {/* Description */}
                <motion.p variants={itemVariants} className="text-body-large text-foreground/70 max-w-[560px] w-full">
                    Leveraging a background in Marketing, I transform complex systems into profitable products. My focus is on utility, conversion, and pragmatic solutions that drive growth.
                </motion.p>

                {/* Actions */}
                <motion.div variants={itemVariants} className="flex flex-wrap gap-space-6 items-center mt-space-6">
                    <PrimaryButton />
                    <LinkWraper />
                </motion.div>
            </motion.div>
        </Container>
    );
}

interface HeroProps {
    currentPath?: string;
}

export default function Hero({ currentPath }: HeroProps) {
    return (
        <div className="relative w-full flex flex-col min-h-[90vh]" data-name="Above the fold">
            {/* Background Accent Grid / Noise (Optional subtle texture) */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-foreground/[0.03] via-transparent to-transparent" />
            
            <div className="flex flex-col items-center flex-1 w-full">
                <Header currentPath={currentPath} />
                <HeroContent />
            </div>
            
            {/* Bottom structural line */}
            <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 border-b border-foreground/10 pointer-events-none" />
        </div>
    );
}

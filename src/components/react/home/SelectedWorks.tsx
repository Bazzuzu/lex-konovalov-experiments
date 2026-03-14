import React from "react";
import { motion } from "framer-motion";
import { Container } from "../../layout/Container";
import svgPaths from "../imports/svg-selected-works";

// Project assets from public/images
const imgLuxury = "/images/project-luxury.png";
const imgMobile = "/images/project-mobile.png";
const imgHomepage = "/images/project-homepage.png";

type ProjectCardProps = {
    imageSrc: string;
    title: string;
    description: string;
    slug: string;
    index: number;
};

function getSlug(title: string) {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.15,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as const, // Premium easing
        },
    }),
};

function ProjectCard({ imageSrc, title, description, slug, index }: ProjectCardProps) {
    return (
        <motion.div 
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-space-4 relative group cursor-pointer w-full"
        >
            <a href={`/work/${slug}`} className="contents">
                {/* Image Container with inner scale on hover */}
                <div className="aspect-[4/3] w-full relative overflow-hidden bg-muted rounded-[20px] isolate">
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-foreground/5 z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
                    
                    <motion.img
                        alt={title}
                        className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                        src={imageSrc}
                        width={400}
                        height={300}
                        loading="lazy"
                    />
                    
                    {/* Hover Arrow Reveal - Bottom Right */}
                    <div className="absolute bottom-4 right-4 z-20 size-[48px] rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm">
                        <svg className="size-[20px] text-foreground -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </div>

                <div className="flex flex-col gap-space-2 w-full text-foreground mt-space-2">
                    <div className="flex gap-space-3 justify-between items-start w-full">
                        <h3 className="text-title-large font-heading tracking-tight transition-colors duration-300 group-hover:text-primary/70">
                            {title}
                        </h3>
                    </div>
                    {/* Subtle line separator */}
                    <div className="w-8 h-px bg-foreground/30 mt-1 mb-1" />
                    <p className="text-body-medium text-foreground/70 leading-relaxed max-w-[90%]">
                        {description}
                    </p>
                </div>
            </a>
        </motion.div>
    );
}

function Details() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-full flex flex-col md:flex-row justify-between gap-space-6 text-foreground items-end pb-space-8 border-b border-foreground/10"
        >
            <h2 className="text-display-large font-heading tracking-tight max-w-[640px] leading-tight">
                Selected Works
            </h2>
            <p className="text-body-large max-w-[400px] text-foreground/70">
                Solving complex operational and commercial challenges with data-driven design.
            </p>
        </motion.div>
    );
}

const PROJECTS = [
    {
        imageSrc: imgLuxury,
        title: "Building the OS for Luxury Travel",
        description: "Designed a scalable ERP unifying 5 departments. The tokenized OOUX architecture enabled 100% engineering autonomy post-launch.",
        slug: "building-the-os-for-luxury-travel"
    },
    {
        imageSrc: imgMobile,
        title: "Optimizing Mobile Lead Gen",
        description: "Redesigned a critical entry point to capture impulsive mobile traffic. Lowering cognitive load resulted in a 30% increase in request submissions.",
        slug: "mobile-request-page-redesign-for-online-travel-agency"
    },
    {
        imageSrc: imgHomepage,
        title: "Homepage & Funnel Structure",
        description: "A strategic overhaul to build trust and guide users effectively. Aligning the visual hierarchy with business goals led to a 27% lift in click-throughs to booking.",
        slug: "home-page-redesign-for-online-travel-agency"
    }
];

type SelectedWorksProps = {
    currentCaseSlug?: string;
};

export default function SelectedWorks({ currentCaseSlug }: SelectedWorksProps) {
    const displayedProjects = currentCaseSlug
        ? PROJECTS.filter(p => p.slug !== currentCaseSlug && getSlug(p.title) !== currentCaseSlug)
        : PROJECTS;

    return (
        <div id="selected-works" className="w-full bg-page text-foreground relative z-10">
            <Container className="py-space-20 md:py-space-32 flex flex-col gap-space-16 items-start">
                <Details />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-space-8 gap-y-space-16 w-full max-w-[1280px]">
                    {displayedProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            index={index}
                            imageSrc={project.imageSrc}
                            title={project.title}
                            description={project.description}
                            slug={project.slug}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
}

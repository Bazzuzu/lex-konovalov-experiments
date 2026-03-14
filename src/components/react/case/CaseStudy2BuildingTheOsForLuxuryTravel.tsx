import React from "react";
import { Container } from "../../layout/Container";
import SelectedWorks from "../home/SelectedWorks";
import { CaseStudyHeader } from "./CaseStudyHeader";
import { BorderedContent } from "../ui/BorderedContent";
import { StorySectionSummary } from "./sections/StorySectionSummary";
import { StorySection2Details4Images } from "./sections/StorySection2Details4Images";

// Placeholders for assets
const imgCaseStudyHeroImage = "https://placehold.co/1280x800/png";
const imgOOUX1 = "https://placehold.co/800x800/png";
const imgOOUX2 = "https://placehold.co/800x800/png";
const imgOOUX3 = "https://placehold.co/800x800/png";
const imgOOUX4 = "https://placehold.co/800x800/png";

function HeroSection() {
    return (
        <div className="bg-background w-full">
            <Container className="py-10 flex flex-col gap-16">
                <div className="flex flex-wrap items-end gap-10">
                    {/* Title Area */}
                    <div className="flex-1 min-w-[280px] flex flex-col gap-10">
                        <h1 className="text-display-large text-foreground md:text-[clamp(40px,18.75px+2.656vw,57px)] md:leading-[clamp(48px,35.5px+1.563vw,58px)]">
                            Building the OS for Luxury Travel
                        </h1>

                        <div className="flex flex-wrap gap-3 text-body-medium text-foreground/88">
                            <span>#ERP, #SaaS, #B2B, #Design Systems, #OOUX</span>
                        </div>
                    </div>

                    {/* Details Area */}
                    <div className="flex-1 min-w-[280px] pt-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { title: "My Role", content: "Lead Designer \n(Ops strategy & Design Systems)." },
                            { title: "Timeline", content: "8 Months \n(MVP to v1.0 Launch)." },
                            { title: "impact", content: "100% Autonomy \n(Tokens-driven handoff)." },
                            { title: "Team", content: "3 Designers \n14 Engineers." },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col gap-2">
                                <div className="flex gap-6 items-center">
                                    <span className="font-semibold text-body-medium text-foreground tracking-[0.3px] uppercase whitespace-nowrap">{item.title}</span>
                                    <div className="h-px bg-black/12 flex-grow" />
                                </div>
                                <p className="text-body-medium text-foreground whitespace-pre-line">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="aspect-[4/3] w-full relative bg-gray-100">
                    <img alt="Hero" className="absolute inset-0 size-full object-cover" src={imgCaseStudyHeroImage} />
                </div>
            </Container>
        </div>
    );
}

export default function CaseStudy2BuildingTheOsForLuxuryTravel() {
    return (
        <div className="bg-white flex flex-col items-start w-full min-h-screen font-sans overflow-x-clip">
            <CaseStudyHeader />
            <HeroSection />

            <StorySectionSummary
                heading="The Mission: Unifying a Fragmented Ecosystem"
                columns={[
                    {
                        title: "The Problem:",
                        content: "Business Class handled $100M+ in bookings across five departments (Sales, Operations, Finance, Logistics, and Concierge). Each had their own 'shadow' spreadsheets, leading to data silos, human error, and massive scale bottlenecks."
                    },
                    {
                        title: "The Objective:",
                        content: "Design a unified ERP that serves as the 'Single Source of Truth,' capable of handling complex booking logic while remaining flexible enough for future features."
                    },
                    {
                        title: "The Solution:",
                        content: "A custom SaaS platform built on Object-Oriented UX (OOUX). We tokenized the entire business—from seat classes to route legs—creating a system that engineers could extend without design bottlenecks."
                    }
                ]}
            />

            <StorySection2Details4Images
                heading="Architecture: Thinking in Systems (OOUX)"
                details1={{
                    title: "Object-Oriented Design:",
                    content: "Instead of designing pages, we designed objects (Routs, Bookings, Clients, Agents). This mapped the software directly to the real-world business logic."
                }}
                details2={{
                    title: "Tokens as the Handoff Language:",
                    content: "By using a strict token system, we ensured that updates to spacing, color, or radii propagated across the entire ERP instantly."
                }}
                row1={{
                    images: [
                        { src: imgOOUX1, alt: "OOUX Mapping 1" },
                        { src: imgOOUX2, alt: "OOUX Mapping 2" }
                    ],
                    caption: "Mapping the relationship between core business objects."
                }}
                row2={{
                    images: [
                        { src: imgOOUX3, alt: "Component Audit 1" },
                        { src: imgOOUX4, alt: "Component Audit 2" }
                    ],
                    caption: "Audit of legacy components legacy silos."
                }}
            />

            <div className="w-full bg-white border-y border-black/12">
                <Container className="py-20 flex flex-col gap-10 items-start">
                    <h2 className="text-headline-large text-foreground max-w-[640px]">The Outcome</h2>
                    <BorderedContent>
                        <div className="flex flex-col gap-6 text-body-large text-foreground">
                            <p>The platform successfully launched, consolidating five department workflows into one interface. The primary success metric wasn't just 'features shipped,' but 'Engineering Velocity.'</p>
                            <p>Because the system was built on a robust tokenized architecture, the engineering team achieved 100% autonomy in building new secondary layouts, requiring zero designers' input for 80% of UI updates post-launch.</p>
                        </div>
                    </BorderedContent>
                </Container>
            </div>

            <SelectedWorks currentCaseSlug="building-the-os-for-luxury-travel" />
        </div>
    );
}

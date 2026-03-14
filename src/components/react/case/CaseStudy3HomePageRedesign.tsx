import React from "react";
import { Container } from "../../layout/Container";
import SelectedWorks from "../home/SelectedWorks";
import { CaseStudyHeader } from "./CaseStudyHeader";
import { BorderedContent } from "../ui/BorderedContent";
import { StorySectionSummary } from "./sections/StorySectionSummary";
import { StorySection3Details2Images } from "./sections/StorySection3Details2Images";

// Placeholders for assets
const imgCaseStudyHeroImage = "https://placehold.co/1280x800/png";
const imgFunnel1 = "https://placehold.co/1280x800/png";
const imgFunnel2 = "https://placehold.co/1280x800/png";

function HeroSection() {
    return (
        <div className="bg-background w-full">
            <Container className="py-10 flex flex-col gap-16">
                <div className="flex flex-wrap items-end gap-10">
                    {/* Title Area */}
                    <div className="flex-1 min-w-[280px] flex flex-col gap-10">
                        <h1 className="text-display-large text-foreground md:text-[clamp(40px,18.75px+2.656vw,57px)] md:leading-[clamp(48px,35.5px+1.563vw,58px)]">
                            Redesigning the Multi-Channel Funnel
                        </h1>

                        <div className="flex flex-wrap gap-3 text-body-medium text-foreground/88">
                            <span>#Funnel Optimization, #Visual Design, #Strategy</span>
                        </div>
                    </div>

                    {/* Details Area */}
                    <div className="flex-1 min-w-[280px] pt-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { title: "My Role", content: "Senior Designer \n(UX Strategy & UI)." },
                            { title: "Objective", content: "Increase Trust & \nClick-Through Rates." },
                            { title: "Metric", content: "+27% Funnel \nConversion uplift." },
                            { title: "Impact", content: "New Brand Direction \nValidated via A/B." },
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

export default function CaseStudy3HomePageRedesign() {
    return (
        <div className="bg-white flex flex-col items-start w-full min-h-screen font-sans overflow-x-clip">
            <CaseStudyHeader />
            <HeroSection />

            <StorySectionSummary
                heading="The Challenge: Aligning Premium Brand with High Volume"
                columns={[
                    {
                        title: "The Gap:",
                        content: "Despite high traffic volume, the bounce rate on the homepage was higher than industry averages. Users weren't fully grasping the 'Premium Agency' value proposition vs a standard search engine."
                    },
                    {
                        title: "The Hypothesis:",
                        content: "If we shift the visual hierarchy from 'Search-First' to 'Value-First' (focusing on agent expertise and white-glove service), we will increase user trust and lead quality."
                    },
                    {
                        title: "The Result:",
                        content: "A complete overhaul of the homepage and top-of-funnel flow resulted in a 27% increase in CTR towards the booking engine and a significant drop in support-related bounce rates."
                    }
                ]}
            />

            <StorySection3Details2Images
                heading="The Funnel Overhaul"
                details1={{
                    title: "From Noise to Narrative:",
                    content: "We replaced cluttered content blocks with a streamlined narrative that addressed user anxieties (Cancellation protection, Agent support) at the exact moment of engagement."
                }}
                details2={{
                    title: "Visual Trust Signals:",
                    content: "Integrated Trustpilot and real-time agent activity feeds to move the social proof from the periphery to the core conversion path."
                }}
                images={[
                    { src: imgFunnel1, alt: "New Homepage Hero" },
                    { src: imgFunnel2, alt: "Optimized Funnel Step" }
                ]}
            />

            <div className="w-full bg-background">
                <Container className="py-20 flex flex-col gap-10 items-start">
                    <h2 className="text-headline-large text-foreground max-w-[640px]">Key Takeaways</h2>
                    <BorderedContent>
                        <div className="flex flex-col gap-6 text-body-large text-foreground">
                            <p>This project reinforced that in luxury travel, 'speed to search' is secondary to 'perceived trust.' By slowing the user down slightly to explain our unique agency advantages, we actually increased the total volume of successful bookings.</p>
                        </div>
                    </BorderedContent>
                </Container>
            </div>

            <SelectedWorks currentCaseSlug="home-page-redesign-for-online-travel-agency" />
        </div>
    );
}

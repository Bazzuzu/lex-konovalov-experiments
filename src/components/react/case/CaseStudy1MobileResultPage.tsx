import React from "react";
import { Container } from "../../layout/Container";
import SelectedWorks from "../home/SelectedWorks";
import { CaseStudyHeader } from "./CaseStudyHeader";
import { Separator } from "../ui/Separator";
import { BorderedContent } from "../ui/BorderedContent";
import { StorySection3Details2Images } from "./sections/StorySection3Details2Images";

// Placeholders for assets
const imgCaseStudyHeroImage = "https://placehold.co/1280x800/png";
const imgFriction1 = "https://placehold.co/1280x800/png";
const imgFriction2 = "https://placehold.co/1280x800/png";
const imgStrategy1 = "https://placehold.co/1280x800/png";
const imgStrategy2 = "https://placehold.co/1280x800/png";
const imgCaseStudyUserJourney10 = "https://placehold.co/1280x800/png";
const imgCaseStudyUserJourney11 = "https://placehold.co/1280x800/png";

function HeroSection() {
    return (
        <div className="bg-background w-full">
            <Container className="py-10 flex flex-col gap-16">
                <div className="flex flex-wrap items-end gap-10">
                    {/* Title Area */}
                    <div className="flex-1 min-w-[280px] flex flex-col gap-10">
                        <h1 className="text-display-large text-foreground md:text-[clamp(40px,18.75px+2.656vw,57px)] md:leading-[clamp(48px,35.5px+1.563vw,58px)]">
                            Capturing the Impulse: +29% Leads on Mobile
                        </h1>

                        <div className="flex flex-wrap gap-3 text-body-medium text-foreground/88">
                            <span>#Mobile Growth, #CRO, #Lead Generation, #A/B Testing</span>
                        </div>
                    </div>

                    {/* Details Area */}
                    <div className="flex-1 min-w-[280px] pt-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { title: "My Role", content: "Lead Product Designer \n(Research, UI/UX, A/B Testing)." },
                            { title: "Scope", content: "End-to-End Redesign \n(Audit → A/B Testing)." },
                            { title: "Status", content: "Shipped & Validated \n(Winner Variant)." },
                            { title: "Users", content: "High-Intent Mobile Travelers \n(70% of traffic)." },
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

function ContextProblem() {
    return (
        <div className="bg-background w-full">
            <Container className="py-10 flex flex-col gap-10">
                <div className="flex flex-wrap gap-10 items-start text-foreground">
                    {/* Challenge */}
                    <div className="flex-1 min-w-[280px] flex flex-col gap-3">
                        <h3 className="text-title-large font-bold">The Challenge:</h3>
                        <p className="text-body-large">
                            70% of our traffic came from mobile (Kayak/Google), carrying high intent. However, the legacy "Request a Quote" page treated mobile users like desktop users, resulting in a stagnant 6% conversion rate.
                        </p>
                    </div>
                    {/* Solution */}
                    <div className="flex-1 min-w-[280px] flex flex-col gap-3">
                        <h3 className="text-title-large font-bold">The Solution:</h3>
                        <p className="text-body-large">
                            A psychology-driven redesign focusing on "Thumb Zone" accessibility, cognitive load reduction, and strategic trust placement.
                        </p>
                    </div>
                    {/* Impact */}
                    <div className="flex-1 min-w-[280px] flex flex-col gap-3">
                        <h3 className="text-title-large font-bold">The Impact:</h3>
                        <div className="text-body-large flex flex-col gap-3">
                            <p><span className="font-bold">+29.6% </span>Uplift in Successful Request Submissions (vs Control).</p>
                            <p><span className="font-bold">+70.4% </span>Increase in CTA Clicks (Sticky Button).</p>
                            <p><span className="font-bold">~11% </span>Stabilized Key Event Rate (nearly doubling historic performance).</p>
                        </div>
                    </div>
                </div>
                <Separator />
            </Container>
        </div>
    );
}

function FrictionSection() {
    return (
        <StorySection3Details2Images
            heading="The Friction: High Intent, Low Conversion"
            details1={{
                title: "The Business Context:",
                content: "We operate on an Agency Model. Users don't \"Buy Now\", they \"Request a Quote.\" This means the barrier to entry should be near zero."
            }}
            details2={{
                title: "The \"Leaky Bucket\":",
                content: (
                    <div className="flex flex-col gap-3">
                        <p>
                            My UX audit revealed that while users arrived with high intent (specific dates/routes), the interface fought against them:
                        </p>
                        <p>
                            <span className="font-bold">Hierarchy Collapse & Rage Clicks: </span>
                            The hottest interaction zones were non-clickable price tags, distracting users from the main goal. The actual "Get Best Price" button faded into the background, performing worse than text inputs and secondary navigation.
                        </p>
                        <p>
                            <span className="font-bold">Trust Deficit: </span>
                            For a $3k+ transaction, trust signals were buried in the footer.
                        </p>
                        <p>
                            <span className="font-bold">Cognitive Strain: </span>
                            Inline placeholders and small touch targets caused input errors.
                        </p>
                    </div>
                )
            }}
            images={[
                { src: imgFriction1, alt: "Friction Context 1" },
                { src: imgFriction2, alt: "Friction Context 2" }
            ]}
        />
    );
}

function StrategySection() {
    return (
        <StorySection3Details2Images
            heading="The Strategy: Reducing Friction & Anxiety"
            description="I hypothesized that to capture impulsive mobile traffic, we needed to shift from a &quot;Data Collection&quot; mindset to a &quot;Value Exchange&quot; mindset."
            details1={{
                title: "The \"Always-On\" Conversion Path (Sticky CTA)",
                content: (
                    <div className="flex flex-col gap-3">
                        <p><span className="font-bold">The Problem: </span>Mobile users scroll to read, often losing the CTA.</p>
                        <p><span className="font-bold">The Fix: </span>I implemented a Persistent Sticky Footer containing the price and the "Lock This Fare" button.</p>
                        <p><span className="font-bold">The Logic: </span>This ensures the conversion path is always within the "Thumb Zone," regardless of scroll depth.</p>
                        <p><span className="font-bold">Result: </span>CTA clicks skyrocketed by +70.4%.</p>
                    </div>
                )
            }}
            details2={{
                title: "Strategic Trust Injection",
                content: (
                    <div className="flex flex-col gap-3">
                        <p><span className="font-bold">The Problem: </span>Mobile users are skeptical of high-ticket offers from unknown brands.</p>
                        <p><span className="font-bold">The Fix: </span>I moved the Trustpilot rating (4.7/5) and "Verified by Agents" badge from the footer to directly below the CTA.</p>
                        <p><span className="font-bold">The Logic: </span>Providing social proof exactly at the moment of decision-making (Point of Action) reduces anxiety and bounce rates.</p>
                    </div>
                )
            }}
            images={[
                { src: imgStrategy1, alt: "Strategy Context 1" },
                { src: imgStrategy2, alt: "Strategy Context 2" }
            ]}
        />
    );
}

function Verdict() {
    return (
        <div className="bg-[rgba(0,0,0,0.04)] w-full">
            <Container className="py-10 flex flex-col gap-10 items-start">
                <h2 className="text-headline-large text-foreground">The Verdict (Results & Validation)</h2>

                <BorderedContent>
                    <p className="text-title-large font-bold">A/B Test Results:</p>
                    <div className="flex flex-col gap-3 text-body-large">
                        <p>
                            We ran a controlled experiment to filter out seasonal trends.<br />
                            <span className="font-bold">Control Group:</span> <span className="font-bold">+5.0%</span> (Natural variance) / Avg time to convert <span className="font-bold">2:05</span>
                        </p>
                        <p>
                            <span className="font-bold">My Variant: +29.6%</span> Uplift in Successful Requests  / Avg time to convert <span className="font-bold">1:36</span>
                        </p>
                    </div>
                </BorderedContent>

                <div className="w-full flex flex-wrap gap-6">
                    <div className="aspect-[628/393] flex-1 min-w-[280px] relative">
                        <img alt="" className="absolute inset-0 size-full object-contain" src={imgCaseStudyUserJourney10} />
                    </div>
                    <div className="aspect-[628/393] flex-1 min-w-[280px] relative">
                        <img alt="" className="absolute inset-0 size-full object-contain" src={imgCaseStudyUserJourney11} />
                    </div>
                </div>

                <Separator />

            </Container>
        </div>
    );
}

function KeyLearnings() {
    return (
        <div className="bg-[rgba(0,0,0,0.04)] w-full">
            <Container className="py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <div className="flex flex-col gap-3 text-foreground">
                    <p className="text-title-large font-bold">Business Impact:</p>
                    <div className="text-body-large font-normal space-y-3">
                        <p>
                            <span className="font-bold">+29.6%</span> Uplift in Request Submissions (Primary Metric).
                        </p>
                        <p>
                            <span className="font-bold">11%</span> Stabilized Key Event Rate (nearly double the historic avg).
                        </p>
                        <p>Future Roadmap: The research phase uncovered a backlog of high-potential hypotheses aimed at increasing Revenue Per User (RPU), currently prioritized for upcoming A/B tests.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 text-foreground">
                    <p className="text-title-large font-bold">My Takeaway:</p>
                    <div className="text-body-large font-normal space-y-3">
                        <p>On mobile, clarity is the ultimate persuasion tool. By removing friction and respecting the user's context, we didn't just fix a page – we unlocked a revenue channel.</p>
                        <p>While the primary goal was volume (Conversion Rate), the audit revealed deeper opportunities to drive value (Revenue Per User). Based on user behavior data, I formulated a new set of hypotheses – focused on cross-selling and dynamic packaging – that are currently in the validation pipeline.</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default function CaseStudy1MobileResultPage() {
    return (
        <div className="bg-white flex flex-col items-start w-full min-h-screen font-sans overflow-x-clip">
            <CaseStudyHeader />
            <HeroSection />
            <ContextProblem />
            <FrictionSection />
            <StrategySection />
            <Verdict />
            <KeyLearnings />
            <SelectedWorks currentCaseSlug="mobile-request-page-redesign-for-online-travel-agency" />
        </div>
    );
}

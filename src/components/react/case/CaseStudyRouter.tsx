import React from "react";
import CaseStudy1MobileResultPage from "./CaseStudy1MobileResultPage";
import CaseStudy2BuildingTheOsForLuxuryTravel from "./CaseStudy2BuildingTheOsForLuxuryTravel";
import CaseStudy3HomePageRedesign from "./CaseStudy3HomePageRedesign";

interface CaseStudyRouterProps {
    slug: string;
}

export default function CaseStudyRouter({ slug }: CaseStudyRouterProps) {
    // Check for the specific case study slug
    if (slug === "mobile-request-page-redesign-for-online-travel-agency" || slug === "mobile-cro") {
        return <CaseStudy1MobileResultPage />;
    }

    if (slug === "home-page-redesign-for-online-travel-agency") {
        return <CaseStudy3HomePageRedesign />;
    }

    if (slug === "building-the-os-for-luxury-travel") {
        return <CaseStudy2BuildingTheOsForLuxuryTravel />;
    }

    // High-level "Case study" placeholder from legacy if no specific one matches
    return (
        <div className="bg-page flex flex-col items-center justify-center min-h-screen font-sans">
            <h1 className="text-display-medium">Case Study Not Found</h1>
            <p className="text-body-large mt-space-4">The case study with slug "{slug}" was not found.</p>
            <a href="/" className="mt-space-8 underline">Back to Home</a>
        </div>
    );
}

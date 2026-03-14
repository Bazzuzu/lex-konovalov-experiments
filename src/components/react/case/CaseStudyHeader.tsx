import React from "react";
import { Container } from "../../layout/Container";
import { Logo } from "../../layout/Logo";
import svgPaths from "../imports/svg-case-header";

function Icons() {
    return (
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icons">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="Frame">
                    <path d={svgPaths.p2f4e300} fill="currentColor" id="Vector" />
                </g>
            </svg>
        </div>
    );
}

function PrimaryButton() {
    return (
        <div className="bg-secondary flex items-center justify-center overflow-clip p-[8px] relative rounded-[9999px] shrink-0" data-name="Primary Button">
            <Icons />
        </div>
    );
}

function Back() {
    return (
        <div className="flex gap-space-6 items-center relative shrink-0 text-foreground" data-name="Back">
            <PrimaryButton />
            <p className="text-link-large text-foreground relative shrink-0">Back to Home</p>
        </div>
    );
}

export function CaseStudyHeader() {
    return (
        <div className="flex flex-col items-center relative z-20 w-full overflow-visible" data-name="Case study header">

            <Container className="py-space-6 md:py-space-10 relative z-10">
                <div className="flex items-center justify-between w-full" data-name="Header">
                    <a href={`${import.meta.env.BASE_URL}/`} className="hover:opacity-80 transition-opacity" aria-label="Back to Home">
                        <Back />
                    </a>
                    <a href={`${import.meta.env.BASE_URL}/`} className="hover:opacity-80 transition-opacity" aria-label="Home">
                        <Logo />
                    </a>
                </div>
            </Container>
        </div>
    );
}

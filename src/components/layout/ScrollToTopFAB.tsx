import React, { useEffect, useState } from "react";
import svgPaths from "../react/imports/svg-scroll-to-top";

function Frame() {
    return (
        <div className="absolute left-1/2 size-[24px] top-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g>
                    <path d={svgPaths.p3e6c4dc0} fill="white" />
                </g>
            </svg>
        </div>
    );
}

function Icons() {
    return (
        <div className="overflow-clip relative shrink-0 size-[24px]">
            <Frame />
        </div>
    );
}

export default function ScrollToTopFAB() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled past the viewport height (Above the Fold)
            if (window.scrollY > window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        // Check initial scroll position
        toggleVisibility();

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-[40px] right-[12px] md:right-[40px] z-[99] transition-all duration-300 cursor-pointer border-none bg-transparent p-0 size-[56px] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                }`}
            aria-label="Scroll to top"
        >
            <div className="bg-[rgba(0,0,0,0.88)] relative rounded-[40px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.12)] size-full">
                <div className="flex flex-row items-center justify-center size-full">
                    <div className="flex items-center justify-center overflow-clip p-[16px] relative size-full">
                        <Icons />
                    </div>
                </div>
            </div>
        </button>
    );
}

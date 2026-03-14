import React from "react";
import svgPaths from "../react/imports/svg-mobile-nav";

export function Logo({ className }: { className?: string }) {
    return (
        <div className={`relative shrink-0 size-[48px] ${className || ""}`} data-name="Logo">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48" aria-labelledby="logo-title">
                <title id="logo-title">Lex Konovalov Logo</title>
                <g id="Logo">
                    <g id="Vector">
                        <path d={svgPaths.p10908f00} fill="currentColor" fillOpacity="0.24" />
                        <path clipRule="evenodd" d={svgPaths.p269fef00} fill="var(--color-page, white)" fillRule="evenodd" />
                        <path d={svgPaths.p12f3b400} fill="var(--color-page, white)" />
                        <path d={svgPaths.p6e37300} fill="var(--color-page, white)" />
                        <path d={svgPaths.p3bca7800} fill="var(--color-page, white)" />
                    </g>
                </g>
            </svg>
        </div>
    );
}

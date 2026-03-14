import React from "react";
import { cn } from "../../../lib/utils";

interface SectionHeadingProps {
    title: string;
    className?: string;
}

export function SectionHeading({ title, className }: SectionHeadingProps) {
    return (
        <div className={cn("flex gap-[24px] items-center w-full relative shrink-0", className)}>
            <p className="font-sans font-medium text-title-small text-foreground text-nowrap tracking-[0.3px] uppercase">
                {title}
            </p>
            <div className="basis-0 grow h-px relative text-foreground">
                <div className="absolute inset-0">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 1" style={{ width: '100%' }}>
                        <line x1="0" y1="0.5" x2="100%" y2="0.5" stroke="currentColor" strokeOpacity="0.64" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

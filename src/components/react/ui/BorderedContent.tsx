import React from "react";

interface BorderedContentProps {
    children: React.ReactNode;
}

export function BorderedContent({ children }: BorderedContentProps) {
    return (
        <div className="max-w-[1280px] min-w-[280px] relative shrink-0 w-full" data-name="Details">
            <div aria-hidden="true" className="absolute border-l border-black/12 inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[12px] items-start leading-[24px] max-w-[inherit] min-w-[inherit] pl-[40px] pr-0 py-0 relative text-foreground w-full whitespace-pre-wrap">
                {children}
            </div>
        </div>
    );
}

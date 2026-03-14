import React from "react";
import { Container } from "../../../layout/Container";
import { cn } from "../../../../lib/utils";

export interface SummaryColumn {
    title: string;
    content: React.ReactNode;
}

interface StorySectionSummaryProps {
    heading: React.ReactNode;
    columns: [SummaryColumn, SummaryColumn, SummaryColumn];
    className?: string;
    withSeparator?: boolean;
}

export function StorySectionSummary({
    heading,
    columns,
    className,
    withSeparator,
}: StorySectionSummaryProps) {
    return (
        <div className={cn("w-full bg-secondary", className)}>
            <Container className="py-[80px] flex flex-col gap-[40px] items-center">
                <div className="w-full max-w-[1280px]">
                    <h2 className="text-headline-large text-foreground max-w-[640px] w-full">
                        {heading}
                    </h2>
                </div>

                <div className="w-full max-w-[1280px] flex flex-wrap gap-[24px] gap-x-[40px] items-start">
                    {columns.map((col, index) => (
                        <div
                            key={index}
                            className="flex-1 min-w-[280px] flex flex-col gap-[12px] items-start"
                        >
                            <h3 className="text-title-large font-extrabold text-foreground w-full">
                                {col.title}
                            </h3>
                            <div className="text-body-large text-foreground w-full">
                                {col.content}
                            </div>
                        </div>
                    ))}
                </div>

                {withSeparator && (
                    <div className="w-full max-w-[1280px]">
                        <div className="w-full h-px bg-[rgba(0,0,0,0.12)]" />
                    </div>
                )}
            </Container>
        </div>
    );
}

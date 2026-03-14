import React from "react";
import { cn } from "../../lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export function Container({ children, className, ...props }: ContainerProps) {
    return (
        <div className={cn("w-full max-w-[1440px] mx-auto px-space-4 py-space-6 md:px-space-20 md:py-space-10", className)} {...props}>
            {children}
        </div>
    );
}

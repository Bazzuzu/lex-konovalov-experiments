import React from "react";

export function Separator() {
    return (
        <div className="h-[20px] relative shrink-0 w-full" data-name="Divider">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 20">
                <g id="Divider">
                    <line id="Line 1" stroke="black" strokeOpacity="0.12" x2="400" y1="9.5" y2="9.5" />
                </g>
            </svg>
        </div>
    );
}

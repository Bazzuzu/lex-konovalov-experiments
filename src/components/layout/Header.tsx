import React from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import svgPaths from "../react/imports/svg-selected-works";

function Frame() {
    return (
        <></>
    );
}

function Icons() {
    return (
        null
    );
}

function NavLink({ to, children, currentPath }: { to: string; children: React.ReactNode; currentPath?: string }) {
    const isActive = currentPath === to || (to !== "/" && currentPath?.startsWith(to));

    if (isActive) {
        return (
            <span className="font-sans font-normal leading-[24px] relative shrink-0 text-[16px] text-muted-foreground text-nowrap cursor-default">
                {children}
            </span>
        );
    }

    return (
        <a
            href={to}
            className="font-sans font-normal leading-[24px] relative shrink-0 text-[16px] text-foreground hover:opacity-80 transition-opacity underline decoration-solid [text-underline-position:from-font] text-nowrap"
        >
            {children}
        </a>
    );
}

function Navigation({ currentPath }: { currentPath?: string }) {
    return (
        <div className="content-stretch flex gap-space-10 items-center relative shrink-0" data-name="Navigation">
            <NavLink to="/" currentPath={currentPath}>Home</NavLink>
            <NavLink to="/about" currentPath={currentPath}>About</NavLink>
            <Icons />
        </div>
    );
}

export function Header({ currentPath }: { currentPath?: string }) {
    return (
        <div className="w-full relative z-10">
            <Container className="flex items-center justify-between py-space-4 md:py-space-10">
                <a href="/" aria-label="Home">
                    <Logo className="shrink-0" />
                </a>
                <Navigation currentPath={currentPath} />
            </Container>
        </div>
    );
}

export default Header;

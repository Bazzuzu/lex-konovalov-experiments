import React from "react";
import { Toaster, toast } from "sonner";
import { Container } from "../../layout/Container";
import Header from "../../layout/Header";
import { SectionHeading } from "../ui/SectionHeading";
import svgConnectPaths from "../imports/svg-about-connect";
import svgPaths from "../imports/svg-arrow";

// Assets from public/images
const imgMyPhotoDesktop = "/images/hero-face.png";

// --- Header Background ---
function HeaderBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            {/* Teal Blob */}
            <div className="absolute bottom-0 left-1/2 size-[1440px] translate-x-[-50%]">
                <div className="absolute inset-[-13.89%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1840 1840">
                        <g filter="url(#filter0_f_18_291)" id="Ellipse 3" opacity="0.4">
                            <circle cx="920" cy="920" fill="#6CDAC4" r="720" />
                        </g>
                        <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1840" id="filter0_f_18_291" width="1840" x="0" y="0">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feGaussianBlur result="effect1_foregroundBlur_18_291" stdDeviation="100" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>

            {/* Purple Blob */}
            <div className="absolute bottom-0 left-0 size-[800px]">
                <div className="absolute inset-[-25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1200 1200">
                        <g filter="url(#filter0_f_18_293)" id="Ellipse 2" opacity="0.4">
                            <circle cx="600" cy="600" fill="#7E52F4" r="400" />
                        </g>
                        <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1200" id="filter0_f_18_293" width="1200" x="0" y="0">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feGaussianBlur result="effect1_foregroundBlur_18_293" stdDeviation="100" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>

            {/* Pink Blob */}
            <div className="absolute left-[-116px] size-[360px] top-[-132px]">
                <div className="absolute inset-[-55.56%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 760 760">
                        <g filter="url(#filter0_f_15_423)" id="Ellipse 1">
                            <circle cx="380" cy="380" fill="#ED5A7C" r="180" />
                        </g>
                        <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="760" id="filter0_f_15_423" width="760" x="0" y="0">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feGaussianBlur result="effect1_foregroundBlur_15_423" stdDeviation="100" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
}

// --- New Components from Figma ---

function Divider() {
    return (
        <div className="h-[20px] relative shrink-0 w-full" data-name="Divider">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 20">
                <g id="Divider">
                    <line id="Line 1" stroke="currentColor" strokeOpacity="0.12" x2="400" y1="9.5" y2="9.5" />
                </g>
            </svg>
        </div>
    );
}

function PhotoColumn() {
    return (
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-space-10 items-start justify-center min-h-px min-w-[300px] lg:min-w-[320px] relative w-full lg:w-auto" data-name="Photo desktop">
            <Divider />
            <div className="aspect-[400/520] relative shrink-0 w-full" data-name="My Photo / desktop">
                <img
                    alt="Lex Konovalov"
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                    src={imgMyPhotoDesktop}
                    width={400}
                    height={520}
                    loading="lazy"
                />
            </div>
        </div>
    );
}

function SectionTitle({ title }: { title: string }) {
    return (
        <div className="content-stretch flex gap-space-6 items-center justify-center max-w-[480px] min-w-[240px] relative shrink-0 w-full" data-name="Details">
            <h2 className="font-sans font-medium leading-[20px] relative shrink-0 text-[14px] text-foreground tracking-[0.3px] uppercase whitespace-pre">{title}</h2>
            <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
                <div className="absolute inset-0 bg-foreground/12" />
            </div>
        </div>
    );
}

function DetailItem({ title, description, children }: { title: string, description?: string, children?: React.ReactNode }) {
    return (
        <div className="max-w-[1280px] min-w-[280px] relative shrink-0 w-full" data-name="Details">
            <div aria-hidden="true" className="absolute border-l border-subtle inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-space-3 items-start leading-[24px] max-w-[inherit] min-w-[inherit] pl-space-10 pr-0 py-0 relative text-foreground w-full whitespace-pre-wrap">
                <h3 className="font-sans font-extrabold max-w-[640px] relative shrink-0 text-[20px] w-full">{title}</h3>
                {description && (
                    <p className="font-sans font-normal max-w-[640px] relative shrink-0 text-[16px] w-full">{description}</p>
                )}
                {children}
            </div>
        </div>
    );
}

function ApproachColumn() {
    return (
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-space-10 items-start min-h-px min-w-[300px] lg:min-w-[320px] relative w-full lg:w-auto" data-name="My values">
            <SectionTitle title="MY APPROACH" />

            <DetailItem
                title="Business-First Mindset"
                description="Design is an investment, not just decoration. I align every pixel with business objectives—whether it’s increasing conversion in e-commerce or reducing operational costs in B2B systems."
            />

            <DetailItem
                title="Function over Form"
                description="I prioritize utility and clarity. While I appreciate aesthetics, I believe that a product’s success is measured by metrics and user adoption, not just visual polish. I build systems that scale."
            />

            <DetailItem
                title='The "Why" Matters'
                description="Before opening Figma, I dive deep into data and user research to ensure we are solving the right problem for the right people."
            />

            <DetailItem
                title="Be human"
                description="Empathy and kindness go a long way. Share our knowledge and take time to understand different perspectives. Build towards a culture of inclusion and respect, and stay true to yourself and to others."
            />
        </div>
    );
}

function Icons() {
    return (
        <div className="relative shrink-0 size-[24px]" data-name="Icons">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="Icons">
                    <path d={svgPaths.p9898200} fill="var(--fill-0, white)" id="Vector" />
                </g>
            </svg>
        </div>
    );
}

function PrimaryButton() {
    return (
        <a href="https://drive.google.com/file/d/1Hrv_KXQMvvL5CNQ79JcvNkAIAgworHlw/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-foreground relative rounded-[9999px] shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity" data-name="Primary Button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-space-2 items-center justify-center pl-space-10 pr-space-3 py-space-2 relative w-full">
                    <p className="font-sans font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-pre">Download my CV</p>
                    <Icons />
                </div>
            </div>
        </a>
    );
}

function BackstoryColumn() {
    return (
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-space-10 items-start min-h-px min-w-[300px] lg:min-w-[320px] relative w-full lg:w-auto" data-name="About me">
            <SectionTitle title="THE BACKSTORY" />

            <div className="max-w-[1280px] min-w-[280px] relative shrink-0 w-full" data-name="Details">
                <div aria-hidden="true" className="absolute border-l border-subtle inset-0 pointer-events-none" />
                <div className="content-stretch flex flex-col gap-space-3 items-start leading-[24px] max-w-[inherit] min-w-[inherit] pl-space-10 pr-0 py-0 relative text-foreground w-full whitespace-pre-wrap">
                    <h3 className="font-sans font-extrabold max-w-[640px] relative shrink-0 text-[20px] w-full">From Marketing & Branding to Product Design</h3>
                    <div className="font-sans font-normal max-w-[640px] relative shrink-0 text-[16px] w-full">
                        <p className="mb-[12px]">{`Before transitioning to Product Design, I spent years in Marketing and Branding. That experience became my "unfair advantage." It wired my brain to think about conversion funnels, customer acquisition, and ROI naturally.`}</p>
                        <p className="mb-[12px]">Today, I leverage that background to build complex operational platforms and high-conversion e-commerce experiences. I thrive on untangling messy workflows and turning them into intuitive solutions that drive growth.</p>
                        <p>Based in Spain, I work globally with teams that value logic, speed, and tangible results.</p>
                    </div>
                </div>
            </div>

            <div className="max-w-[1280px] min-w-[280px] relative shrink-0 w-full" data-name="Details">
                <div aria-hidden="true" className="absolute border-l border-subtle inset-0 pointer-events-none" />
                <div className="content-stretch flex flex-col gap-space-3 items-start max-w-[inherit] min-w-[inherit] pl-space-10 pr-0 py-0 relative text-foreground w-full whitespace-pre-wrap">
                    <h3 className="font-sans font-extrabold leading-[24px] max-w-[640px] relative shrink-0 text-[20px] w-full">Offline, you can find me</h3>
                    <ul className="block font-sans font-normal leading-[0] max-w-[640px] relative shrink-0 text-[16px] w-full">
                        <li className="mb-0 ms-[24px]">
                            <span className="leading-[24px]">{`Studying Spanish & running around Alicante`}</span>
                        </li>
                        <li className="mb-0 ms-[24px]">
                            <span className="leading-[24px]">{`Playing drums & diving into manga`}</span>
                        </li>
                        <li className="ms-[24px]">
                            <span className="leading-[24px]">Seeking the perfect balance in design and life</span>
                        </li>
                    </ul>
                </div>
            </div>

            <PrimaryButton />
        </div>
    );
}

// --- Legacy Sections (Skills & Connect) ---

function SkillColumn({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-[16px] w-full">
            <SectionHeading title={title} />
            <div className="flex flex-col text-body-large font-normal gap-[12px] items-start justify-center leading-[24px] text-[16px] text-foreground w-full">
                {children}
            </div>
        </div>
    );
}

function SkillsSection() {
    return (
        <div className="bg-muted w-full py-space-10 md:py-space-20">
            <Container className="grid grid-cols-1 lg:grid-cols-3 gap-space-10">
                <SkillColumn title="Companies">
                    <a href="https://www.outsetmedical.com/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-muted-foreground decoration-solid underline underline-offset-[3px]">Outset Medical</a>
                    <a href="https://www.paradigm.inc/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-muted-foreground decoration-solid underline underline-offset-[3px]">Deep lens AI (now Paradigm Health)</a>
                </SkillColumn>

                <SkillColumn title="I've worked">
                    <a href="https://rozetka.com.ua/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-muted-foreground decoration-solid underline underline-offset-[3px]">Rozetka UA</a>
                    <a href="https://lemonfrog.ch/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-muted-foreground decoration-solid underline underline-offset-[3px]">Lemonfrog</a>
                </SkillColumn>

                <SkillColumn title="With">
                    <a href="https://www.fareportal.com/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-muted-foreground decoration-solid underline underline-offset-[3px]">Fareportal</a>
                    <a href="#" className="cursor-pointer hover:text-muted-foreground decoration-solid underline underline-offset-[3px]">Business Class</a>
                </SkillColumn>
            </Container>
        </div>
    );
}

function ConnectSection() {
    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText("lex.konovalov@gmail.com");
            toast.success("Email copied to clipboard");
        } catch (err) {
            try {
                const textArea = document.createElement("textarea");
                textArea.value = "lex.konovalov@gmail.com";
                textArea.style.position = "fixed";
                textArea.style.left = "-9999px";
                textArea.style.top = "0";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                const successful = document.execCommand('copy');
                document.body.removeChild(textArea);
                if (successful) {
                    toast.success("Email copied to clipboard");
                } else {
                    toast.error("Failed to copy email");
                }
            } catch (fallbackErr) {
                toast.error("Failed to copy email");
                console.error("Copy failed", fallbackErr);
            }
        }
    };

    return (
        <div className="w-full py-space-10 md:py-space-20">
            <Container className="flex flex-col gap-space-6 max-w-[640px] mx-0">
                <div className="flex flex-col items-start justify-center w-full pl-space-4 md:pl-space-10 border-l border-subtle">
                    <h2 className="text-headline-small tracking-[-0.48px] w-full text-foreground">Ready to make an impact?</h2>
                    <p className="text-body-medium w-full text-foreground">Whether you have a specific role in mind or just want to discuss product strategy, I’m just an email away.</p>
                </div>

                <div className="flex flex-row items-center w-full">
                    <div className="flex gap-[24px] items-center pl-space-4 md:pl-space-10 w-full">
                        {/* Gmail Icon */}
                        <div className="relative shrink-0 size-[44px]">
                            <svg className="block size-full" fill="none" viewBox="0 0 26 20" aria-labelledby="gmail-title">
                                <title id="gmail-title">Gmail</title>
                                <path d={svgConnectPaths.p388dd00} fill="#4285F4" />
                                <path d={svgConnectPaths.p37d65280} fill="#34A853" />
                                <path d={svgConnectPaths.p3cc89380} fill="#FBBC04" />
                                <path d={svgConnectPaths.p3bba0d80} fill="#EA4335" />
                                <path d={svgConnectPaths.p81ac980} fill="#C5221F" />
                            </svg>
                        </div>
                        <div className="flex flex-col font-sans font-normal gap-[4px] items-start text-foreground text-nowrap whitespace-pre">
                            <p className="text-body-small tracking-[0.4px]">Email</p>
                            <div className="flex gap-2 items-center">
                                <a href="mailto:lex.konovalov@gmail.com" className="underline text-body-large underline-offset-[3px]">lex.konovalov@gmail.com</a>
                                <button
                                    onClick={handleCopyEmail}
                                    className="bg-[rgba(0,0,0,0.04)] box-border flex gap-[8px] items-center p-[4px] relative rounded-[40px] shrink-0 hover:bg-[rgba(0,0,0,0.08)] transition-colors cursor-pointer"
                                    aria-label="Copy email address"
                                >
                                    <div className="size-[24px] relative">
                                        <svg className="block size-full" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d={svgConnectPaths.p25bde280} fill="currentColor" fillOpacity="0.88" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center w-full">
                    <div className="flex gap-[24px] items-center pl-space-4 md:pl-space-10 w-full">
                        <div className="relative shrink-0 size-[44px]">
                            {/* LinkedIn Icon */}
                            <svg className="block size-full" fill="none" viewBox="0 0 25 25" aria-labelledby="linkedin-title">
                                <title id="linkedin-title">LinkedIn</title>
                                <path d={svgConnectPaths.p2e4c600} fill="#006699" />
                                <path d={svgConnectPaths.p2d09a100} fill="white" />
                            </svg>
                        </div>
                        <div className="flex flex-col font-sans font-normal gap-[4px] items-start text-foreground text-nowrap whitespace-pre">
                            <p className="text-body-small tracking-[0.4px]">LinkedIn</p>
                            <a href="https://www.linkedin.com/in/ok-design/" className="underline text-body-large underline-offset-[3px]">linkedin.com/in/ok-design</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default function About({ currentPath }: { currentPath?: string }) {
    // We pass currentPath to Header to highlight active link
    return (
        <div className="flex flex-col items-start relative size-full font-sans">
            <Toaster />

            {/* Header with background blobs */}
            <div className="relative shrink-0 w-full overflow-hidden">
                <Header currentPath={currentPath} />
            </div>

            {/* Main Content */}
            <div className="w-full py-space-10 md:py-space-20">
                <Container className="content-start flex flex-wrap gap-space-10 items-start relative size-full">
                    <PhotoColumn />
                    <ApproachColumn />
                    <BackstoryColumn />
                </Container>
            </div>

            <SkillsSection />
            <ConnectSection />
            {/* Footer is handled by MainLayout in Astro */}
        </div>
    );
}

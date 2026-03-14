import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../../../layout/Container";
import { ImageModal } from "../../ui/ImageModal";

interface StorySection3Details2ImagesProps {
    heading: string;
    description?: string | React.ReactNode;
    details1: {
        title?: string;
        content: React.ReactNode;
    };
    details2: {
        title?: string;
        content: React.ReactNode;
    };
    images: {
        src: string;
        alt: string;
    }[];
    beforeAfter?: {
        before: React.ReactNode;
        after: React.ReactNode;
    };
    caption?: React.ReactNode;
}

export function StorySection3Details2Images({
    heading,
    description,
    details1,
    details2,
    images,
    beforeAfter,
    caption,
}: StorySection3Details2ImagesProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="bg-white w-full">
            <Container className="py-[40px] flex flex-col gap-[40px] items-center">
                {/* Heading */}
                <div className="w-full max-w-[1280px] flex flex-col gap-3">
                    <h2 className="text-headline-large text-foreground max-w-[640px] w-full">
                        {heading}
                    </h2>
                    {description && (
                        <div className="text-body-large text-foreground max-w-[640px] w-full">
                            {description}
                        </div>
                    )}
                </div>

                {/* Details Row */}
                <div className="w-full max-w-[1280px] flex flex-wrap gap-[24px] gap-x-[40px] items-end">
                    {/* Details 1 */}
                    <div className="flex-1 min-w-[280px] flex flex-col gap-[12px] items-start">
                        {details1.title && (
                            <h3 className="text-title-large font-extrabold text-foreground w-full max-w-[640px]">
                                {details1.title}
                            </h3>
                        )}
                        <div className="text-body-large text-foreground w-full max-w-[640px] [&_b]:font-bold [&_strong]:font-bold">
                            {details1.content}
                        </div>
                    </div>

                    {/* Details 2 */}
                    <div className="flex-1 min-w-[280px] flex flex-col gap-[12px] items-start">
                        {details2.title && (
                            <h3 className="text-title-large font-extrabold text-foreground w-full max-w-[640px]">
                                {details2.title}
                            </h3>
                        )}
                        <div className="text-body-large text-foreground w-full max-w-[640px] [&_b]:font-bold [&_strong]:font-bold">
                            {details2.content}
                        </div>
                    </div>
                </div>

                {/* Images */}
                <div className="w-full max-w-[1280px] flex flex-wrap gap-[24px] gap-x-[40px] items-start">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            className="flex-1 min-w-[280px] aspect-[400/300] relative cursor-zoom-in group"
                            onClick={() => setSelectedImage(img.src)}
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-10" />
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="absolute inset-0 size-full object-cover"
                                width={400}
                                height={300}
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Before / After */}
                {beforeAfter && (
                    <div className="w-full max-w-[1280px] flex flex-col gap-1 text-body-small text-foreground">
                        <p className="mb-0 max-w-[640px]">
                            <span className="font-bold tracking-[0.4px]">Before:</span>{" "}
                            <span>{beforeAfter.before}</span>
                        </p>
                        <p className="max-w-[640px]">
                            <span className="font-bold tracking-[0.4px]">After:</span>{" "}
                            <span>{beforeAfter.after}</span>
                        </p>
                    </div>
                )}

                {/* Caption */}
                {caption && (
                    <div className="w-full max-w-[1280px] text-center text-body-small text-foreground">
                        {caption}
                    </div>
                )}

                {/* Separator */}
                <div className="w-full max-w-[1280px]">
                    <div className="w-full h-px bg-[rgba(0,0,0,0.12)]" />
                </div>
            </Container>

            <ImageModal
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                imageSrc={selectedImage}
            />
        </div>
    );
}

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../../../layout/Container";
import { ImageModal } from "../../ui/ImageModal";

interface ImageInfo {
    src: string;
    alt: string;
}

interface StorySection2Details4ImagesProps {
    heading: string;
    details1: {
        title: string;
        content: React.ReactNode;
    };
    details2: {
        title: string;
        content: React.ReactNode;
    };
    row1: {
        images: [ImageInfo, ImageInfo];
        caption?: React.ReactNode;
    };
    row2: {
        images: [ImageInfo, ImageInfo];
        caption?: React.ReactNode;
    };
}

export function StorySection2Details4Images({
    heading,
    details1,
    details2,
    row1,
    row2,
}: StorySection2Details4ImagesProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const ImageCard = ({ img }: { img: ImageInfo }) => (
        <motion.div
            className="flex-1 min-w-[280px] aspect-square relative cursor-zoom-in group"
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
                height={400}
                loading="lazy"
            />
        </motion.div>
    );

    return (
        <div className="bg-white w-full">
            <Container className="py-[40px] flex flex-col gap-[40px] items-center">
                {/* Heading */}
                <div className="w-full max-w-[1280px]">
                    <h2 className="text-headline-large text-foreground max-w-[640px] w-full">
                        {heading}
                    </h2>
                </div>

                {/* Details Row */}
                <div className="w-full max-w-[1280px] flex flex-wrap gap-[24px] gap-x-[40px] items-end">
                    {/* Details 1 */}
                    <div className="flex-1 min-w-[280px] flex flex-col gap-[12px] items-start">
                        <h3 className="text-title-large font-extrabold text-foreground w-full max-w-[640px]">
                            {details1.title}
                        </h3>
                        <div className="text-body-large text-foreground w-full max-w-[640px]">
                            {details1.content}
                        </div>
                    </div>

                    {/* Details 2 */}
                    <div className="flex-1 min-w-[280px] flex flex-col gap-[12px] items-start">
                        <h3 className="text-title-large font-extrabold text-foreground w-full max-w-[640px]">
                            {details2.title}
                        </h3>
                        <div className="text-body-large text-foreground w-full max-w-[640px]">
                            {details2.content}
                        </div>
                    </div>
                </div>

                {/* Row 1 Images */}
                <div className="w-full max-w-[1280px] flex flex-wrap gap-[24px] gap-x-[40px] items-start">
                    {row1.images.map((img, index) => (
                        <ImageCard key={`row1-${index}`} img={img} />
                    ))}
                </div>
                {row1.caption && (
                    <div className="w-full max-w-[1280px] text-center text-body-small text-foreground">
                        {row1.caption}
                    </div>
                )}

                {/* Row 2 Images */}
                <div className="w-full max-w-[1280px] flex flex-wrap gap-[24px] gap-x-[40px] items-start">
                    {row2.images.map((img, index) => (
                        <ImageCard key={`row2-${index}`} img={img} />
                    ))}
                </div>
                {row2.caption && (
                    <div className="w-full max-w-[1280px] text-center text-body-small text-foreground">
                        {row2.caption}
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

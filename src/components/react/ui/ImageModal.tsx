import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string | null;
}

export function ImageModal({ isOpen, onClose, imageSrc }: ImageModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!imageSrc) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
                    style={{ isolation: 'isolate' }}
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-white/90 backdrop-blur-sm cursor-zoom-out"
                    />

                    {/* Close Button */}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        onClick={onClose}
                        className="absolute top-6 right-6 z-10 size-[40px] flex items-center justify-center bg-black/5 hover:bg-black/10 rounded-full transition-colors"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </motion.button>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative max-w-full max-h-full flex items-center justify-center z-0"
                    >
                        <img
                            src={imageSrc}
                            alt="Full size preview"
                            className="max-w-full max-h-[85vh] object-contain shadow-2xl"
                        />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

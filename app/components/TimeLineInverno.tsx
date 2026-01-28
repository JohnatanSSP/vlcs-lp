'use client';
import { motion } from "framer-motion";
import { useState } from "react"

type TimelineImage = {
    src: string
    alt?: string
}

interface TimelineProps {
    title?: string
    images: TimelineImage[]
}

export default function TimelineInverno2026({
    title = "Timeline - Inverno 2026",
    images,
}: TimelineProps) {
    const [activeImage, setActiveImage] = useState<string | null>(null)

    return (
        <section className="w-full bg-black py-16 px-4">
            {/* Título */}
            <h2 className="mb-12 text-center text-2xl md:text-3xl font-semibold text-white">
                {title}
            </h2>

            {/* Grid de imagens */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-lg bg-neutral-900"
                    >

                        <img
                            src={image.src}
                            alt={image.alt ?? `Timeline image ${index + 1}`}
                            className="h-full w-full object-cover transition-transform duration-500 
              hover:scale-125 grayscale hover:grayscale-0 cursor-pointer transition duration-500 "
                            onClick={() => setActiveImage(image.src)}

                        />

                        {activeImage === image.src && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-pointer"
                                onClick={() => setActiveImage(null)}
                            >
                                <motion.img
                                    src={activeImage}
                                    initial={{ scale: 0.9, y: 30, opacity: 0 }}
                                    animate={{ scale: 1, y: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    alt={image.alt ?? `Timeline image ${index + 1}`}
                                    className="max-h-[90vh] max-w-[90vw] object-contain animate-imageIn [animation-delay:500ms]"
                                />
                            </motion.div>
                        )}


                    </div>
                ))}
            </div>
        </section >
    )
}

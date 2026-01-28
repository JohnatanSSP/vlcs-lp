'use client';

type TimelineImage = {
    src: string
    alt?: string
    link: string
}

interface TimelineProps {
    title?: string
    images: TimelineImage[]
    link?: string
}

export default function MaisVendidos({
    title = "Mais Vendidos",
    images,
    link,
}: TimelineProps) {
    return (
        <section className="w-full bg-black py-16 px-4">
            {/* Título */}
            <h2 className="mb-12 text-center text-2xl md:text-3xl font-semibold text-white">
                {title}
            </h2>

            {/* Grid de imagens */}
            <div className="mx-auto text-white grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="group overflow-hidden bg-transparent h-80 flex flex-col items-center justify-center"
                    >
                        <a href={image.link}>
                        <img
                            src={image.src}
                            alt={image.alt ?? `Timeline image ${index + 1}`}
                            className="h-70 w-full object-cover cursor-pointer transition-transform duration-700
                                group-hover:scale-105 "
                        />
                        
                        <div className="bg-transparent pt-4 flex justify-center items-center h-6">
                            <p className="pointer-events-none
                                bg-transparent
                                text-white text-sm font-small
                                 translate-y-1
                                transition-all duration-500
                                 group-hover:translate-y-0
                                z-10">{image.alt}</p>
                        </div>
                        </a>

                    </div>
                ))}
            </div>
        </section >
    )
}

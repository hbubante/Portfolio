import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface Props {
    images: string[];
}

export default function ScreenshotGallery({ images }: Props) {
    const [emblaRef, emblaApi] = useEmblaCarousel();

    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;

        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect();

        emblaApi.on("select", onSelect);

        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <div
            className="
                relative
                w-full
                h-full
            "
        >
            <div
                className="
                    overflow-hidden
                    h-full
                "
                ref={emblaRef}
            >
                <div
                    className="
                        flex
                        items-center
                        h-full
                    "
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="
                                flex-[0_0_100%]
                                h-full
                            "
                        >
                            <img
                                src={image}
                                className="
                                    w-full
                                    h-full
                                    object-contain
                                "
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom gradient */}
            <div
                className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    h-20
                    rounded-b-[15px]
                    bg-gradient-to-b
                    from-transparent
                    to-black
                    opacity-50
                    pointer-events-none
                "
            />

            {/* Gallery Dots Navigation */}
            <div
                className="
                    absolute
                    bottom-5
                    left-1/2
                    -translate-x-1/2

                    flex
                    gap-3
                    z-10
                "
            >
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index)}
                        className={`
                            w-2
                            h-2
                            rounded-full
                            transition-all
                            duration-300
                            cursor-pointer

                            ${
                                index === selectedIndex
                                    ? "bg-[#DCBAB5]"
                                    : "bg-[#DCBAB5]/50 hover:bg-[#DCBAB5]/75"
                            }
                        `}
                    />
                ))}
            </div>
        </div>
    );
}
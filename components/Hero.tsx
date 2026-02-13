"use client"

import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { RiArrowDownDoubleLine } from "@remixicon/react"
import Link from "next/link"

// Add more images to this array to include them in the slideshow
const heroImages = [
    '/hero-bg-1.png',
    '/hero-bg-2.png',
]

const Hero = () => {
    const containerRef = useRef(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5])

    // Auto-cycle through images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % heroImages.length
            )
        }, 5000) // Change image every 5 seconds

        return () => clearInterval(interval)
    }, [])

    return (
        <div ref={containerRef} className="w-screen h-[90vh] overflow-hidden bg-[#4D371B] relative">
            <motion.div
                className="w-full h-full absolute z-10"
                style={{ scale }}
            >
                <AnimatePresence mode="sync">
                    <motion.div
                        key={currentImageIndex}
                        initial={{
                            opacity: 0,
                            filter: "blur(20px) brightness(1.1)"
                        }}
                        animate={{
                            opacity: 1,
                            filter: "blur(0px) brightness(1)"
                        }}
                        exit={{
                            opacity: 0,
                            filter: "blur(10px) brightness(0.9)"
                        }}
                        transition={{
                            duration: 1.8,
                            ease: [0.43, 0.13, 0.23, 0.96], // Custom cubic-bezier for smooth, professional feel
                            opacity: { duration: 1.2 },
                            filter: { duration: 1.0 }
                        }}
                        className="w-full h-full absolute will-change-transform"
                    >
                        <Image
                            src={heroImages[currentImageIndex]}
                            alt="Hero Background"
                            width={1920}
                            height={1080}
                            className="w-full h-full object-cover"
                            priority={currentImageIndex === 0}
                        />
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            <div className="relative z-20 w-full h-full flex items-end py-10 justify-center">
                <div className="flex flex-col items-center gap-2">
                    <Link href={'#'} className="bg-background text-ayaoba-brown px-10 py-5 text-xl flex items-center gap-2">
                        Explore
                        <RiArrowDownDoubleLine className="animate-bounce" />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Hero
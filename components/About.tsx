"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const About = () => {
    return (
        <section className="w-full border-y border-black/20 bg-background py-20 md:py-32 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl  font-bold text-ayaoba-brown mb-6">
                            <span className="text-ayaoba-brown">About</span> <span className="font-playfair-display">AyaỌba Aláṣẹ</span>
                        </h2>

                        <div className="space-y-6 text-gray-700 leading-relaxed">
                            <p className="text-lg md:text-xl">
                                AyaỌba Aláṣẹ is a contemporary African fashion brand redefining modern femininity through modest elegance.
                            </p>

                            <p>
                                We believe that fashion is more than just clothing, it's a form of self-expression, a celebration of culture, and a testament to craftsmanship. Each piece in our collection
                                is thoughtfully designed to embody the perfect balance between traditional African aesthetics
                                and contemporary style.
                            </p>

                            <p>
                                Our commitment to quality, sustainability, and ethical production ensures that every
                                garment not only looks beautiful but also tells a story of heritage, innovation, and
                                empowerment. We create for the modern woman who values elegance, authenticity, and
                                timeless design.
                            </p>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-8 bg-ayaoba-brown text-background px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
                        >
                            Learn More
                        </motion.button>
                    </motion.div>

                    {/* Right - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-3/4 overflow-hidden rounded-lg">
                            <Image
                                src="/hero-bg-1.png"
                                alt="AYAOBAALASE Fashion"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>

                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ayaoba-brown opacity-20 rounded-lg -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About

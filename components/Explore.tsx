"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const categories = [
    { name: "Women's Handbags", image: "/hero-bg-1.png" },
    { name: "Women's Wallets and Small Leather Goods", image: "/hero-bg-1.png" },
    { name: "Women's Accessories", image: "/hero-bg-1.png" },
    { name: "Beauty", image: "/hero-bg-1.png" },
    { name: "Men's Bags", image: "/hero-bg-1.png" },
    { name: "Men's Wallets and Small Leather Goods", image: "test-img.png" },
    { name: "Men's Accessories", image: "/hero-bg-1.png" },
    { name: "Fragrances", image: "/hero-bg-1.png" },
]

const Explore = () => {
    return (
        <section className="w-full py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-[1400px] mx-auto">
                {/* Heading on the left */}
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-4xl lg:text-4xl font-playfair-display mb-12 text-left"
                >
                    Explore a Selection of the Maison's Creations
                </motion.h2>

                {/* Grid of categories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: [0.43, 0.13, 0.23, 0.96]
                            }}
                            className="group cursor-pointer relative"
                        >
                            {/* Image container */}
                            <div className="relative w-full aspect-3/4 overflow-hidden bg-gray-100 mb-4">
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    unoptimized
                                />
                            </div>

                            <div className="aspect-3/4 bg-ayaoba-brown/20 opacity-0 group-hover:opacity-100 absolute top-0 left-0 right-0 bottom-0 flex items-end p-6 justify-center">
                                <button className="bg-ayaoba-brown text-white px-6 py-2 rounded-full font-geologica">
                                    Shop Now
                                </button>
                            </div>

                            {/* Category name */}
                            <h3 className="text-center text-sm md:text-base font-geologica transition-colors duration-300 text-ayaoba-brown group-hover:text-black">
                                {category.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Explore

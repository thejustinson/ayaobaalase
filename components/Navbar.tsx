"use client"

import { RiMenuLine, RiShoppingCartLine, RiUserLine, RiCloseLine } from "@remixicon/react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LogoSVG from "./SVGs/logo"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [showBrownBg, setShowBrownBg] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Show brown background when scrolled OR when hovered
    const shouldShowBrownBg = isScrolled || showBrownBg

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-6 md:py-8 px-6 md:px-16 transition-colors duration-300 ${shouldShowBrownBg ? 'bg-background text-ayaoba-brown' : 'bg-transparent text-background'
                }`}
            onHoverStart={() => setShowBrownBg(true)}
            onHoverEnd={() => setShowBrownBg(false)}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {/* Left Section with Logo */}
            <motion.div
                className="flex items-center gap-3 md:gap-5 z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
            >
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden"
                >
                    {isMobileMenuOpen ? (
                        <RiCloseLine
                            size={24}
                            className={shouldShowBrownBg ? 'text-ayaoba-brown' : 'text-background'}
                        />
                    ) : (
                        <RiMenuLine
                            size={24}
                            className={shouldShowBrownBg ? 'text-ayaoba-brown' : 'text-background'}
                        />
                    )}
                </button>

                <LogoSVG className="w-[120px] md:w-[200px] h-auto" fill={shouldShowBrownBg ? '#A05C01' : '#FFF5DF'}/>
            </motion.div>

            {/* Right Section - Desktop */}
            <div className="hidden md:flex items-center gap-5 z-10">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    <span className={`cursor-pointer ${shouldShowBrownBg ? 'text-ayaoba-brown' : 'text-background'}`}>
                        Call Us
                    </span>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className="cursor-pointer"
                >
                    <RiShoppingCartLine
                        size={24}
                        className={shouldShowBrownBg ? 'text-ayaoba-brown' : 'text-background'}
                    />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    transition={{ duration: 0.2 }}
                    className="cursor-pointer"
                >
                    <RiUserLine
                        size={24}
                        className={shouldShowBrownBg ? 'text-ayaoba-brown' : 'text-background'}
                    />
                </motion.div>
            </div>

            {/* Right Section - Mobile Icons */}
            <div className="flex md:hidden items-center gap-3 z-10">
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="cursor-pointer"
                >
                    <RiShoppingCartLine
                        size={20}
                        className={shouldShowBrownBg ? 'text-ayaoba-brown' : 'text-background'}
                    />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="cursor-pointer"
                >
                    <RiUserLine
                        size={20}
                        className={shouldShowBrownBg ? 'text-ayaoba-brown' : 'text-background'}
                    />
                </motion.div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="absolute top-full left-0 right-0 bg-background md:hidden shadow-lg"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col gap-4 p-6 text-ayaoba-brown">
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="cursor-pointer py-2"
                            >
                                Menu
                            </motion.div>
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="cursor-pointer py-2"
                            >
                                Call Us
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar
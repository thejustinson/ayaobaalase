"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import { RiUserLine, RiLockLine, RiShoppingBag3Line } from "@remixicon/react"

const AccountPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar forceVisible />

            <div className="pt-32 pb-20 px-6 md:px-16">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-ayaoba-brown bg-opacity-10">
                            <RiUserLine size={48} className="text-ayaoba-brown" />
                        </div>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-playfair-display font-bold text-ayaoba-brown mb-6"
                    >
                        Coming Soon
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto"
                    >
                        We're working on creating an amazing account experience for you.
                        Soon you'll be able to manage your profile, track orders, and access exclusive features.
                    </motion.p>

                    {/* Feature Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
                    >
                        <div className="bg-white p-6 border border-gray-100">
                            <div className="w-12 h-12 rounded-full bg-ayaoba-brown bg-opacity-10 flex items-center justify-center mx-auto mb-4">
                                <RiUserLine size={24} className="text-white" />
                            </div>
                            <h3 className="font-playfair-display font-bold text-xl mb-2">Profile Management</h3>
                            <p className="text-gray-600 text-sm">
                                Manage your personal information and preferences
                            </p>
                        </div>

                        <div className="bg-white p-6 border border-gray-100">
                            <div className="w-12 h-12 rounded-full bg-ayaoba-brown bg-opacity-10 flex items-center justify-center mx-auto mb-4">
                                <RiShoppingBag3Line size={24} className="text-white" />
                            </div>
                            <h3 className="font-playfair-display font-bold text-xl mb-2">Order Tracking</h3>
                            <p className="text-gray-600 text-sm">
                                Track your orders and view purchase history
                            </p>
                        </div>

                        <div className="bg-white p-6 border border-gray-100">
                            <div className="w-12 h-12 rounded-full bg-ayaoba-brown bg-opacity-10 flex items-center justify-center mx-auto mb-4">
                                <RiLockLine size={24} className="text-white" />
                            </div>
                            <h3 className="font-playfair-display font-bold text-xl mb-2">Secure Access</h3>
                            <p className="text-gray-600 text-sm">
                                Your data is protected with industry-standard security
                            </p>
                        </div>
                    </motion.div>

                    {/* Back to Home Link */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-12"
                    >
                        <a
                            href="/"
                            className="inline-block text-ayaoba-brown hover:underline transition-all"
                        >
                            ← Back to Home
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default AccountPage

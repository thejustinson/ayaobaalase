import Link from 'next/link'
import { RiFacebookFill, RiInstagramLine, RiTwitterXLine, RiTiktokFill, RiMapPinLine, RiPhoneLine, RiMailLine } from '@remixicon/react'
import LogoSVG from './SVGs/logo'

const Footer = () => {
    return (
        <footer className='w-full bg-ayaoba-brown text-background'>
            {/* Main Footer Content */}
            <div className='max-w-7xl mx-auto px-6 md:px-16 py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
                    {/* About Section */}
                    <div>
                        <LogoSVG className="w-32 h-auto mb-4" fill="#FFF5DF" />
                        <p className='text-sm leading-relaxed opacity-90 mb-4'>
                            AYAOBAALASE is a contemporary African fashion brand redefining modern femininity through modest elegance.
                        </p>
                    </div>

                    {/* Shop Section */}
                    <div>
                        <h3 className='text-xl font-bold mb-6'>Shop</h3>
                        <ul className='space-y-3 text-sm'>
                            <li>
                                <Link href="#" className='hover:underline opacity-90 hover:opacity-100 transition-opacity'>
                                    Women's Collection
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='hover:underline opacity-90 hover:opacity-100 transition-opacity'>
                                    Men's Collection
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='hover:underline opacity-90 hover:opacity-100 transition-opacity'>
                                    Accessories
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='hover:underline opacity-90 hover:opacity-100 transition-opacity'>
                                    New Arrivals
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='hover:underline opacity-90 hover:opacity-100 transition-opacity'>
                                    Sale
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service Section */}
                    <div>
                        <h3 className='text-xl font-bold mb-6'>Customer Service</h3>
                        <ul className='space-y-3 text-sm'>
                            <li>
                                <Link href="#" className='hover:underline opacity-90 hover:opacity-100 transition-opacity'>
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='hover:underline opacity-90 hover:opacity-100 transition-opacity'>
                                    Refund Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='hover:underline opacity-90 hover:opacity-100 transition-opacity'>
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='hover:underline opacity-90 hover:opacity-100 transition-opacity'>
                                    Shipping Information
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='hover:underline opacity-90 hover:opacity-100 transition-opacity'>
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className='text-xl font-bold mb-6'>Contact Us</h3>
                        <ul className='space-y-4 text-sm'>
                            <li className='flex items-start gap-3'>
                                <RiMapPinLine size={20} className='shrink-0 mt-0.5' />
                                <span className='opacity-90'>
                                    Lagos, Nigeria
                                </span>
                            </li>
                            <li className='flex items-center gap-3'>
                                <RiPhoneLine size={20} className='shrink-0' />
                                <a href="tel:+2348000000000" className='opacity-90 hover:opacity-100 hover:underline transition-opacity'>
                                    +234 800 000 0000
                                </a>
                            </li>
                            <li className='flex items-center gap-3'>
                                <RiMailLine size={20} className='shrink-0' />
                                <a href="mailto:info@ayaobaalase.com" className='opacity-90 hover:opacity-100 hover:underline transition-opacity'>
                                    info@ayaobaalase.com
                                </a>
                            </li>
                        </ul>

                        {/* Social Media */}
                        <div className='mt-6'>
                            <p className='text-sm font-medium mb-3'>Follow Us</p>
                            <div className='flex gap-4'>
                                <a href="#" className='hover:scale-110 transition-transform' aria-label="Facebook">
                                    <RiFacebookFill size={24} />
                                </a>
                                <a href="#" className='hover:scale-110 transition-transform' aria-label="Instagram">
                                    <RiInstagramLine size={24} />
                                </a>
                                <a href="#" className='hover:scale-110 transition-transform' aria-label="Twitter">
                                    <RiTwitterXLine size={24} />
                                </a>
                                <a href="#" className='hover:scale-110 transition-transform' aria-label="TikTok">
                                    <RiTiktokFill size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className='border-t border-black/20'>
                <div className='max-w-7xl mx-auto px-6 md:px-16 py-6'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90'>
                        <p>© 2026 AYAOBAALASE. All rights reserved.</p>
                        {/* <p className='font-playfair-display italic'>Crafted with excellence</p> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
import React from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer  className='bg-gray-200 text-gray-700 px-6 py-5 pt-10'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>

                {/* Logo & Social */}
                <div>
                    <div>
                              <Image src="/newboltcarelogo.png" alt="Logo" width={200} height={150} />
                            </div>
                            <p className='mb-4 text-base'>From Concept to Creation, We Design It All.
Ishwari Graphics – Your Vision, Our Design.</p>
                    
                    <p className='mb-4 text-xl font-semibold'>Connect with us</p>
                    <div className='flex space-x-4'>
                        <Link href='https://www.facebook.com/share/16qJpfpyTx/' target='_blank'>
                            <FaFacebookF className='text-blue-600 hover:text-blue-800' size={24} />
                        </Link>
                        <Link href='https://wa.me/9175863046' target='_blank'>
                            <FaWhatsapp className='text-green-600 hover:text-green-800' size={24} />
                        </Link>
                        <Link href='https://www.instagram.com/ishwari_graphics/' target='_blank'>
                            <FaInstagram className='text-pink-500 hover:text-pink-700' size={24} />
                        </Link>
                    </div>
                </div>

                {/* Important Links */}
                <div>
                    <h2 className='text-2xl font-semibold mb-4'>Important Links</h2>
                    <ul className='space-y-2 text-lg'>
                        <li><Link href='/' className='hover:text-black text-base'>Home</Link></li>
                        <li><Link href='/aboutus' className='hover:text-black text-base'>About Us</Link></li>
                        <li><Link href='/services/graphic-design' className='hover:text-black text-base'>Services</Link></li>
                        <li><Link href='/ourwork' className='hover:text-black text-base'>Our Work</Link></li>
                        <li><Link href='/contactus' className='hover:text-black text-base'>Contact Us</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className='text-2xl font-semibold mb-4'>Contact Us</h2>
                    <ul className='space-y-3  text-base'>
                        <li className='flex items-center gap-3'>
                            <FiPhone size={20} /> <span>9175863046</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <FiMail size={20} /> <span>ishwarigraphics2015@gmail.com</span>
                        </li>


                        <li className="flex items-start gap-4">
  <div className="pt-1">
    <FiMapPin size={24} className="text-themeColor" />
  </div>
  <span className='text-justify'>
  Jakhotiya Complex Post Office Road, Mangrulpir, Maharashtra 444403
  </span>
</li>

                    </ul>
                </div>

            </div>

            {/* Bottom line */}
           
            <div className='text-center text-base text-gray-700 mt-10 border-t pt-4'>
  Copyright © {new Date().getFullYear()}. All rights reserved by Ishwari Graphics | 
  Design & Developed by  
  <a
    href="https://wa.me/918806112331"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span></span>   ARP Digital Solutions
  </a>.
</div>

        </footer>
    )
}

export default Footer

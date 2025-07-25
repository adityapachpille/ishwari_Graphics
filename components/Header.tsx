'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSubOpen, setMobileSubOpen] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

  const submenuRef = useRef<HTMLDivElement>(null)

  // Close desktop submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
        setIsSubMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <div>
          <Image src="/boltcareblacklogo.png" alt="Logo" width={180} height={120} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
          <a href="/aboutus" className="text-gray-700 hover:text-blue-600 font-medium">About Us</a>

          {/* Desktop Dropdown */}
          <div className="relative" ref={submenuRef}>
            <button
              onClick={() => setIsSubMenuOpen(prev => !prev)}
              className="flex items-center text-gray-700 hover:text-blue-600 font-medium focus:outline-none"
            >
              Services
              <ChevronDown size={16} className={`ml-1 transition-transform ${isSubMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            {isSubMenuOpen && (
              <div className="absolute left-0 mt-2 bg-white border rounded-md shadow-lg w-60 z-50">
                <a href="/services/graphic-design" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Graphic Design</a>
                <a href="/services/political-design" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Political Design</a>
                <a href="/services/printing" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Printing Services</a>
                <a href="/services/wedding-cards" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Wedding Card Design</a>
                <a href="/services/other" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Other Custom Services</a>
              </div>
            )}
          </div>

          <a href="/ourwork" className="text-gray-700 hover:text-blue-600 font-medium">Our Work</a>
          <a href="/contactus" className="text-gray-700 hover:text-blue-600 font-medium">Contact Us</a>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-gray-700">
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-4 pt-4 pb-6 shadow space-y-3">
          <a href="/" className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="/aboutus" className="block text-gray-700 hover:text-blue-600">About Us</a>

          {/* Mobile Services Toggle */}
          <div>
            <button
              onClick={() => setMobileSubOpen(!mobileSubOpen)}
              className="w-full flex justify-between items-center text-gray-700 hover:text-blue-600 font-medium"
            >
              Services
              <ChevronDown className={`transition-transform ${mobileSubOpen ? 'rotate-180' : ''}`} size={18} />
            </button>
            {mobileSubOpen && (
              <div className="mt-2 pl-4 space-y-2">
                <a href="/services/graphic-design" className="block text-gray-700 hover:text-blue-600">Graphic Design</a>
                <a href="/services/political-design" className="block text-gray-700 hover:text-blue-600">Political Design</a>
                <a href="/services/printing" className="block text-gray-700 hover:text-blue-600">Printing Services</a>
                <a href="/services/wedding-cards" className="block text-gray-700 hover:text-blue-600">Wedding Card Design</a>
                <a href="/services/other" className="block text-gray-700 hover:text-blue-600">Other Custom Services</a>
              </div>
            )}
          </div>

          <a href="/our-work" className="block text-gray-700 hover:text-blue-600">Our Work</a>
          <a href="/contactus" className="block text-gray-700 hover:text-blue-600">Contact Us</a>
        </div>
      )}
    </header>
  )
}

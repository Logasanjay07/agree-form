import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLeaf } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { FiMenu, FiPhone, FiX } from 'react-icons/fi'
import logo from '../assets/logo-cropped.png'

const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about-farm' },
  { label: 'Products', href: '/#products' },
  { label: 'Farm Land', href: '/#our-farm' },
  { label: 'Contact', href: '/#contact' },
]

export default function MobileNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="mobile-navbar sticky inset-x-0 top-0 z-50 bg-white shadow-[0_8px_28px_rgba(21,78,32,0.08)]"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" onClick={() => setOpen(false)} className="flex min-w-0 items-center">
            <img src={logo} alt="Sanjay Organic Agriculture" className="h-16 w-auto max-w-[220px] object-contain sm:h-20 sm:max-w-[280px]" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="rounded-full px-4 py-2 text-sm font-bold text-[#0F172A] transition hover:bg-[#EAF7EC] hover:text-[#0B7A33]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="tel:+916381516260" className="inline-flex items-center gap-2 rounded-full bg-[#EAF7EC] px-4 py-2 text-sm font-extrabold text-[#0B7A33]">
              <FiPhone />
              6381516260
            </a>
            <a href="/#products" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0B7A33] to-[#4CAF50] px-5 py-2.5 text-sm font-extrabold text-white shadow-[0_12px_26px_rgba(11,122,51,0.22)]">
              <FaLeaf />
              Order Fresh
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-[#EAF7EC] text-2xl text-[#0B7A33] shadow-[0_10px_24px_rgba(11,122,51,0.08)] lg:hidden"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {open && (
          <nav className="mt-4 grid gap-2 border-t border-[#E1ECE0] pt-4 lg:hidden">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-extrabold text-[#0F172A] hover:bg-[#EAF7EC]">
                {item.label}
              </a>
            ))}
            <a href="tel:+916381516260" className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0B7A33] to-[#4CAF50] px-4 py-3 text-sm font-extrabold text-white">
              <FiPhone />
              Call Farm
            </a>
          </nav>
        )}
      </div>
    </motion.header>
  )
}





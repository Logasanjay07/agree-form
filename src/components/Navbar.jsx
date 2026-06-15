import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaLeaf, FaWhatsapp } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { FiMail, FiMenu, FiPhone, FiX } from 'react-icons/fi'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Farm', path: '/#about-farm' },
  { label: 'Our Farm', path: '/#our-farm' },
  { label: 'Products', path: '/#products' },
  { label: 'Gallery', path: '/#gallery' },
  { label: 'Contact', path: '/#contact' },
]

const promises = [
  '100% Organic Products',
  'Chemical Free',
  'Sustainably Farmed',
  'Farm Fresh Delivered',
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-[0_8px_28px_rgba(21,78,32,0.08)]">
      <div className="hidden bg-[#007A37] text-white lg:block">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-xs font-semibold">
          <div className="flex items-center gap-7">
            {promises.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <FaLeaf className="text-[#BCE88A]" />
                {item}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <span>Follow us:</span>
            <FaFacebookF />
            <FaInstagram />
            <FaWhatsapp />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-3 lg:py-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#007A37] text-lg font-black text-white lg:h-12 lg:w-12">
              SF
            </div>
            <div className="min-w-0">
              <p className="truncate text-base font-black text-[#007A37] lg:text-xl">Sanjay's FoodCourt</p>
              <p className="truncate text-[10px] font-semibold uppercase tracking-[0.28em] text-[#5FB22E]">
                Organic Agriculture
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              item.path.startsWith('/#') ? (
                <a key={item.label} href={item.path} className="rounded-full px-4 py-2 text-sm font-semibold text-[#101B15] transition hover:bg-[#F0F8ED]">
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${pathname === item.path ? 'bg-[#007A37] text-white shadow-[0_10px_24px_rgba(0,122,55,0.22)]' : 'text-[#101B15] hover:bg-[#F0F8ED]'}`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          <div className="hidden items-center gap-5 xl:flex">
            <a href="tel:+916381516260" className="flex items-center gap-2 whitespace-nowrap text-sm font-bold text-[#101B15]">
              <FiPhone className="text-xl text-[#5FB22E]" />
              <span>63815 16260</span>
            </a>
            <a href="mailto:logasanjay06@gmail.com" className="flex items-center gap-2 whitespace-nowrap text-sm font-bold text-[#101B15]">
              <FiMail className="text-xl text-[#5FB22E]" />
              <span>logasanjay06@gmail.com</span>
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F0F8ED] text-xl text-[#007A37] lg:hidden"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {open && (
          <nav className="mt-5 grid gap-2 border-t border-[#DDECDD] pt-5 lg:hidden">
            {navItems.map((item) => (
              item.path.startsWith('/#') ? (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-bold text-[#101B15] transition hover:bg-[#F0F8ED]"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-bold transition ${pathname === item.path ? 'bg-[#007A37] text-white' : 'text-[#101B15] hover:bg-[#F0F8ED]'}`}
                >
                  {item.label}
                </Link>
              )
            ))}
            <div className="mt-2 grid gap-3 rounded-2xl bg-[#F0F8ED] p-4 text-sm text-[#101B15] sm:grid-cols-2">
              <div className="flex items-center gap-2"><FiPhone /> 6381516260</div>
              <div className="flex items-center gap-2 break-all"><FiMail /> logasanjay06@gmail.com</div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

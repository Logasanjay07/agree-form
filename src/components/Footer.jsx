import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About Farm', href: '/about' },
  { label: 'Our Farm', href: '/#our-farm' },
  { label: 'Products', href: '/#products' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contact', href: '/#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0D3312] text-[#E7F9EA]">
      <div className="container mx-auto grid gap-10 px-4 py-10 sm:py-14 lg:grid-cols-[1.1fr_0.9fr_0.7fr]">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4CAF50] to-[#1B5E20] font-black text-white">
              SF
            </div>
            <div>
              <div className="text-2xl font-black">Sanjay's FoodCourt</div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#BFE7B0]">
                Organic Agriculture
              </div>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-[#D6F0D3]">
            A premium organic agriculture brand committed to growing healthy,
            chemical-free food from our farm to your family.
          </p>

          <div className="mt-6 flex items-center gap-3 text-xl">
            <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-3 transition hover:bg-white/20">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-3 transition hover:bg-white/20">
              <FaInstagram />
            </a>
            <a href="#" aria-label="WhatsApp" className="rounded-full bg-white/10 p-3 transition hover:bg-white/20">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-[#BFE7B0]">Contact</h3>
          <div className="mt-5 space-y-4 text-sm text-[#D6F0D3]">
            <a href="https://maps.google.com/?q=52B2%2F6%20North%20Street%2C%20Rajapalayam" className="flex gap-3 transition hover:text-white">
              <FiMapPin className="mt-1 shrink-0 text-[#FFC107]" />
              <span>52B2/6 North Street, Rajapalayam</span>
            </a>
            <a href="tel:+916381516260" className="flex gap-3 transition hover:text-white">
              <FiPhone className="mt-1 shrink-0 text-[#FFC107]" />
              <span>6381516260</span>
            </a>
            <a href="mailto:logasanjay06@gmail.com" className="flex gap-3 break-all transition hover:text-white">
              <FiMail className="mt-1 shrink-0 text-[#FFC107]" />
              <span>logasanjay06@gmail.com</span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-[#BFE7B0]">Explore</h3>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-[#D6F0D3] sm:grid-cols-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 px-4 py-5 text-center text-sm text-[#C9E5C3]">
        © {new Date().getFullYear()} Sanjay's FoodCourt — All rights reserved.
      </div>
    </footer>
  )
}

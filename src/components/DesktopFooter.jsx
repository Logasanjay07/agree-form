import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'

const links = [
  { label: 'Home', href: '/#home' },
  { label: 'About Farm', href: '/#about-farm' },
  { label: 'Products', href: '/#products' },
  { label: 'Our 28 Acres', href: '/#our-farm' },
  { label: 'Contact', href: '/#contact' },
]

const socials = [
  { label: 'Facebook', href: '#', icon: <FaFacebookF /> },
  { label: 'Instagram', href: '#', icon: <FaInstagram /> },
  { label: 'WhatsApp', href: 'https://wa.me/916381516260', icon: <FaWhatsapp /> },
]

export default function DesktopFooter() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(135deg,#062B14_0%,#0D3312_52%,#005C2B_100%)] px-4 py-12 text-[#E7F9EA] sm:px-6 lg:px-10">
      <div className="relative mx-auto max-w-[1500px]">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.75fr_0.75fr]">
          <div className="max-w-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#007A37] font-['Poppins'] text-2xl font-extrabold text-white shadow-[0_14px_30px_rgba(0,0,0,0.18)]">
                SF
              </div>
              <div>
                <div className="font-['Poppins'] text-3xl font-extrabold leading-tight text-white">Sanjay's FoodCourt</div>
                <div className="mt-1 text-xs font-extrabold uppercase tracking-[0.32em] text-[#BFE7B0]">Organic Agriculture</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#D6F0D3]">
              Premium organic agriculture brand committed to growing healthy, chemical-free food from our farm to your family.
            </p>
          </div>

          <div>
            <h3 className="font-['Poppins'] text-xl font-extrabold text-[#BFE7B0]">Quick Links</h3>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-[#D6F0D3]">
              {links.map((link) => (
                <a key={link.label} href={link.href} className="group flex items-center justify-between rounded-2xl py-1 transition hover:text-white">
                  {link.label}
                  <FiArrowRight className="text-[#BFE7B0] opacity-70 transition group-hover:translate-x-1 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-['Poppins'] text-xl font-extrabold text-[#BFE7B0]">Social Media</h3>
            <div className="mt-5 grid gap-3">
              {socials.map((social) => (
                <a key={social.label} href={social.href} className="flex items-center gap-3 rounded-2xl bg-white/8 px-4 py-3 text-sm font-bold text-[#D6F0D3] transition hover:bg-white/12 hover:text-white">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg text-white">
                    {social.icon}
                  </span>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm font-semibold text-[#C9E5C3] sm:flex-row sm:items-center sm:justify-between">
          <span>© Sanjay's FoodCourt. All Rights Reserved.</span>
          <span>Made with Love for Nature</span>
        </div>
      </div>
    </footer>
  )
}

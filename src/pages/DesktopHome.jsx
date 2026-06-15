import React from 'react'
import { FaEnvelope, FaLeaf, FaRecycle, FaSeedling, FaShippingFast, FaWhatsapp } from 'react-icons/fa'
import { FiArrowRight, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import heroImage from '../assets/hero-drone.jpg'
import cornField from '../assets/corn-field.jpg'
import tomatoFarm from '../assets/tomato-farm.jpg'
import vegetablesImg from '../assets/vegitables.avif'
import paddyField from '../assets/paddy-field.jpg'
import fishPond from '../assets/fish forming.jpg'
import chickenFarm from '../assets/native chicken form.jpg'
import goatFarm from '../assets/goat form.webp'
import earthFarm from '../assets/earthwarm form.jpg'
import chilliImg from '../assets/chilli image.jpg'
import mangoImg from '../assets/mango image.jpg'
import newOnionImg from '../assets/onion img.jpg'
import newRiceImg from '../assets/rice image.jpg'
import aboutFarmImg from '../assets/About form.png'

export default function DesktopHome() {
  const processCards = [
    { title: 'Organic Compost', text: 'Rich in nutrients for healthy growth', img: earthFarm, icon: <FaRecycle /> },
    { title: 'Nutrient Rich Soil', text: 'Naturally enriched, perfect for crops', img: paddyField, icon: <FaSeedling /> },
    { title: 'Healthy Crops', text: 'Grown with care, pure and safe', img: vegetablesImg, icon: <FaLeaf /> },
    { title: 'Fresh Produce', text: 'Farm fresh and full of nutrients', img: tomatoFarm, icon: <FaShippingFast /> },
    { title: 'Sustainable Environment', text: 'Eco-friendly farming for tomorrow', img: heroImage, icon: <FaRecycle /> },
  ]

  const farmZones = [
    { title: '5 Acres Corn', size: '5 Acres', img: cornField },
    { title: '5 Acres Vegetables', size: '5 Acres', img: vegetablesImg },
    { title: '5 Acres Paddy', size: '5 Acres', img: paddyField },
    { title: '5 Acres Fish Farming', size: '5 Acres', img: fishPond },
    { title: '2.5 Acres Native Chicken', size: '2.5 Acres', img: chickenFarm },
    { title: '2.5 Acres Goat Farming', size: '2.5 Acres', img: goatFarm },
    { title: 'Earthwarm Form', size: '3 Acres', img: earthFarm },
  ]

  const products = [
    { label: 'Fresh Corn', text: 'Sweet & Natural', img: cornField },
    { label: 'Tomato', text: 'Juicy & Healthy', img: tomatoFarm },
    { label: 'Onion', text: 'Farm Fresh', img: newOnionImg },
    { label: 'Chilli', text: 'Hot & Spicy', img: chilliImg },
    { label: 'Organic Rice', text: 'Pure & Natural', img: newRiceImg },
    { label: 'Fresh Fish', text: 'Catch of the Day', img: fishPond },
    { label: 'Country Chicken', text: 'Natural & Healthy', img: chickenFarm },
    { label: 'Goat Meat', text: 'Tender & Fresh', img: goatFarm },
    { label: 'Mango', text: 'Sweet & Organic', img: mangoImg },
  ]

  const benefits = [
    { title: '100% Organic', text: 'No chemicals, only organic', icon: <FaLeaf /> },
    { title: 'Farm Fresh', text: 'Direct from our farm', icon: <FaSeedling /> },
    { title: 'Healthy & Safe', text: 'Good for you and your family', icon: <FaLeaf /> },
    { title: 'Sustainable Farming', text: 'Better for nature, better future', icon: <FaRecycle /> },
  ]

  const cycleCards = [
    { title: '28 Acres Integrated Farmland', text: 'Producing vegetables, rice, fish, poultry, goats, and vermicompost.', icon: <FaSeedling /> },
    { title: 'Organic Manure for Soil Health', text: 'Cow and livestock waste is converted into organic manure for fields.', icon: <FaLeaf /> },
    { title: 'Natural Feed for Animals', text: 'Vegetable waste is reused as natural feed for animals and poultry.', icon: <FaLeaf /> },
    { title: 'Fish Farming Support', text: 'Chicken waste supports fish farming in our natural ponds.', icon: <FaRecycle /> },
    { title: 'Water Recycling for Irrigation', text: 'Treated fish tank water returns to crops, rice fields, and vegetables.', icon: <FaShippingFast /> },
    { title: 'Vermicompost Enrichment', text: 'Earthworm farming produces compost that enriches the entire farm.', icon: <FaRecycle /> },
  ]

  return (
    <div className="min-h-screen bg-[#F7FBF5] text-[#13231A]">
      <section className="px-4 pb-5 pt-3 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1820px] overflow-hidden rounded-[28px] border border-[#DDECDD] bg-[#F6FBF1] shadow-[0_18px_60px_rgba(20,72,28,0.10)]">
          <div className="grid gap-6 bg-[radial-gradient(circle_at_left,_rgba(91,171,48,0.20),transparent_28%),radial-gradient(circle_at_right,_rgba(91,171,48,0.16),transparent_25%)] p-5 sm:p-7 lg:grid-cols-[0.9fr_1.35fr] lg:p-8">
            <div className="flex flex-col justify-center">
              <div className="mb-3 flex items-center gap-2 text-xl font-semibold italic text-[#0B6731]">
                <FaLeaf className="text-[#64B531]" />
                <span>From Our Farm</span>
              </div>
              <h1 className="max-w-xl text-3xl font-black leading-tight text-[#086130] sm:text-4xl lg:text-5xl">
                Pure. Natural. Organic.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#24352A] sm:text-base">
                Healthy soil, healthy food, healthy life. Experience the goodness of nature with our farm fresh products.
              </p>
              <a href="#products" className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#007A37] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_28px_rgba(0,122,55,0.24)] sm:w-fit">
                <FaLeaf />
                Explore Our Products
                <FiArrowRight />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {processCards.map((card) => (
                <article key={card.title} className="relative rounded-3xl border border-[#E5EFE3] bg-white p-4 text-center shadow-[0_14px_35px_rgba(25,74,31,0.10)]">
                  <div className="absolute left-1/2 top-3 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-[#5FB22E] text-xl text-white shadow-lg">
                    {card.icon}
                  </div>
                  <img src={card.img} alt={card.title} className="mx-auto mt-9 h-20 w-full rounded-2xl object-cover" />
                  <h3 className="mt-3 text-sm font-black text-[#101B15]">{card.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#6A746C]">{card.text}</p>
                  <span className="mx-auto mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#5FB22E] text-white">
                    <FiArrowRight />
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about-farm" className="scroll-mt-32 px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="overflow-hidden rounded-[2rem] border border-[#E4EEE1] bg-white shadow-[0_22px_65px_rgba(16,62,24,0.12)]">
            <div className="grid lg:grid-cols-2">
              <div className="relative flex items-center justify-center bg-[#FFFDF7] p-4 sm:p-6 lg:min-h-[720px]">
                <div className="absolute left-0 top-0 h-24 w-24 rounded-br-[4rem] bg-[#DFF1D2] opacity-70"></div>
                <div className="absolute bottom-0 left-0 h-28 w-36 rounded-tr-[5rem] bg-[#DFF1D2] opacity-70"></div>
                <div className="pointer-events-none absolute left-3 top-3 z-10 text-[#8FCB6B]/45">
                  <FaLeaf className="h-14 w-14 rotate-45 sm:h-20 sm:w-20" />
                  <FaLeaf className="-mt-8 ml-10 h-10 w-10 rotate-12 sm:h-14 sm:w-14" />
                  <FaLeaf className="-mt-3 ml-1 h-8 w-8 rotate-90 sm:h-11 sm:w-11" />
                </div>
                <img
                  src={aboutFarmImg}
                  alt="Sustainable farming cycle"
                  className="relative z-10 h-full max-h-[680px] w-full object-contain"
                />
              </div>

              <div className="relative bg-white p-6 sm:p-8 lg:p-10">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-[#F1F8EC]"></div>
                <div className="pointer-events-none absolute right-3 top-3 z-10 text-[#8FCB6B]/45">
                  <FaLeaf className="ml-auto h-14 w-14 -rotate-45 sm:h-20 sm:w-20" />
                  <FaLeaf className="-mt-8 mr-10 h-10 w-10 -rotate-12 sm:h-14 sm:w-14" />
                  <FaLeaf className="-mt-3 ml-auto h-8 w-8 -rotate-90 sm:h-11 sm:w-11" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#007A37]">
                    <FaLeaf />
                    About Farm
                  </div>
                  <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight text-[#12352D] sm:text-4xl lg:text-5xl">
                    Integrated Natural Farming System
                  </h2>
                  <p className="mt-5 max-w-3xl text-sm leading-7 text-[#4B594F] sm:text-base">
                    Sanjay's FoodCourt operates as a complete sustainable circular ecosystem across 28 acres. We grow vegetables and rice while managing cow farming, goat farming, country chicken farming, fish farming, and earthworm vermicompost farming together as one connected system.
                  </p>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[#4B594F] sm:text-base">
                    Waste from one activity becomes a resource for another. Livestock manure feeds the soil, vegetable waste feeds animals and poultry, chicken waste supports fish farming, treated fish tank water returns to the fields, and vermicompost naturally strengthens every crop cycle.
                  </p>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {cycleCards.map((card) => (
                      <article key={card.title} className="rounded-2xl border border-[#E5EFE3] bg-white p-4 shadow-[0_10px_28px_rgba(17,74,28,0.08)]">
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF8E9] text-xl text-[#37A536]">
                          {card.icon}
                        </div>
                        <h3 className="text-sm font-black leading-5 text-[#12352D]">{card.title}</h3>
                        <p className="mt-2 text-xs leading-5 text-[#5E6C63]">{card.text}</p>
                      </article>
                    ))}
                  </div>

                  <div className="mt-8 overflow-hidden rounded-3xl bg-[#007A37] p-6 text-white shadow-[0_18px_40px_rgba(0,122,55,0.24)]">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-3xl">
                        <FaLeaf />
                      </div>
                      <div>
                        <h3 className="text-xl font-black">Sustainable Circular Ecosystem</h3>
                        <p className="mt-2 text-sm leading-6 text-white/90">
                          Crops, livestock, fish, water, and compost work together in one efficient natural cycle, reducing waste and supporting healthier farm fresh food.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1820px]">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#007A37]">
                <FaLeaf />
                Our Products
              </div>
              <h2 className="mt-2 text-2xl font-black leading-tight text-[#17263A] sm:text-3xl">
                Farm Fresh. Hand Picked. Just for You.
              </h2>
            </div>
            <a href="#our-farm" className="inline-flex items-center justify-center gap-3 rounded-full border border-[#5AA832] bg-white px-5 py-2.5 text-sm font-bold text-[#086130] shadow-sm">
              View Farm
              <FiArrowRight />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-9">
            {products.map((product) => (
              <article key={product.label} className="overflow-hidden rounded-2xl bg-white shadow-[0_14px_35px_rgba(20,72,28,0.12)]">
                <div className="relative">
                  <img src={product.img} alt={product.label} className="h-36 w-full object-cover lg:h-32 2xl:h-36" />
                  <div className="absolute -bottom-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-white shadow-lg">
                    <img src={product.img} alt="" className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="px-4 pb-5 pt-8 text-center">
                  <h3 className="text-base font-black text-[#162235]">{product.label}</h3>
                  <p className="mt-1 text-sm text-[#737B75]">{product.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="our-farm" className="relative overflow-hidden px-4 py-6 sm:px-6 lg:px-10">
        <div className="pointer-events-none absolute left-0 top-0 z-0 -translate-x-6 -translate-y-8 text-[#8FCB6B]/25">
          <FaLeaf className="h-16 w-16 rotate-45 sm:h-24 sm:w-24" />
          <FaLeaf className="-mt-8 ml-12 h-12 w-12 rotate-12 sm:h-16 sm:w-16" />
          <FaLeaf className="-mt-4 ml-2 h-10 w-10 rotate-90 sm:h-14 sm:w-14" />
        </div>
        <div className="pointer-events-none absolute right-0 top-0 z-0 translate-x-6 -translate-y-8 text-[#8FCB6B]/25">
          <FaLeaf className="h-16 w-16 -rotate-45 sm:h-24 sm:w-24" />
          <FaLeaf className="-mt-8 mr-12 h-12 w-12 -rotate-12 sm:h-16 sm:w-16" />
          <FaLeaf className="-mt-4 ml-8 h-10 w-10 -rotate-90 sm:h-14 sm:w-14" />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 z-0 -translate-x-6 translate-y-8 text-[#8FCB6B]/20">
          <FaLeaf className="h-16 w-16 -rotate-45 sm:h-24 sm:w-24" />
          <FaLeaf className="-mt-8 ml-12 h-12 w-12 rotate-12 sm:h-16 sm:w-16" />
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 z-0 translate-x-6 translate-y-8 text-[#8FCB6B]/20">
          <FaLeaf className="h-16 w-16 rotate-45 sm:h-24 sm:w-24" />
          <FaLeaf className="-mt-8 mr-12 h-12 w-12 -rotate-12 sm:h-16 sm:w-16" />
        </div>
        <div className="mx-auto max-w-[1820px]">
          <div className="relative z-10 rounded-[28px] border border-[#E4EEE1] bg-white/95 p-5 shadow-[0_18px_55px_rgba(20,72,28,0.12)] sm:p-6">
            <div className="mb-5">
              <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#007A37]">
                <FaSeedling />
                Our 28 Acres
              </div>
              <h2 className="mt-2 text-2xl font-black text-[#17263A] sm:text-3xl">Integrated Organic Farm</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-7">
              {farmZones.map((zone) => (
                <article key={zone.title} className="overflow-hidden rounded-2xl border border-[#E5EFE3] bg-[#FAFCF8]">
                  <img src={zone.img} alt={zone.title} className="h-28 w-full object-cover" />
                  <div className="p-3">
                    <div className="text-sm font-black text-[#5FB22E]">{zone.size}</div>
                    <div className="mt-2 text-sm font-black text-[#17263A]">{zone.title}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#006B32_0%,#07833C_48%,#5FB22E_100%)] p-7 text-white shadow-[0_24px_70px_rgba(0,122,55,0.24)] lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <div className="mb-3 flex items-center gap-2 text-xl font-semibold italic text-[#DFF8B8]">
                  <FaLeaf />
                  Contact Us
                </div>
                <h2 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">Have Questions?</h2>
                <p className="mt-4 text-2xl font-extrabold text-white">We're here to help!</p>
                <p className="mt-3 max-w-xl text-base leading-7 text-white/88">
                  Get in touch with us for any queries or orders.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: 'Call Us', icon: <FiPhone />, href: 'tel:+916381516260' },
                  { label: 'WhatsApp', icon: <FaWhatsapp />, href: 'https://wa.me/916381516260' },
                  { label: 'Email Us', icon: <FaEnvelope />, href: 'mailto:logasanjay06@gmail.com' },
                ].map((item) => (
                  <a key={item.label} href={item.href} className="rounded-[26px] bg-white/14 p-6 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)] backdrop-blur transition hover:-translate-y-1 hover:bg-white/18">
                    <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl text-[#007A37] shadow-[0_14px_28px_rgba(0,74,33,0.18)]">
                      {item.icon}
                    </span>
                    <span className="mt-4 block text-lg font-black">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.72fr]">
            <div className="rounded-[30px] border border-[#E4EEE1] bg-white p-6 shadow-[0_20px_60px_rgba(20,72,28,0.12)] lg:p-8">
              <h3 className="text-2xl font-black text-[#12352D]">Contact Information</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { title: 'Location', text: <>52B2/6 North Street,<br />Rajapalayam</>, icon: <FiMapPin /> },
                  { title: 'Phone', text: '6381516260', icon: <FiPhone /> },
                  { title: 'Email', text: 'logasanjay06@gmail.com', icon: <FiMail /> },
                ].map((item) => (
                  <div key={item.title} className="rounded-[24px] bg-[#F7FBF5] p-5 shadow-[inset_0_0_0_1px_rgba(0,122,55,0.08)]">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#007A37] text-2xl text-white">
                      {item.icon}
                    </div>
                    <div className="text-sm font-black uppercase tracking-wide text-[#5FB22E]">{item.title}</div>
                    <div className="mt-2 text-sm font-bold leading-6 text-[#17263A]">{item.text}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://maps.google.com/?q=52B2%2F6%20North%20Street%2C%20Rajapalayam" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#5AA832] bg-white px-5 py-3 text-sm font-black text-[#086130]">
                  <FiMapPin /> View Map
                </a>
                <a href="tel:+916381516260" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#007A37] px-5 py-3 text-sm font-black text-white shadow-[0_14px_28px_rgba(0,122,55,0.22)]">
                  <FiPhone /> Call Now
                </a>
                <a href="mailto:logasanjay06@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5FB22E] px-5 py-3 text-sm font-black text-white shadow-[0_14px_28px_rgba(95,178,46,0.22)]">
                  <FiMail /> Send Email
                </a>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#E4EEE1] bg-white p-6 shadow-[0_20px_60px_rgba(20,72,28,0.12)] lg:p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#EEF8E9] text-3xl text-[#007A37]">
                <FaLeaf />
              </div>
              <h3 className="mt-6 text-3xl font-black text-[#12352D]">Farm Visit</h3>
              <p className="mt-3 text-base leading-7 text-[#59645D]">
                Visit our farm and experience our organic lifestyle.
              </p>
              <a href="tel:+916381516260" className="mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-[#007A37] px-7 py-3.5 text-sm font-black text-white shadow-[0_16px_32px_rgba(0,122,55,0.24)]">
                Plan a Visit <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


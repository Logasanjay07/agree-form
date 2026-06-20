import { motion } from 'framer-motion'
import {
  FaBasketShopping,
  FaEnvelope,
  FaFish,
  FaLeaf,
  FaRecycle,
  FaSeedling,
  FaWhatsapp,
  FaWheatAwn,
}
from 'react-icons/fa6'
import { FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa'
import { GiChicken, GiCorn, GiGoat, GiPlantRoots, GiRiceCooker, GiTomato } from 'react-icons/gi'
import { FiArrowRight, FiMapPin, FiShoppingCart } from 'react-icons/fi'
import heroImage from '../assets/background image.png'
import questionBackground from '../assets/have question background.jpg'
import cornField from '../assets/corn-field.jpg'
import tomatoFarm from '../assets/tomato-farm.jpg'
import vegetablesImg from '../assets/vegitables.avif'
import paddyField from '../assets/paddy-field.jpg'
import fishPond from '../assets/fish forming.jpg'
import chickenFarm from '../assets/native chicken form.jpg'
import goatFarm from '../assets/goat form.webp'
import earthFarm from '../assets/earthwarm form.jpg'
import chilliImg from '../assets/chilli image.jpg'
import newOnionImg from '../assets/onion img.jpg'
import newRiceImg from '../assets/rice image.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const stats = [
  { value: '28', label: 'Acres Farm', icon: <FaSeedling /> },
  { value: '8+', label: 'Farming Units', icon: <GiPlantRoots /> },
  { value: '500+', label: 'Happy Customers', icon: <FaLeaf /> },
  { value: '100%', label: 'Organic Farming', icon: <FaRecycle /> },
]

const products = [
  { name: 'Fresh Corn', category: 'Vegetables', tagline: 'Sweet & Natural', price: 'Rs 35 / kg', image: cornField, icon: <GiCorn /> },
  { name: 'Tomato', category: 'Vegetables', tagline: 'Juicy & Healthy', price: 'Rs 40 / kg', image: tomatoFarm, icon: <GiTomato /> },
  { name: 'Onion', category: 'Vegetables', tagline: 'Farm Fresh', price: 'Rs 35 / kg', image: newOnionImg, icon: <FaBasketShopping /> },
  { name: 'Chilli', category: 'Vegetables', tagline: 'Hot & Spicy', price: 'Rs 50 / kg', image: chilliImg, icon: <GiTomato /> },
  { name: 'Organic Rice', category: 'Grains', tagline: 'Pure & Natural', price: 'Rs 60 / kg', image: newRiceImg, icon: <GiRiceCooker /> },
  { name: 'Fresh Fish', category: 'Fish & Seafood', tagline: 'Catch of the Day', price: 'Rs 120 / kg', image: fishPond, icon: <FaFish /> },
]

const filters = ['All Products', 'Vegetables', 'Fruits', 'Grains', 'Animal Products', 'Fish']

const farmZones = [
  { title: 'Corn Farm', area: '5 Acres', image: cornField, icon: <GiCorn /> },
  { title: 'Vegetables Farm', area: '5 Acres', image: vegetablesImg, icon: <FaBasketShopping /> },
  { title: 'Paddy Farm', area: '5 Acres', image: paddyField, icon: <FaWheatAwn /> },
  { title: 'Fish Farming', area: '5 Acres', image: fishPond, icon: <FaFish /> },
  { title: 'Native Chicken', area: '2.5 Acres', image: chickenFarm, icon: <GiChicken /> },
  { title: 'Goat Farming', area: '2.5 Acres', image: goatFarm, icon: <GiGoat /> },
  { title: 'Earthworm Farm', area: '3 Acres', image: earthFarm, icon: <GiPlantRoots /> },
]

const cycleNodes = [
  { label: 'Goat Farming', image: goatFarm, position: 'left-1/2 top-[1%] -translate-x-1/2' },
  { label: 'Chicken Farming', image: chickenFarm, position: 'right-[2%] top-[25%]' },
  { label: 'Fish Farming', image: fishPond, position: 'bottom-[20%] right-[7%]' },
  { label: 'Crop Farming', image: paddyField, position: 'bottom-[1%] left-1/2 -translate-x-1/2' },
  { label: 'Vegetable Farming', image: vegetablesImg, position: 'bottom-[20%] left-[7%]' },
  { label: 'Vermicompost Farming', image: earthFarm, position: 'left-[2%] top-[25%]' },
]

const cycleCards = [
  { title: '28 Acres Integrated Farmland', text: 'Producing vegetables, rice, fish, poultry, goats, and vermicompost.', icon: <FaSeedling /> },
  { title: 'Organic Manure for Soil Health', text: 'Cow and livestock waste is converted into organic manure for fields.', icon: <FaLeaf /> },
  { title: 'Natural Feed for Animals', text: 'Vegetable waste is reused as natural feed for animals and poultry.', icon: <FaLeaf /> },
  { title: 'Fish Farming Support', text: 'Chicken waste supports fish farming in our natural ponds.', icon: <FaRecycle /> },
  { title: 'Water Recycling for Irrigation', text: 'Treated fish tank water returns to crops, rice fields, and vegetables.', icon: <FiShoppingCart /> },
  { title: 'Vermicompost Enrichment', text: 'Earthworm farming produces compost that enriches the entire farm.', icon: <FaRecycle /> },
]

function SectionHeader({ eyebrow, title, text, center = true }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className={`${center ? 'mx-auto text-center' : ''} max-w-3xl`}
    >
      <div className={`mb-4 inline-flex items-center gap-2 rounded-full border border-[#DDEBDD] bg-white/80 px-4 py-2 text-sm font-bold text-[#0B7A33] shadow-[0_10px_28px_rgba(11,122,51,0.08)] backdrop-blur ${center ? 'justify-center' : ''}`}>
        <FaLeaf className="text-[#4CAF50]" />
        {eyebrow}
      </div>
      <h2 className="font-['Poppins'] text-3xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-base leading-7 text-[#64748B] sm:text-lg">{text}</p>}
    </motion.div>
  )
}

function HeroSection() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-88px)] overflow-hidden rounded-b-[56px] bg-[#071E12] px-5 text-white sm:px-8 lg:px-10">
      <img src={heroImage} alt="Sanjay's FoodCourt farm landscape" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(234,247,236,0.94)_0%,rgba(234,247,236,0.76)_36%,rgba(255,255,255,0.18)_70%,rgba(255,255,255,0.04)_100%)]"></div>
      <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-[#B7F36A]/30 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 h-52 w-52 rounded-full bg-[#FFDFA3]/45 blur-3xl"></div>
      <div className="absolute right-[15%] top-[28%] h-28 w-28 rounded-full bg-white/70 blur-3xl"></div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-[1440px] flex-col justify-center py-12 sm:py-16 lg:py-20"
      >
        <motion.div variants={fadeUp} className="inline-flex w-fit items-center gap-3 font-['Poppins'] text-xl font-semibold italic text-[#0B7A33] sm:text-3xl">
          <FaLeaf className="text-[#0B7A33]" />
          From Our Farm
        </motion.div>
        <motion.h1 variants={fadeUp} className="mt-6 max-w-3xl font-['Poppins'] text-[clamp(4rem,18vw,7rem)] font-extrabold leading-[0.98] tracking-tight text-[#07251A] lg:text-[8rem]">
          Pure.<br />Natural.<br /><span className="text-[#0B7A33]">Organic.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-7 max-w-xl text-[1.35rem] font-medium leading-9 text-[#26384A] sm:text-3xl sm:leading-[1.35]">
          Healthy soil, healthy food,<br className="hidden sm:block" />
          healthy life. Experience the<br className="hidden sm:block" />
          goodness of nature.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8">
          <a href="#about-farm" className="inline-flex items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#065F2C] to-[#0B7A33] px-8 py-4 text-lg font-extrabold text-white shadow-[0_18px_40px_rgba(11,122,51,0.28)] transition hover:-translate-y-1 sm:px-10 sm:py-5 sm:text-xl">
            <FaLeaf className="text-[#D7F3B8]" />
            Explore Our Farm
            <FiArrowRight className="text-2xl" />
          </a>
        </motion.div>

        <motion.div variants={stagger} className="mt-9 grid grid-cols-4 rounded-[28px] border border-white/20 bg-[#052416]/92 p-3 text-center shadow-[0_22px_55px_rgba(5,39,18,0.26)] backdrop-blur-xl sm:max-w-4xl sm:p-6">
          {stats.map((stat, index) => (
            <motion.div key={stat.label} variants={fadeUp} className={`px-2 text-white ${index !== stats.length - 1 ? 'border-r border-white/18' : ''}`}>
              <div className="mx-auto mb-2 flex justify-center text-xl text-[#B7F36A] sm:text-3xl">{stat.icon}</div>
              <div className="font-['Poppins'] text-2xl font-extrabold text-[#B7F36A] sm:text-5xl">{stat.value}</div>
              <div className="mt-1 text-[0.72rem] font-semibold leading-5 text-white sm:text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about-farm" className="overflow-hidden bg-white px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1180px]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <div className="flex items-center gap-2.5 font-['Poppins'] text-xl font-semibold italic text-[#0B7A33] sm:text-2xl">
            <FaLeaf />
            About Our Farm
          </div>
          <h2 className="mt-4 max-w-4xl font-['Poppins'] text-[clamp(2.05rem,8.8vw,3.6rem)] font-extrabold leading-[1.1] text-[#08251B] sm:mt-5">
            Integrated Natural <span className="text-[#0B7A33]">Farming System</span>
          </h2>
          <div className="my-6 flex items-center justify-center gap-4 text-[#0B7A33] sm:my-7">
            <span className="h-px w-24 bg-[#0B7A33]"></span>
            <FaLeaf className="text-2xl" />
            <span className="h-px w-24 bg-[#C9DBC2]"></span>
          </div>
          <p className="max-w-3xl text-base font-medium leading-7 text-[#3F4A59] sm:text-lg sm:leading-8">
            We follow a natural cycle of farming where every resource is used wisely and nothing goes to waste. Nature gives, we nurture, and together we create abundance.
          </p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-7 grid grid-cols-4 rounded-[22px] bg-[#EAF7EC] px-1.5 py-4 text-center shadow-[inset_0_0_0_1px_rgba(11,122,51,0.07),0_12px_30px_rgba(11,122,51,0.08)] sm:mt-8 sm:rounded-[26px] sm:px-6 sm:py-5">
          {stats.map((stat, index) => (
            <motion.div key={stat.label} variants={fadeUp} className={`px-2 ${index !== stats.length - 1 ? 'border-r border-[#C9DBC2]' : ''}`}>
              <div className="mx-auto mb-2 flex h-7 items-center justify-center text-xl text-[#0B7A33] sm:h-8 sm:text-2xl">{stat.icon}</div>
              <div className="font-['Poppins'] text-2xl font-extrabold leading-none text-[#0B7A33] sm:text-4xl">{stat.value}</div>
              <div className="mt-2 text-[0.68rem] font-semibold leading-4 text-black sm:text-base sm:leading-5">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10">
          <h3 className="flex items-center gap-3 font-['Poppins'] text-xl font-extrabold text-[#0B7A33] sm:text-3xl">
            <FaLeaf />
            Our Natural Cycle
          </h3>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="natural-cycle-diagram relative mx-auto mt-6 aspect-[1/1.38] w-full max-w-[390px] overflow-visible rounded-[34px] bg-[radial-gradient(circle_at_center,#F4FBEE_0%,#FFFFFF_58%,#EAF7EC_100%)] px-1 py-4">
            <div className="absolute left-1/2 top-1/2 h-[70%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[14px] border-[#0B7A33]/10"></div>
            <div className="absolute left-1/2 top-1/2 h-[52%] w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#4CAF50]/45"></div>
            <svg className="absolute left-1/2 top-1/2 h-[72%] w-[78%] -translate-x-1/2 -translate-y-1/2 rotate-[-88deg]" viewBox="0 0 400 400" aria-hidden="true">
              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                  <path d="M0,0 L10,5 L0,10 Z" fill="#0B7A33" />
                </marker>
              </defs>
              <path d="M200 24 A176 176 0 1 1 199 24" fill="none" stroke="#0B7A33" strokeWidth="9" strokeLinecap="round" strokeDasharray="112 58" markerEnd="url(#arrow)" opacity="0.88" />
            </svg>

            <div className="absolute left-1/2 top-1/2 flex h-[25%] w-[28%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-4 border-white bg-[#EAF7EC] text-center shadow-[0_18px_42px_rgba(11,122,51,0.16)]">
              <FaLeaf className="mb-1.5 text-[clamp(1.5rem,6vw,2.2rem)] text-[#0B7A33]" />
              <div className="font-['Poppins'] text-[clamp(0.72rem,3.25vw,1.05rem)] font-extrabold leading-tight text-[#0B7A33]">
                Natural<br />Farm Cycle
              </div>
            </div>

            {cycleNodes.map((node, index) => (
              <div key={node.label} className={`absolute ${node.position} flex w-[29%] flex-col items-center`}>
                <div className="relative w-full">
                  <span className="absolute -left-1 top-1 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-[#B7F36A] font-['Poppins'] text-xs font-extrabold text-[#06491F] shadow-[0_8px_18px_rgba(11,122,51,0.18)]">
                    {index + 1}
                  </span>
                  <img src={node.image} alt={node.label} loading="lazy" className="aspect-square w-full rounded-full border-[5px] border-white bg-white object-cover object-center shadow-[0_14px_30px_rgba(18,34,49,0.18)]" />
                </div>
                <div className="mt-[-3px] flex min-h-[32px] w-full items-center justify-center rounded-xl bg-[#065F2C] px-1.5 py-1.5 text-center font-['Poppins'] text-[clamp(0.58rem,2.6vw,0.82rem)] font-extrabold leading-[1.05] text-white shadow-[0_10px_20px_rgba(6,95,44,0.24)]">
                  {node.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="mt-7 grid gap-3 sm:grid-cols-2">
            {cycleCards.map((card) => (
              <motion.article key={card.title} variants={fadeUp} className="rounded-[18px] border border-[#E5EFE3] bg-white p-4 shadow-[0_10px_28px_rgba(17,74,28,0.08)]">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#EEF8E9] text-xl text-[#37A536]">
                  {card.icon}
                </div>
                <h3 className="font-['Poppins'] text-base font-extrabold leading-6 text-[#12352D]">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5E6C63]">{card.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="relative mt-8 overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#065F2C,#0B7A33)] p-6 text-white shadow-[0_18px_42px_rgba(6,95,44,0.24)] sm:p-8">
          <div className="relative flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/16 text-3xl">
              <FaLeaf />
            </div>
            <div>
              <h3 className="font-['Poppins'] text-2xl font-extrabold sm:text-3xl">Sustainable Future</h3>
              <p className="mt-2 max-w-3xl text-base leading-7 text-white/90 sm:text-xl">
                Our integrated system improves soil health, saves water, reduces waste and provides chemical-free food for a healthier tomorrow.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProductsSection() {
  return (
    <section id="products" className="bg-white px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1280px]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="max-w-3xl text-left">
          <div className="inline-flex items-center gap-3 font-['Poppins'] text-2xl font-semibold italic text-[#0B7A33]">
            <FaLeaf />
            Our Products
          </div>
          <h2 className="mt-5 font-['Poppins'] text-[clamp(1.45rem,6vw,2.7rem)] font-extrabold leading-[1.16] text-[#08251B] sm:mt-6">
            <span>Farm Fresh. Hand Picked.</span><br /><span className="text-[#0B7A33]">Just for You.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-[#4B5563] sm:mt-5 sm:text-lg sm:leading-8">
            Fresh, organic and natural products directly from our farm to your family.
          </p>
          <div className="mx-auto mt-6 flex max-w-[260px] items-center justify-center gap-4 text-[#0B7A33]">
            <span className="h-px flex-1 bg-[#0B7A33]"></span>
            <FaLeaf className="text-2xl" />
            <span className="h-px flex-1 bg-[#BBD6BE]"></span>
          </div>
        </motion.div>

        <div className="mt-7 grid grid-cols-3 gap-2 pb-3 sm:mx-0 sm:flex sm:flex-wrap sm:justify-center sm:gap-3 sm:overflow-visible sm:px-0">
          {filters.map((filter, index) => (
            <button key={filter} className={`min-h-10 rounded-full px-2 py-2 text-[0.68rem] font-bold leading-tight transition active:scale-95 sm:min-h-0 sm:shrink-0 sm:px-5 sm:py-3 sm:text-sm ${index === 0 ? 'bg-gradient-to-r from-[#065F2C] to-[#0B7A33] text-white shadow-[0_16px_34px_rgba(11,122,51,0.25)]' : 'border border-[#DDEBDD] bg-white text-[#0B7A33] shadow-[0_8px_20px_rgba(18,34,49,0.06)] hover:border-[#4CAF50]'}`}>
              {filter}
            </button>
          ))}
        </div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <motion.article key={product.name} variants={fadeUp} className="group overflow-hidden rounded-[24px] border border-[#EEF2EA] bg-white shadow-[0_16px_40px_rgba(18,34,49,0.11)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_64px_rgba(11,122,51,0.18)]">
              <div className="relative aspect-[16/11] overflow-hidden">
                <img src={product.image} alt={product.name} loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,34,49,0)_25%,rgba(18,34,49,0.78)_100%)]"></div>
                <div className="absolute left-3 top-3 inline-flex max-w-[calc(100%-1.5rem)] items-center gap-1.5 rounded-full bg-white/92 px-3 py-1.5 text-[0.65rem] font-extrabold text-[#0B7A33] backdrop-blur sm:text-xs">
                  <span className="text-[#4CAF50]">{product.icon}</span>
                  <span className="truncate">{product.category}</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-['Poppins'] text-lg font-extrabold leading-tight sm:text-2xl">{product.name}</h3>
                  <p className="text-xs font-medium text-white/90 sm:text-sm">{product.tagline}</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 p-3 sm:p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAF7EC] text-[#0B7A33] sm:h-11 sm:w-11">
                  <FaLeaf />
                </span>
                <div className="font-['Poppins'] text-sm font-extrabold text-[#0B7A33] sm:text-lg">{product.price}</div>
                <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B7A33] text-white shadow-[0_10px_24px_rgba(11,122,51,0.24)] transition hover:scale-105 sm:h-11 sm:w-11" aria-label={`Add ${product.name}`}>
                  <FiShoppingCart />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function LandSection() {
  return (
    <section id="our-farm" className="bg-white px-4 py-12 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[760px]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <div className="flex items-center gap-2.5 font-['Poppins'] text-xl font-semibold italic text-[#0B7A33] sm:text-2xl">
            <FaLeaf />
            Our 28 Acres
          </div>
          <h2 className="mt-4 font-['Poppins'] text-[clamp(2rem,8.8vw,3.5rem)] font-extrabold leading-tight text-[#08251B] sm:mt-5">
            Integrated Organic Farm
          </h2>
          <span className="mt-4 block h-1 w-20 rounded-full bg-[#0B7A33] sm:mt-5 sm:w-24"></span>
          <p className="mt-5 max-w-3xl text-base font-medium leading-7 text-[#64748B] sm:mt-6 sm:text-lg sm:leading-8">
            A complete integrated farmland producing a variety of fresh and organic products.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-6 grid grid-cols-2 overflow-hidden rounded-[22px] border border-[#DCEBDA] bg-white shadow-[0_14px_36px_rgba(18,34,49,0.08)] sm:mt-7 sm:rounded-[24px]">
          {[
            ['28', 'Total Acres', <GiPlantRoots />],
            ['8+', 'Farming Units', <FaLeaf />],
          ].map(([value, label, icon], index) => (
            <div key={label} className={`flex min-w-0 items-center gap-2 p-3 sm:gap-4 sm:p-5 ${index === 0 ? 'border-r border-[#DCEBDA]' : ''}`}>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EAF7EC] text-2xl text-[#0B7A33] sm:h-16 sm:w-16 sm:text-3xl">
                {icon}
              </span>
              <span className="min-w-0">
                <span className="block font-['Poppins'] text-3xl font-extrabold leading-none text-[#0B7A33] sm:text-4xl">{value}</span>
                <span className="mt-1 block font-['Poppins'] text-sm font-extrabold leading-tight text-[#0F172A] sm:text-base">{label}</span>
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="mt-8 space-y-4">
          {farmZones.map((zone) => (
            <motion.article key={zone.title} variants={fadeUp} className="farm-zone-card group grid min-h-[92px] grid-cols-[50%_50%] items-center overflow-hidden rounded-[18px] bg-white py-2 pl-2 pr-0 shadow-[0_10px_24px_rgba(18,34,49,0.12)] ring-1 ring-[#E4EEE1] transition hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(11,122,51,0.16)] sm:min-h-[104px] sm:grid-cols-[51%_49%]">
              <div className="flex min-w-0 items-center gap-2.5 px-1.5 py-2 sm:gap-4 sm:px-3 sm:py-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EAF7EC] text-2xl text-[#0B7A33] sm:h-14 sm:w-14">
                  {zone.icon}
                </span>
                <div className="min-w-0">
                  <div className="font-['Poppins'] text-[clamp(0.95rem,4vw,1.35rem)] font-extrabold leading-none text-[#0B7A33]">{zone.area}</div>
                  <div className="mt-1 truncate whitespace-nowrap font-['Poppins'] text-[clamp(0.78rem,3.35vw,1.05rem)] font-extrabold leading-tight text-[#152238]">{zone.title}</div>
                </div>
              </div>
              <div className="farm-image-frame h-[76px] w-full overflow-hidden rounded-r-[18px] sm:h-[92px]">
                <img src={zone.image} alt={zone.title} loading="lazy" className="h-full w-full bg-[#F7FBF5] object-contain transition duration-500 group-hover:scale-105" />
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="relative mt-9 overflow-hidden rounded-[28px] p-6 text-white shadow-[0_22px_58px_rgba(6,63,32,0.26)] sm:p-8">
          <img src={questionBackground} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,39,18,0.92)_0%,rgba(5,63,28,0.78)_48%,rgba(5,63,28,0.38)_100%)]"></div>
          <div className="relative">
            <h3 className="font-['Poppins'] text-[clamp(2rem,9vw,3rem)] font-extrabold leading-tight text-white drop-shadow-sm">
              Have Your Questions?
            </h3>
            <p className="mt-3 font-['Poppins'] text-[clamp(1.45rem,7vw,2.25rem)] font-semibold italic leading-tight text-[#9DE86D]">
              We're Here to Help
            </p>
            <span className="mt-3 block h-1 w-14 rounded-full bg-[#9DE86D]"></span>

            <div className="mt-7 grid gap-3">
              {[
                { label: 'Call Us', text: '6381516260', icon: <FaPhoneAlt />, href: 'tel:+916381516260' },
                { label: 'WhatsApp', text: 'Chat Now', icon: <FaWhatsapp />, href: 'https://wa.me/916381516260' },
                { label: 'Email Us', text: 'logasanjay06@gmail.com', icon: <FaEnvelope />, href: 'mailto:logasanjay06@gmail.com' },
              ].map((item) => (
                <a key={item.label} href={item.href} className="flex items-center gap-3 rounded-[18px] border border-white/70 bg-white p-3 text-[#0F172A] shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#27B93C] text-2xl text-white">
                    {item.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-['Poppins'] text-lg font-extrabold leading-tight text-[#06491F]">{item.label}</span>
                    <span className="mt-0.5 block break-words text-sm font-semibold leading-tight text-[#111827]">{item.text}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SustainabilitySection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#065F2C,#0B7A33_52%,#4CAF50)] p-6 text-white shadow-[0_30px_80px_rgba(11,122,51,0.28)] sm:p-10 lg:p-14">
        <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full bg-white/14 px-4 py-2 text-sm font-bold backdrop-blur">Sustainability</div>
            <h2 className="font-['Poppins'] text-3xl font-extrabold leading-tight sm:text-5xl">Circular farming for a cleaner food future.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ['0%', 'Chemical Inputs'],
              ['100%', 'Waste Reused'],
              ['28', 'Acres Regenerated'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-[24px] border border-white/16 bg-white/12 p-5 backdrop-blur">
                <div className="font-['Poppins'] text-4xl font-extrabold">{value}</div>
                <div className="mt-2 text-sm font-semibold text-white/78">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="bg-[#FFFFFF] px-4 pb-14 pt-5 sm:px-6">
      <div className="mx-auto max-w-[760px]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="rounded-[28px] border border-[#E4EEE1] bg-white p-5 shadow-[0_20px_56px_rgba(20,72,28,0.12)] sm:p-7">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px flex-1 bg-[#C9DBC2]"></span>
            <h3 className="flex shrink-0 items-center gap-2 font-['Poppins'] text-2xl font-extrabold text-[#06491F]">
              <FaLeaf className="text-[#0B7A33]" />
              Contact Information
            </h3>
            <span className="h-px flex-1 bg-[#C9DBC2]"></span>
          </div>
          <div className="mt-5 space-y-3">
            {[
              { title: 'Our Location', text: <>52B2/6 North Street,<br />Rajapalayam</>, icon: <FiMapPin />, cta: 'View Map', href: 'https://maps.google.com/?q=52B2%2F6%20North%20Street%2C%20Rajapalayam' },
              { title: 'Phone Number', text: '6381516260', icon: <FaPhoneAlt />, cta: 'Call Now', href: 'tel:+916381516260' },
              { title: 'Email Address', text: 'logasanjay06@gmail.com', icon: <FaEnvelope />, cta: 'Send Email', href: 'mailto:logasanjay06@gmail.com' },
            ].map((item) => (
              <div key={item.title} className="grid grid-cols-[4.25rem_minmax(0,1fr)] gap-3 border-b border-[#E2EBDD] py-4 last:border-b-0 sm:grid-cols-[4.75rem_minmax(0,1fr)_11rem] sm:items-center">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#EAF7EC] text-2xl text-[#0B7A33] sm:h-16 sm:w-16">
                  {item.icon}
                </span>
                <span className="min-w-0">
                  <span className="block font-['Poppins'] text-lg font-extrabold leading-tight text-[#0B662F]">{item.title}</span>
                  <span className="mt-1 block break-words text-base font-medium leading-6 text-[#111827]">{item.text}</span>
                </span>
                <a href={item.href} className="col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#EAF7EC] px-5 py-3 font-['Poppins'] text-sm font-extrabold text-[#06491F] sm:col-span-1 sm:mt-0">
                  {item.cta}
                  <FiArrowRight />
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-7 grid grid-cols-[4.75rem_minmax(0,1fr)] gap-4 rounded-[28px] bg-[#EAF7EC] p-5 shadow-[0_18px_42px_rgba(11,122,51,0.10)] sm:grid-cols-[5rem_minmax(0,1fr)_12rem] sm:items-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0B7A33] text-3xl text-white sm:h-[4.5rem] sm:w-[4.5rem]">
            <FaLeaf />
          </span>
          <span className="min-w-0">
            <h3 className="font-['Poppins'] text-xl font-extrabold leading-tight text-[#06491F]">Farm Visit</h3>
            <p className="mt-2 text-base font-medium leading-7 text-[#12352D]">
              We welcome you to visit our farm and experience our organic way of life.
            </p>
          </span>
          <a href="tel:+916381516260" className="col-span-2 inline-flex items-center justify-center gap-3 rounded-full bg-[#06491F] px-7 py-4 font-['Poppins'] font-extrabold text-white shadow-[0_16px_32px_rgba(11,122,51,0.22)] sm:col-span-1">
            Plan a Visit <FiArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default function MobileHome() {
  return (
    <main className="mobile-home overflow-hidden bg-[#FFFFFF] text-[#0F172A]">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <LandSection />
      <ContactSection />
    </main>
  )
}





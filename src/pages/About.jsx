import React from 'react'
import farmDrone from '../assets/gallery-drone.jpg'
import cornField from '../assets/corn-field.jpg'
import fishPond from '../assets/fish forming.jpg'
import goatFarm from '../assets/goat form.webp'
import chickenFarm from '../assets/chicken-farm.jpg'

/* Rebuilt About page with Tailwind utilities and local images matching each section */

const About = () => {
  return (
    <div className="min-h-screen text-gray-900">
      <section className="bg-white py-12">
        <div className="container flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-extrabold mb-4">ABOUT OUR FARM</h1>
            <p className="text-gray-700 mb-4">Sanjay's FoodCourt is a 28-acre integrated organic farming ecosystem producing premium crops and livestock using traditional organic practices. Our farm combines modern techniques with time-tested organic stewardship across corn, vegetables, paddy, fish ponds, native country chickens, goats, and mango orchards.</p>
            <p className="text-gray-700">We practice zero-chemical cultivation, avoid pesticides, and recycle organic waste into nutrient-rich compost to regenerate the soil and support biodiversity. Our philosophy is farm-to-family — traceable, transparent, and genuinely sustainable.</p>
          </div>

          <div className="lg:w-1/2">
            <img src={farmDrone} alt="drone view farm" className="rounded-2xl shadow-xl" />
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src={cornField} alt="corn field" className="w-full h-40 object-cover rounded-lg" />
            <img src={fishPond} alt="fish pond" className="w-full h-40 object-cover rounded-lg" />
            <img src={goatFarm} alt="goat farm" className="w-full h-40 object-cover rounded-lg" />
            <img src={chickenFarm} alt="chicken farm" className="w-full h-40 object-cover rounded-lg" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white/60">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">OUR FARM AT A GLANCE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 card-shadow">
              <div className="text-sm text-amber-500 font-semibold">Total Land</div>
              <div className="mt-2 text-2xl font-bold">28 Acres</div>
            </div>
            <div className="bg-white rounded-2xl p-6 card-shadow">
              <div className="text-sm text-amber-500 font-semibold">Experience</div>
              <div className="mt-2 text-2xl font-bold">10+ Years</div>
            </div>
            <div className="bg-white rounded-2xl p-6 card-shadow">
              <div className="text-sm text-amber-500 font-semibold">Farming Type</div>
              <div className="mt-2 text-2xl font-bold">Organic</div>
            </div>
            <div className="bg-white rounded-2xl p-6 card-shadow">
              <div className="text-sm text-amber-500 font-semibold">Products</div>
              <div className="mt-2 text-2xl font-bold">Multiple Categories</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">BENEFITS</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {['100% Organic','No Chemicals','Sustainable','Healthy Food','Farm Fresh'].map(b=> (
              <div key={b} className="bg-white rounded-xl p-6 flex items-center gap-4 card-shadow">
                <div className="w-12 h-12 rounded-md bg-emerald-600 flex items-center justify-center text-white font-semibold">✓</div>
                <div className="font-semibold">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer-dark py-8">
        <div className="container flex flex-col md:flex-row items-start justify-between gap-6">
          <div>
            <div className="text-2xl font-bold">Sanjay's FoodCourt</div>
            <div className="mt-2 text-sm">Pure Organic Food — Farm To Family</div>
          </div>
          <div className="text-sm">
            <div className="font-semibold">Contact</div>
            <div className="mt-2">hello@sanjaysfoodcourt.example</div>
            <div>+91 98765 43210</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default About

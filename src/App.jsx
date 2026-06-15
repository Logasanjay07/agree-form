import { Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'

export default function App(){
  return (
    <div className="min-h-screen bg-[#F8FFF5] text-[#0f3f14]">
      <Navbar />
      <main className="pt-20 lg:pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

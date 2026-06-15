import MobileNavbar from './MobileNavbar'
import DesktopNavbar from './DesktopNavbar'

export default function Navbar() {
  return (
    <>
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
      <div className="hidden lg:block">
        <DesktopNavbar />
      </div>
    </>
  )
}


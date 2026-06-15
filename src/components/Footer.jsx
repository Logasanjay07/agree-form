import MobileFooter from './MobileFooter'
import DesktopFooter from './DesktopFooter'

export default function Footer() {
  return (
    <>
      <div className="lg:hidden">
        <MobileFooter />
      </div>
      <div className="hidden lg:block">
        <DesktopFooter />
      </div>
    </>
  )
}


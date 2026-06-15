import MobileHome from './MobileHome'
import DesktopHome from './DesktopHome'

export default function Home() {
  return (
    <>
      <div className="lg:hidden">
        <MobileHome />
      </div>
      <div className="hidden lg:block">
        <DesktopHome />
      </div>
    </>
  )
}


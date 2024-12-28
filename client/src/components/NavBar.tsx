import { X, Menu } from "lucide-react"
import { useState, useEffect } from "react"

function NavBar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [bgColor, setBgColor] = useState('bg-transparent')
    const [padding, setPadding] = useState('py-6')
  
    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen)
    }
    
  
    const handleNavClick = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        if (isDrawerOpen) {
          toggleDrawer();
        }
      };

    const createNavClickHandler = (sectionId: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); // Prevent default link behavior
        handleNavClick(sectionId);
      };
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY
        const windowHeight = window.innerHeight
        if (scrollPosition > windowHeight * 0.01) {
          setBgColor('bg-[#FFFFFF]')
          setPadding('py-5')
        } else {
          setBgColor('bg-transparent')
          setPadding('py-10')
        }
      }
  
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])
  
    return (
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${bgColor}`}>
        <div className={`flex justify-between items-center ${padding}   px-20`}>
          <a href="/">
            <div className="font-ubuntu text-2xl font-bold italic">
               <span className="text-[#017807]">RICE</span> EXPORT
              {/* <img src={logo} alt='logo' className='lg:h-9 h-6 lg:w-32 w-24' /> */}
            </div>
          </a>
  
          {/* Nav Links - Hidden on small screens */}
          <div className="hidden lg:block font-ubuntu text-base">
          <ul className="flex gap-12 text-[#747582] text-base">
  <li>
    <a href="#home" onClick={createNavClickHandler("home")}>Home</a>
  </li>
  <li>
    <a href="#about" onClick={createNavClickHandler("about")}>About Us</a>
  </li>
  <li>
    <a href="#product" onClick={createNavClickHandler("product")}>Product</a>
  </li>
  <li>
    <a
      href="#contact"
      onClick={createNavClickHandler("contact")}
      className="border-[#017807] text-border font-bold text-sm border rounded-full py-5 px-8"
    >
      Contact Us
    </a>
  </li>
</ul>
          </div>         
  
          {/* Hamburger menu - Visible on small screens */}
          <button 
            className="lg:hidden text-[#043A53]"
            onClick={toggleDrawer}
            aria-label="Toggle menu"
          >
            {isDrawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
  
        {/* Drawer - Visible when open on small screens */}
        <div 
          className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:hidden`}
        >
          <div className="flex flex-col h-full justify-between py-6 px-4">
          <ul className="flex gap-12 text-[#747582] text-base">
  <li>
    <a href="#home" onClick={createNavClickHandler("home")}>Home</a>
  </li>
  <li>
    <a href="#about" onClick={createNavClickHandler("about")}>About Us</a>
  </li>
  <li>
    <a href="#product" onClick={createNavClickHandler("product")}>Product</a>
  </li>
  <li>
    <a
      href="#contact"
      onClick={createNavClickHandler("contact")}
      className="border-[#017807] text-border font-bold text-sm border rounded-full py-5 px-8"
    >
      Contact Us
    </a>
  </li>
</ul>
            <div className="space-y-4 font-mulish font-semibold text-lg">
              <button className="w-full bg-white rounded-full py-3 px-6 shadow border-[0.5px]">Log In</button>
              <button className="w-full bg-[#C9A74E] rounded-full py-3 px-6">Sign Up</button>
            </div>
          </div>
        </div>
  
        {/* Overlay - Visible when drawer is open */}
        {isDrawerOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={toggleDrawer}
          ></div>
        )}
      </nav>
    )
}

export default NavBar

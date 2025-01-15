import { X} from "lucide-react"
import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import menu from "../../public/svg/menu.svg"
function NavBar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [bgColor, setBgColor] = useState('bg-[#FFFFFF]')
    const [padding, setPadding] = useState('lg:py-10')
    const location = useLocation()
    const navigate = useNavigate()
  
    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen)
    }
    
    const handleNavClick = (sectionId: string) => {
        if (location.pathname === '/') {
            // If we're on the home page, smooth scroll
            const section = document.getElementById(sectionId)
            if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" })
            }
        } else {
            // If we're on another page, navigate to home and then scroll
            navigate('/', { state: { scrollTo: sectionId } })
        }
        
        if (isDrawerOpen) {
            toggleDrawer()
        }
    }

    const createNavClickHandler = (sectionId: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        handleNavClick(sectionId)
    }
  
    useEffect(() => {
        // Handle scrolling to section after navigation
        if (location.pathname === '/' && location.state?.scrollTo) {
            const sectionId = (location.state as { scrollTo: string }).scrollTo
            // Small delay to ensure the content is rendered
            setTimeout(() => {
                const section = document.getElementById(sectionId)
                if (section) {
                    section.scrollIntoView({ behavior: "smooth", block: "start" })
                }
            }, 100)
            
            // Clean up the state
            window.history.replaceState({}, document.title)
        }
    }, [location])

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            const windowHeight = window.innerHeight
            if (scrollPosition > windowHeight * 0.01) {
                setBgColor('bg-[#FFFFFF]')
                setPadding('py-5')
            } else {
                setBgColor('bg-transparent')
                setPadding('lg:py-10')
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
  
    return (
        <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${bgColor}`}>
            <div className={`flex justify-between items-center ${padding} py-5 marker: lg:px-20 px-5`}>
                <a href="/">
                    <div className="font-ubuntu text-2xl font-bold italic">
                        <span className="text-[#017807]">VASUDHA</span> EXIM
                    </div>
                </a>

                {/* Nav Links - Hidden on small screens */}
                <div className="hidden lg:block font-ubuntu text-base">
                    <ul className="flex gap-12 text-[#747582] text-base">
                        <li>
                            <a href="/#home" onClick={createNavClickHandler("home")}>Home</a>
                        </li>
                        <li>
                            <a href="/#about" onClick={createNavClickHandler("about")}>About Us</a>
                        </li>
                        <li>
                            <a href="/#product" onClick={createNavClickHandler("product")}>Product</a>
                        </li>
                        <li>
                            <a
                                href="/#contact"
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
    className={`lg:hidden fixed top-5 right-5 z-50 text-[#043A53]`}
    onClick={toggleDrawer}
    aria-label="Toggle menu"
>
    {isDrawerOpen ? (
        <X size={32} className="text-[#043A53] z-50" />
    ) : (
        <img src={menu} alt="menu icon" />
    )}
</button>


            </div>

            {/* Drawer - Visible when open on small screens */}
<div 
    className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
    } lg:hidden`}
>
    <div className="flex flex-col h-full  py-6 px-4">
        {/* Close Button */}
        <button 
            className="self-end mb-4 text-[#043A53]"
            onClick={toggleDrawer}
            aria-label="Close menu"
        >
            <X size={20} />
        </button>

        <ul className="flex w-full flex-col gap-4 text-[#747582] text-base">
    <li className="w-full ">
        <a 
            className="w-full block  px-2  "
            href="/#home" 
            onClick={createNavClickHandler("home")}
        >
            Home
        </a>
    </li>
    <hr />
    <li className="w-full">
        <a 
            className="w-full block  px-2  "
            href="/#about" 
            onClick={createNavClickHandler("about")}
        >
            About Us
        </a>
    </li>
    <hr />

    <li className="w-full">
        <a 
            className="w-full block px-2  "
            href="/#product" 
            onClick={createNavClickHandler("product")}
        >
            Product
        </a>
    </li>
    <hr />

    <li className="w-full">
        <a 
            className="w-full block  px-2  "
            href="/#contact" 
            onClick={createNavClickHandler("contact")}
        >
            Contact Us
        </a>
    </li>
</ul>

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
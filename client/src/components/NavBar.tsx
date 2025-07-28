import { X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import menu from "../../public/svg/menu.svg"
import { productData } from '../pages/AllProducts'

type ProductList = {
    name: string;
    productId: string;
    subCategoryId: string;
    categoryId: string;
}
function NavBar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [bgColor, setBgColor] = useState('bg-[#FFFFFF]')
    const [padding, setPadding] = useState('lg:py-10')
    const [searchTerm, setSearchTerm] = useState('')
    const inputRef = useRef<HTMLInputElement>(null);
    const [filteredProducts, setFilteredProducts] = useState<ProductList[]>([])
    const [productList, setProductList] = useState<ProductList[]>([])
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

    const filterProducts = (products: any[], query: string) => {
        if (!query) {
            return [];
        }
        return products
            .filter(product =>
                product.name.toLowerCase().includes(query.toLowerCase())
            )
            .map(product => (product));
    };

    useEffect(() => {
        const products = productData
            .flatMap(category =>
                category.subcategories.flatMap(subcategory =>
                    subcategory.products.map(product => ({
                        name: product.name,
                        productId: product.id,
                        subCategoryId: subcategory.id,
                        categoryId: category.id,
                    }))
                )
            );
        setFilteredProducts([]);
        setProductList(products)

    }, [])

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        const query = event.target.value;
        const filteredProducts = filterProducts(productList, query);
        setFilteredProducts(filteredProducts)
    };

    const handleSearchClick = (product: ProductList) => {
        setSearchTerm('');
        setFilteredProducts([]);
        navigate(`/product/${product.subCategoryId}`, { state: { product } });
    }

    const handleClickOutside = () => {
            setSearchTerm('');
            setFilteredProducts([]);
    };
    
    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };

    }, []);

    return (
        <>
            <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${bgColor}`}>
                <div className={`flex justify-between items-center ${padding} py-5 marker: lg:px-5 xl:px-20 px-5`}>
                    <a href="/">
                        <div className="font-ubuntu text-2xl font-bold italic">
                            <span className="text-[#017807]">VASUDHA</span> EXIM
                        </div>
                    </a>

                    <div className="absolute left-1/2 md:transform md:-translate-x-1/2 sm:-translate-x-1/3 top-1/2 -translate-y-1/2 z-40  w-full max-w-72 hidden sm:block cursor-default select-none">
                        <input
                            type="text"
                            placeholder="Search..."
                            ref={inputRef}
                            className="w-full focus:border-[#017807] outline-none py-3 px-6 rounded-full border border-[#017807]"
                            value={searchTerm}
                            onChange={handleSearch}
                        />

                        {
                            filteredProducts.length > 0 && (
                                <ul className="w-full bg-white border rounded-lg absolute top-full  max-h-64 overflow-y-scroll scroll-m-0 hide-scrollbar">
                                    {
                                        filteredProducts.map((product, index) => {
                                            return (
                                                <li onClick={() => handleSearchClick(product)} className="border-b border-[#017807] py-2 px-4 hover:bg-[#017807] hover:text-white cursor-pointer" key={index}>
                                                    {product.name}
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            )
                        }

                    </div>

                    {/* Nav Links - Hidden on small screens */}
                    <div className="hidden lg:block font-ubuntu text-base">
                        <ul className="flex gap-3 xl:gap-8 2xl:gap-10 text-[#747582] text-base">
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
                                    className="border-[#017807] text-border font-bold text-sm border rounded-full py-4 px-8"
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
                    className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
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

            <div className="relative w-full mt-20 px-4 sm:hidden cursor-default select-none">
                <input
                    type="text"
                    placeholder="Search..."
                    ref={inputRef}
                    className="w-full focus:border-[#017807] outline-none py-3 px-6 rounded-full border border-[#017807]"
                    value={searchTerm}
                    onChange={handleSearch}
                />

                {
                    filteredProducts.length > 0 && (
                        <ul className="absolute mx-4 left-0 right-0 bg-white border rounded-lg top-full max-h-64 overflow-y-scroll z-[45] hide-scrollbar">
                            {
                                filteredProducts.map((product, index) => {
                                    return (
                                        <li onClick={() => handleSearchClick(product)} className="border-b border-[#017807] py-2 px-4 hover:bg-[#017807] hover:text-white cursor-pointer" key={index}>
                                            {product.name}
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    )
                }

            </div>
        </>
    )
}

export default NavBar
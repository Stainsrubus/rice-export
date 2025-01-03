import { FaWhatsapp } from "react-icons/fa"

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    // Replace this number with your WhatsApp business number
    window.open('https://wa.me/9443495558', '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 z-50 bg-[#25D366] p-3 rounded-full shadow-xl  transition-colors duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp
        size={36} 
        className="text-white" 
      />
      <span className="absolute left-full ml-4 py-2 px-4 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us
      </span>
    </button>
  )
}

export default WhatsAppFloat
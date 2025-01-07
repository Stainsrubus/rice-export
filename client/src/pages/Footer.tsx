import google from "../../public/svg/google.svg"
import insta from "../../public/svg/insta.svg"
import twitter from "../../public/svg/twitter.svg"
import linkedIn from "../../public/svg/linkedIn.svg"
import mail from "../../public/svg/mail.svg"
import call from "../../public/svg/call.svg"
import location from "../../public/svg/location.svg"
function Footer() {
  return (
    <section className="mt-24 bg-[#017807]">
<div className="px-24 py-20 flex justify-between">
<div className="w-1/2">
<a href="/">
            <div className="font-ubuntu text-2xl font-bold italic">
               <span className="text-white">VASUDHA</span> EXIM
            </div>
          </a>
<p className="font-ubuntu text-xl leading-loose pt-10 text-white">
We specialize in exporting premium-quality rice globally, offering Basmati and non-Basmati varieties. Our rice is known for purity, freshness, and sustainability, ensuring satisfaction with every shipment through efficient and reliable service.
</p>
<div className="pt-10 flex gap-5">
  <a href="#" title="Google" className="rounded-full bg-[#D9D9D969]">
    <img src={google} alt="Google" className="p-3" />
  </a>
  
  <a href="#" title="Twitter" className="rounded-full bg-[#D9D9D969]">
    <img src={twitter} alt="Twitter" className="p-3" />
  </a>
  
  <a href="#" title="Instagram" className="rounded-full bg-[#D9D9D969]">
    <img src={insta} alt="Instagram" className="p-3" />
  </a>
  
  <a href="#" title="LinkedIn" className="rounded-full bg-[#D9D9D969]">
    <img src={linkedIn} alt="LinkedIn" className="p-3" />
  </a>
</div>

</div>

<div className="w-1/2 flex justify-end">
  <div className="flex flex-col gap-6">
    <h1 className="text-white font-anderson font-bold text-2xl">Get In Touch</h1>
    
    <div className="flex gap-4">
      <img src={location} alt="Location Icon" />
      <a 
        // href="https://www.google.com/maps?q=5-222-7,+Main+road,+Arunthathiyar+Kudiyiruppu,+Kaluneerkulam,+Tenkasi+Alangulam,+Tirunelveli+District,+Tamil+Nadu+-+627851" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="font-sans text-xl text-[#EDECECE3]"
      >
        5-222-7, Main road,<br />
        Arunthathiyar Kudiyiruppu,<br />
        Kaluneerkulam, Tenkasi Alangulam, <br />
        Tirunelveli District,<br />
        Tamil Nadu - 627851
      </a>
    </div>
    
    <div className="flex gap-4">
      <img src={call} alt="Call Icon" />
      <a 
        href="tel:+919443495558" 
        className="font-sans text-xl text-[#EDECECE3]"
      >
        +91 9443495558
      </a>
    </div>
    
    <div className="flex gap-4">
      <img src={mail} alt="Mail Icon" />
      <a 
        href="mailto:vasudhaexim1@gmail.com" 
        className="font-sans text-xl text-[#EDECECE3]"
      >
        vasudhaexim1@gmail.com
      </a>
    </div>
  </div>
</div>

</div>

    </section>
  )
}

export default Footer

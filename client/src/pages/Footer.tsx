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
               <span className="text-white">RICE</span> EXPORT
            </div>
          </a>
<p className="font-ubuntu text-xl leading-loose pt-10 text-white">
We specialize in exporting premium-quality rice globally, offering Basmati and non-Basmati varieties. Our rice is known for purity, freshness, and sustainability, ensuring satisfaction with every shipment through efficient and reliable service.
</p>
<div className="pt-10 flex gap-5">
<div className="rounded-full bg-[#D9D9D969]">
   <img src={google} alt="" className="p-3" /> 
</div>

<div className="rounded-full bg-[#D9D9D969]">
   <img src={twitter} alt="" className="p-3" /> 
</div>
<div className="rounded-full bg-[#D9D9D969]">
   <img src={insta} alt="" className="p-3" /> 
</div>
<div className="rounded-full bg-[#D9D9D969]">
   <img src={linkedIn} alt="" className="p-3" /> 
</div>
</div>
</div>

<div className=" w-1/2 flex justify-end " >
    <div className="flex flex-col  gap-6">
    <h1 className="text-white  font-anderson font-bold text-2xl">
    Get In Touch
</h1>
<div className="flex gap-4">
    <img src={location} alt="" />
    <p className="font-sans text-xl text-[#EDECECE3]">
    5-222-7, Main road,<br />
Arunthathiyar Kudiyiruppu,<br/> Kaluneerkulam, Tenkasi
Alangulam, <br/>
Tirunelveli District,
Tamil Nadu - 
627851
    </p>
</div>
<div className="flex gap-4">
    <img src={call} alt="" />
    <p className="font-sans text-xl text-[#EDECECE3]">
    +91  9443495558
    </p>
</div>
<div className="flex gap-4">
    <img src={mail} alt="" />
    <p className="font-sans text-xl text-[#EDECECE3]">
    riceExport@gmail.com
    </p>
</div>
    </div>

</div>
</div>

    </section>
  )
}

export default Footer

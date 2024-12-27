import paddy from "../../public/images/paddy.jpg"
import bowl from "../../public/images/bowl.png"
function About() {
  return (
 <section className="flex relative gap-28 px-20 py-20">
    <div className="w-1/2 flex justify-center items-center">
<img src={paddy} alt="" className=" w-auto border-[#EDEDED5E] border-[25px] h-auto" />
    </div>
    <div className="w-1/2 pt-5">
<h1 className="flex flex-col gap-4 text-[#282C4B] font-bold text-6xl font-anderson">
    <span>
    Our Story
    </span>
<span>
Who we are
</span>
</h1>
<div className="text-[#747582] pt-10 flex flex-col font-ubuntu text-xl">
<p className="leading-loose">
Your Company Name was established with a vision to bring the finest Indian rice to global markets. Since our inception, we have been committed to delivering premium-quality rice, preserving its authenticity and unmatched taste.
</p>
<p className="leading-loose pt-10">
We specialize in sourcing premium Basmati and non-Basmati rice, ensuring freshness, quality, timely delivery, and satisfaction for global customers.
</p>
</div>
    </div>
<div className="absolute bottom-0 right-0 ">
<img  src={bowl}  alt="" className="w-[150px] h-[110px]" />

</div>
 </section>
  )
}

export default About

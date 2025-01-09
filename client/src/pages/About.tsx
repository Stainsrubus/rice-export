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
At <span className="font-bold">Vasudha Exim Rice Export</span>, our journey began with a shared vision of two passionate
entrepreneurs, <span className="font-bold">Gowthaman</span> and <span className="font-bold">Kalin Suresh</span>. United by a deep-rooted commitment to
excellence, we established Vasudha Exim to connect the richness of Indian rice to global
markets. 
</p>
<p className="leading-loose pt-10">
With <span className="font-bold">over 40+ years of experience</span> , we have honed our expertise to deliver India’s
nest rice to the global stage. Our journey is a testament to hard work and excellence,
combining traditional values with modern practices to ensure that every grain we export
carries the rich heritage of Indian agriculture.
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

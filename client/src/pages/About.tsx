import paddy from "../../public/images/paddy.jpg"
import bowl from "../../public/images/bowl.png"
import bowl_sm from "../../public/images/bowl-sm.png"
function About() {
  return (
 <section className="flex flex-col lg:flex-row relative lg:gap-28 gap-3 lg:px-20 px-5 lg:py-20 py-10">
    <div className="block lg:hidden">
    <h1 className="flex flex-col gap-4 text-[#282C4B] font-bold lg:text-6xl text-3xl font-anderson">
    <span>
    Our Story
    </span>
</h1>
    </div>
    <div className="lg:w-1/2 w-full flex lg:flex-row flex-col  justify-center items-center">
<img src={paddy} alt="" className=" w-auto border-[#EDEDED5E] border-[25px] h-auto" />
    </div>
    <div className="lg:w-1/2 w-full pt-5">
<h1 className="lg:flex flex-col  hidden gap-4 text-[#282C4B] font-bold text-6xl font-anderson">
    <span>
    Our Story
    </span>
</h1>
<div className="text-[#747582] lg:pt-10  flex flex-col font-ubuntu lg:text-xl text-sm">
<p className="leading-loose">
At <span className="font-bold">Vasudha Exim</span>, our journey began with a shared vision of two passionate
entrepreneurs, <span className="font-bold">Gowthaman</span> and <span className="font-bold">Kalin Suresh</span>. United by a deep-rooted commitment to
excellence, we established Vasudha Exim to connect the richness of Indian rice to global
markets. 
</p>
<p className="leading-loose lg:pt-10 pt-5 pb-20 lg:pb-0">
With <span className="font-bold">over 40 years of experience</span> , we have honed our expertise to deliver India’s
best rice to the global stage. Our journey is a testament to hard work and excellence,
combining traditional values with modern practices to ensure that every grain we export
carries the rich heritage of Indian agriculture.
</p>
</div>
    </div>
<div className="absolute lg:block hidden bottom-0 right-0 ">
<img  src={bowl} loading="lazy"  alt="" className="w-[150px] h-[110px]" />

</div>
<div className="absolute lg:hidden block bottom-5 right-0 ">
<img  src={bowl_sm} loading="lazy"  alt="" className="w-[100px] h-[94px]" />

</div>
 </section>
  )
}

export default About

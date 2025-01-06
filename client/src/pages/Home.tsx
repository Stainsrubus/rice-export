import verify from "../../public/images/verify.png"
import hero from "../../public/images/rice.png"
import arrow from "../../public/svg/hero-arrow.svg"
import videoIcon from "../../public/svg/video-circle.svg"
import line from "../../public/svg/hero-line.svg"
import left from "../../public/images/hero-left.png"
import right from "../../public/images/hero-right.png"
function Home() {
  return (
 <section className="mt-20 pt-32 pb-5 flex relative  items-center px-20">
    <div className="w-1/2 ">
<div className="flex items-center">
<img src={verify} alt=""  className="w-8 h-8" />
<p className="text-[#F17216] text-base font-ubuntu">
Best Rice Export Company
</p>
</div>
<div className="relative">
  <h1 className="text-6xl py-5 !leading-normal text-[#282C4B] font-anderson">
    We export <span>  </span>
    <span className="relative inline-block">
       premium
      <img 
        src={line} 
        alt="line" 
        className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-3"
      />
    </span> 
    <span>  </span>  - quality rice worldwide.
  </h1>
</div>

<div className="w-5/6">
<p className="font-ubuntu text-xl !leading-loose text-[#747582]">
At Vasudha Exim Rice Export, we deliver premium Indian rice with a legacy of over 10 years.
Rooted in tradition and driven by quality, we connect the richness of Indian agriculture to
global tables.
 </p>
</div>

<div className="flex pt-16 pb-2 justify-start gap-8 items-center">
    <button className="py-6  drop-shadow-btn  px-12 bg-[#017807] rounded-full font-bold text-lg text-white ">
        Get Started
    </button>
    <button className="flex py-6 px-8 text-[#282C4B] font-medium text-lg items-center gap-2 justify-center ">
        <img src={videoIcon} alt="" />
    Watch Video
    </button>
</div>
    </div>

    <div className=" absolute top-[20%] left-[48%]">
            <img src={arrow} alt="" />
        </div>

    <div className="w-1/2   relative px-6">
     <div className="">
        <img src={hero} alt="" />
        </div>
    </div>

    <div className="absolute bottom-0 left-0 z-10">
        <img src={left} alt="" className="w-[100vw] h-[100%]" />
    </div>
    <div className="absolute bottom-0 right-0 z-5">
        <img src={right} alt="" className="w-[75vw] h-[100%]" />
    </div>
 </section>
  )
}

export default Home

import verify from "../../public/images/verify.png"
import hero from "../../public/images/rice.png"
import arrow from "../../public/svg/hero-arrow.svg"
import videoIcon from "../../public/svg/video-circle.svg"
import line from "../../public/svg/hero-line.svg"
import left from "../../public/images/hero-left.png"
import right from "../../public/images/hero-right.png"
function Home() {
  return (
 <section className="mt-20 lg:pt-32 pt-5 pb-5 flex relative  items-center lg:px-20 px-5">
    <div className="lg:w-1/2 w-full  flex flex-col justify-center lg:items-start items-center ">
<div className="flex items-center justify-center lg:justify-start">
<img src={verify} alt=""  className="w-8 h-8" />
<p className="text-[#F17216]  text-base font-ubuntu">
Best Rice Export Company
</p>
</div>
<div className="relative w-full flex justify-center lg:justify-start">
  <h1 className="lg:text-6xl lg:w-full w-5/6 text-center lg:text-left text-3xl py-5 !leading-normal text-[#282C4B] font-anderson">
    We export <span>  </span>
    <span className="relative inline-block">
       premium
      <img 
        src={line} 
        alt="line" 
        className="absolute top-full left-1/2 transform -translate-x-1/2 lg:-mt-3 -mt-2"
      />
    </span> 
    <span>  </span>  - quality rice worldwide.
  </h1>
</div>

<div className="lg:w-5/6 w-full flex justify-center lg:justify-start">
<p className="font-ubuntu text-center lg:text-left lg:text-xl text-sm !leading-loose text-[#747582]">
At Vasudha Exim Rice Export, we deliver premium Indian rice with a legacy of over 40+ years.
Rooted in tradition and driven by quality, we connect the richness of Indian agriculture to
global tables.
 </p>
</div>

<div className="flex flex-col lg:flex-row lg:pt-16 pt-8 pb-2 justify-start lg:gap-8 gap-6 items-center">
    <button className="lg:py-6 py-4  drop-shadow-btn  lg:px-12 px-16 bg-[#017807] rounded-full font-bold text-lg text-white ">
        Get Started
    </button>
    <button className="flex py-6 px-8 text-[#282C4B] font-medium text-lg items-center gap-2 justify-center ">
        <img src={videoIcon} alt="" />
    Watch Video
    </button>
</div>
    </div>

    <div className=" lg:absolute  hidden top-[20%] left-[48%]">
            <img src={arrow} alt="" />
        </div>

    <div className="lg:w-1/2 hidden lg:block   relative px-6">
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

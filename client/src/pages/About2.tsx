import briefcase from "../../public/svg/briefcase.svg"
import price from "../../public/svg/price-tag.svg"
import clock from "../../public/svg/clock.svg"
import shield from "../../public/svg/shield.svg"
import paddyright from "../../public/images/paddy-right.png"
import paddyleft from "../../public/images/paddy-left.png"
import paddySm from "../../public/images/paddy-sm.png"

function About2() {
  return (
   <section className="bg-[#F6F6F6CC]   ">
    <div className="relative lg:px-20 px-5 py-10 lg:py-20">
<div className="absolute lg:block hidden top-0 left-0">
    <img src={paddyleft} alt="" className="  w-1/4" />
</div>

<div className="flex flex-col lg:flex-row py-4 lg:pb-20 pb-5">
<div className="text-[#282C4B]  lg:w-1/2 font-anderson gap-6 font-bold lg:text-6xl text-3xl flex flex-col">
    <p>
    What’s Makes
    </p>
    <p>
    Us Different
    </p>
</div>
<div className="lg:w-1/2 w-full pt-5 lg:pt-0">
<p className="text-[#747582] w-5/6 font-ubuntu lg:text-xl text-sm !leading-loose">At <span className="font-bold">Vasudha Exim Rice Export</span>, we stand out with over 40+ years of experience in the rice export industry, guaranteeing unmatched quality, sustainability, and customer satisfaction. We specialize in white labeling, offering businesses customized rice products under their own brand. Through franchising opportunities, we empower you to share the rich heritage of Indian rice with every corner of the globe. We can make seamless arrangements to ship your products from the port directly to your required shop, ensuring timely and reliable deliveries.</p>
</div>
</div>
<div className="lg:flex grid grid-cols-2  gap-5 lg:gap-20 pb-10">
<div className="flex flex-col gap-5">
<div className="bg-[#017807] border-green-50/90 border-[7px] w-fit rounded-full">
  <img src={briefcase} className="p-4 h-14 w-14 lg:w-auto lg:h-auto" alt="" />
</div>
<div>
<h1 className="text-[#242527] lg:pb-5 pb-2 font-anderson font-bold  lg:text-2xl text-base">
Experienced
</h1>
<p className="text-[#747582] lg:text-lg text-sm font-medium !leading-relaxed">
With over 10 years of expertise, we ensure quality and reliability in exports
</p>
</div>
</div>

<div className="flex flex-col gap-5">
<div className="bg-[#017807] border-green-50/90 border-[7px] w-fit rounded-full">
  <img src={price} className="p-4 h-14 lg:h-auto" alt="" />
</div>
<div>
<h1 className="text-[#242527] lg:pb-5 pb-2 font-anderson font-bold  lg:text-2xl text-base">
Competitive price
</h1>
<p className="text-[#747582] lg:text-lg text-sm font-medium !leading-relaxed">
Oering aordable pricing without compromising on product quality.
</p>
</div>
</div>
<div className="flex flex-col gap-5">
<div className="bg-[#017807] border-green-50/90 border-[7px] w-fit rounded-full">
  <img src={clock} className="p-3 h-14 lg:h-auto" alt="" />
</div>
<div>
<h1 className="text-[#242527] lg:pb-5 pb-2 font-anderson font-bold  lg:text-2xl text-base">
On Time
</h1>
<p className="text-[#747582] lg:text-lg text-sm font-medium !leading-relaxed">
Ensuring punctual delivery to meet client expectations globally.
</p>
</div>
</div>
<div className="flex flex-col gap-5">
<div className="bg-[#017807] border-green-50/90 border-[7px] w-fit rounded-full">
  <img src={shield} className="p-3 h-14 lg:h-auto" alt="" />
</div>
<div>
<h1 className="text-[#242527] lg:pb-5 pb-2 font-anderson font-bold text-base lg:text-2xl">
Best Materials
</h1>
<p className="text-[#747582] lg:text-lg text-sm font-medium !leading-relaxed">
Sourcing premium quality rice for exceptional taste and texture.
</p>
</div>
</div>
</div>

<div className="absolute lg:block hidden w-[13%] bottom-0 right-0">
    <img src={paddyright} alt="" className=""/>
</div>
<div className="absolute block lg:hidden w-[40%] bottom-0 right-0">
    <img src={paddySm} alt="" className=""/>
</div>
</div>
   </section>
  )
}

export default About2

import briefcase from "../../public/svg/briefcase.svg"
import price from "../../public/svg/price-tag.svg"
import clock from "../../public/svg/clock.svg"
import shield from "../../public/svg/shield.svg"
import paddyright from "../../public/images/paddy-right.png"
import paddyleft from "../../public/images/paddy-left.png"
function About2() {
  return (
   <section className="bg-[#F6F6F6CC]   ">
    <div className="relative px-20 py-20">
<div className="absolute  top-0 left-0">
    <img src={paddyleft} alt="" className="  w-1/4" />
</div>

<div className="flex py-4 pb-20">
<div className="text-[#282C4B] w-1/2 font-anderson gap-6 font-bold text-6xl flex flex-col">
    <p>
    What’s Makes
    </p>
    <p>
    Us Different
    </p>
</div>
<div className="w-1/2">
<p className="text-[#747582] w-5/6 font-ubuntu text-xl !leading-loose">At <span className="font-bold">Vasudha Exim Rice Export</span>, we stand out with over 40+ years of experience in the rice export industry, guaranteeing unmatched quality, sustainability, and customer satisfaction. We specialize in white labeling, offering businesses customized rice products under their own brand. Through franchising opportunities, we empower you to share the rich heritage of Indian rice with every corner of the globe. We can make seamless arrangements to ship your products from the port directly to your required shop, ensuring timely and reliable deliveries.</p>
</div>
</div>
<div className="flex gap-20 pb-10">
<div className="flex flex-col gap-5">
<div className="bg-[#017807] border-green-50/90 border-[7px] w-fit rounded-full">
  <img src={briefcase} className="p-4" alt="" />
</div>
<div>
<h1 className="text-[#242527] pb-5 font-anderson font-bold  text-2xl">
Experienced
</h1>
<p className="text-[#747582] text-lg font-medium !leading-relaxed">
With over 10 years of expertise, we ensure quality and reliability in exports
</p>
</div>
</div>

<div className="flex flex-col gap-5">
<div className="bg-[#017807] border-green-50/90 border-[7px] w-fit rounded-full">
  <img src={price} className="p-4" alt="" />
</div>
<div>
<h1 className="text-[#242527] pb-5 font-anderson font-bold  text-2xl">
Competitive price
</h1>
<p className="text-[#747582] text-lg font-medium !leading-relaxed">
Oering aordable pricing without compromising on product quality.
</p>
</div>
</div>
<div className="flex flex-col gap-5">
<div className="bg-[#017807] border-green-50/90 border-[7px] w-fit rounded-full">
  <img src={clock} className="p-3" alt="" />
</div>
<div>
<h1 className="text-[#242527] pb-5 font-anderson font-bold  text-2xl">
On Time
</h1>
<p className="text-[#747582] text-lg font-medium !leading-relaxed">
Ensuring punctual delivery to meet client expectations globally.
</p>
</div>
</div>
<div className="flex flex-col gap-5">
<div className="bg-[#017807] border-green-50/90 border-[7px] w-fit rounded-full">
  <img src={shield} className="p-3" alt="" />
</div>
<div>
<h1 className="text-[#242527] pb-5 font-anderson font-bold  text-2xl">
Best Materials
</h1>
<p className="text-[#747582] text-lg font-medium !leading-relaxed">
Sourcing premium quality rice for exceptional taste and texture.
</p>
</div>
</div>
</div>

<div className="absolute w-[13%] bottom-0 right-0">
    <img src={paddyright} alt="" className=""/>
</div>
</div>
   </section>
  )
}

export default About2

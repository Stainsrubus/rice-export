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
<p className="text-[#747582] w-5/6 font-ubuntu text-xl !leading-loose">Your Company Name was established with a vision to bring the finest Indian rice to global markets. Since our inception, we have been committed to delivering premium-quality rice, preserving its authenticity and unmatched taste.</p>
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
Decades of expertise delivering premium rice worldwide, exceeding expectations.
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
Providing premium rice at competitive prices, ensuring value for our global customers.
</p>
</div>
</div>
<div className="flex flex-col gap-5">
<div className="bg-[#017807] border-green-50/90 border-[7px] w-fit rounded-full">
  <img src={clock} className="p-4" alt="" />
</div>
<div>
<h1 className="text-[#242527] pb-5 font-anderson font-bold  text-2xl">
On Time
</h1>
<p className="text-[#747582] text-lg font-medium !leading-relaxed">
Guaranteed on-time delivery, ensuring your rice reaches you promptly and efficiently.
</p>
</div>
</div>
<div className="flex flex-col gap-5">
<div className="bg-[#017807] border-green-50/90 border-[7px] w-fit rounded-full">
  <img src={shield} className="p-4" alt="" />
</div>
<div>
<h1 className="text-[#242527] pb-5 font-anderson font-bold  text-2xl">
Best Materials
</h1>
<p className="text-[#747582] text-lg font-medium !leading-relaxed">
Providing the best rice products, ensuring superior quality, freshness, and authentic flavor globally.
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

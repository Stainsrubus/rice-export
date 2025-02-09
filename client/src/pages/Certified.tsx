import ISO from "../../public/images/iso 1.png"
import aadhar from "../../public/images/aadhaar 1.png"
import fssai from "../../public/images/fssai-2 1.png"
import coffee from "../../public/images/coffee-board 1.png"
import govt from "../../public/images/government-recognised-star-export-house 1.png"
import AEO from "../../public/images/AEO-Photoroom 1.png"

function Certified() {
    return (
        <section className="py-12">
            <div className="lg:flex grid grid-cols-3 gap-5 justify-between  items-center lg:px-20 px-5">
                <div><img src={ISO} alt="" loading="lazy" className="w-[97px] h-[97px]" /></div>
                <div><img src={aadhar} alt="" loading="lazy" className="w-[122px] h-[122px]" /></div>
                <div><img src={govt} alt="" loading="lazy" className="w-[122px] h-[122px]"/></div>
                <div><img src={AEO} alt="" loading="lazy" className="w-[178px] h-[86px]"/></div>
                <div><img src={coffee} alt="" loading="lazy" className="w-[102px] h-[102px]" /></div>
                <div><img src={fssai} alt="" loading="lazy"  className="w-[191px] h-[72px]"/></div>
            </div>
        </section>
    )
}

export default Certified

import infra1 from "../../public/images/infra1.png"
import infra2 from "../../public/images/infra2.png"
import infra3 from "../../public/images/infra3.png"
function Infra() {
  return (
  <section className="px-20 py-16">
    <div className="flex flex-col justify-center items-center gap-10">
            <h1 className="text-[#282C4B] font-bold font-anderson text-6xl">
        Infrastructure
        </h1>
        <p className="text-[#747582] text-center w-1/2 font-ubuntu text-xl">
        We specialize in sourcing premium Basmati and non-Basmati rice, ensuring freshness, quality, timely delivery, and satisfaction for global customers.
        </p>
    </div>
    <div className="flex pt-20 items-center justify-evenly">
<img src={infra1} alt="infra" className="h-[350px] w-[400px]" />
<img src={infra2} alt="infra" className="h-[350px] w-[400px]" />
<img src={infra3} alt="infra" className="h-[350px] w-[400px]"/>
    </div>
  </section>
  )
}

export default Infra

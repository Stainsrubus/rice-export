import infra1 from "../../public/images/infra1.png"
import infra2 from "../../public/images/infra2.png"
import infra3 from "../../public/images/infra3.png"
function Infra() {
  return (
  <section className="lg:px-20 px-5 py-16 ">
    <div className="flex flex-col justify-center items-center lg:gap-10 gap-5 ">
            <h1 className="text-[#282C4B] font-bold font-anderson lg:text-6xl text-3xl">
        Infrastructure
        </h1>
        <p className="text-[#747582] text-center lg:w-1/2 leading-loose lg:leading-relaxed font-ubuntu lg:text-xl text-base">
        Vasudha Exim boasts advanced infrastructure for seamless rice processing, strict quality checks, and prompt delivery to satisfy global requirements.
        </p>
    </div>
    <div className="flex md:flex-row flex-wrap gap-10 lg:gap-0 flex-col lg:pt-20 pt-10 items-center md:justify-evenly">
<img src={infra1} alt="infra" loading="lazy" className="md:h-[350px] md:w-[400px] h-[300px] w-[380px]" />
<img src={infra2} alt="infra" loading="lazy" className="md:h-[350px] md:w-[400px] h-[300px] w-[380px]" />
<img src={infra3} alt="infra" loading="lazy" className="md:h-[350px] md:w-[400px] h-[300px] w-[380px]"/>
    </div>
  </section>
  )
}

export default Infra

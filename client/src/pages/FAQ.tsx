import { useState } from "react";
import experience from "../../public/svg/experience.svg";
import Export from "../../public/svg/export.svg";
import Quality from "../../public/svg/quality.svg";
import review from "../../public/svg/review.svg";
import Plus from "../../public/svg/plus-circle.svg";
import Minus from "../../public/svg/minus-circle.svg";
import rice from "../../public/images/yellow-rice-seeds-wooden-cup-concrete 1.png";
import rice_sm from "../../public/images/yellow-rice-seeds-wooden-cup-concrete-sm.png";

function Counter() {
  return (
    <section
      className="relative z-10  lg:bg-counter md:bg-counter bg-sac bg-cover lg:h-[300px] h-auto flex-col gap-20 md:gap-5 py-14  lg:py-0 md:flex-row flex items-center justify-evenly"
   
    >
      <div className="flex flex-col text-white justify-center items-center gap-5">
        <img loading="lazy" src={experience} alt="" className="md:h-12" />
        <p className="font-poppins lg:text-2xl text-2xl md:text-xl font-semibold">40+</p>
        <p className="font-poppins font-semibold md:text-base lg:text-xl text-xl">Year Of Experience</p>
      </div>

      <div className="flex flex-col text-white justify-center items-center gap-5">
        <img loading="lazy" src={Quality} alt="" className="md:h-12" />
        <p className="font-poppins lg:text-2xl text-2xl md:text-xl font-semibold">100%</p>
        <p className="font-poppins font-semibold md:text-base lg:text-xl text-xl">Assured Quality</p>
      </div>

      <div className="flex flex-col text-white justify-center items-center gap-5">
        <img loading="lazy" src={review} alt="" className="md:h-12" />
        <p className="font-poppins lg:text-2xl text-2xl md:text-xl font-semibold">50+</p>
        <p className="font-poppins font-semibold md:text-base lg:text-xl text-xl">Client Satisfaction</p>
      </div>

      <div className="flex flex-col text-white justify-center items-center gap-5">
        <img loading="lazy" src={Export} alt="" className="md:h-12" />
        <p className="font-poppins lg:text-2xl text-2xl md:text-xl font-semibold">25+</p>
        <p className="font-poppins font-semibold md:text-base lg:text-xl text-xl">Country Exported</p>
      </div>
    </section>
  );
}


function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "What types of rice do you export?",
      answer: "We export a wide range of rice, including Basmati, non-Basmati, and specialty varieties, ensuring top-quality grains for diverse needs.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to most countries. Shipping fees and times vary depending on the destination.",
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you will receive an email with a tracking number and a link to track your order.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and other digital payment methods like Apple Pay and Google Pay.",
    },
  ];

  const handleToggle = (index:any) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="lg:py-20 py-10">
      {/* Counter Section */}
      <Counter />

      {/* FAQ Section */}
      <section className="pt-10 relative">
        <div>
          <h1 className="text-[#282C4B] lg:px-20 px-5 font-anderson md:py-20 pt-20 font-bold lg:text-6xl text-3xl tracking-wide">FAQS</h1>
          <div className="flex w-full">
            <div className="md:space-y-6 lg:pl-20 px-5 md:w-2/3">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <div className="rounded-lg py-6 cursor-pointer" onClick={() => handleToggle(index)}>
                    <div className="flex justify-between items-center">
                      <h2 className="lg:text-xl text-lg font-medium text-[#282C4B]">{faq.question}</h2>
                      <span>
                        {expandedIndex === index ? <img src={Minus} alt="Collapse" /> : <img src={Plus} alt="Expand" />}
                      </span>
                    </div>
                    {expandedIndex === index && (
                      <p className="mt-4 text-gray-600 lg:text-lg text-base leading-relaxed">{faq.answer}</p>
                    )}
                  </div>
                  <hr />
                </div>
              ))}
            </div>
            <div className="absolute hidden md:block right-0 -bottom-40 transform w-[30%]">
              <img src={rice} loading="lazy" alt="Rice Image" className="w-full" />
            </div>
          </div>
        </div>
        <div className="md:hidden block transform">
          <img loading="lazy" src={rice_sm} alt="Rice Image" className="w-full" />
        </div>
      </section>
    </section>
  );
}

export default FAQ;

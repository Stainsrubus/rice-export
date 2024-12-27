import { useState } from "react";
import counter from "../../public/images/Counter (2).png"
import experience from "../../public/svg/experience.svg"
import Export from "../../public/svg/export.svg"
import harvest from "../../public/svg/harvest.svg"
import Plus from "../../public/svg/plus-circle.svg"
import Minus from "../../public/svg/minus-circle.svg"
import rice from "../../public/images/yellow-rice-seeds-wooden-cup-concrete 1.png"
function FAQ() {

    const [expandedIndex, setExpandedIndex] = useState(null);

    const faqs = [
        {
            question: "What types of rice do you export?",
            answer:
                "We export a wide range of rice, including Basmati, non-Basmati, and specialty varieties, ensuring top-quality grains for diverse needs.",
        },
        {
            question: "Do you offer international shipping?",
            answer:
                "Yes, we offer international shipping to most countries. Shipping fees and times vary depending on the destination.",
        },
        {
            question: "How can I track my order?",
            answer:
                "Once your order is shipped, you will receive an email with a tracking number and a link to track your order.",
        },
        {
            question: "What payment methods do you accept?",
            answer:
                "We accept all major credit cards, PayPal, and other digital payment methods like Apple Pay and Google Pay.",
        },
    ];

    const handleToggle = (index: any) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };



    return (
        <section className="py-20">
            <section>
                <div className="absolute h-[300px]">
                    <img src={counter} alt="" />
                </div>
                <div className="relative z-10 h-[300px] flex items-center justify-around">

                    <div className="flex  flex-col   text-white justify-center items-center gap-5">
                        <img src={experience} alt="" />
                        <p className="font-poppins text-2xl font-semibold">
                            25+
                        </p>
                        <p className="font-poppins font-semibold text-xl">
                            Year Of  Experience
                        </p>

                    </div>

                    <div className="flex  flex-col   text-white justify-center items-center gap-5">
                        <img src={harvest} alt="" />
                        <p className="font-poppins text-2xl font-semibold">
                            100+
                        </p>
                        <p className="font-poppins font-semibold text-xl">
                            High Quality
                        </p>

                    </div>
                    <div className="flex  flex-col   text-white justify-center items-center gap-5">
                        <img src={harvest} alt="" />
                        <p className="font-poppins text-2xl font-semibold">
                            25+
                        </p>
                        <p className="font-poppins font-semibold text-xl">
                            Best Harvesting
                        </p>

                    </div>
                    <div className="flex  flex-col   text-white justify-center items-center gap-5">
                        <img src={Export} alt="" />
                        <p className="font-poppins text-2xl font-semibold">
                            25+
                        </p>
                        <p className="font-poppins font-semibold text-xl">
                            Country Exported
                        </p>

                    </div>

                </div>
            </section>



            <section className="pt-10 relative">
  <div>
    <h1 className="text-[#282C4B] px-20 font-anderson py-20 font-bold text-6xl tracking-wide">
      FAQS
    </h1>

    <div className="flex w-full">
      {/* FAQ Section */}
      <div className="space-y-6 pl-20 w-2/3">
        {faqs.map((faq, index) => (<>
          <div key={index} className="rounded-lg py-6 cursor-pointer" onClick={() => handleToggle(index)}>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium text-[#282C4B]">{faq.question}</h2>
              <span>
                {expandedIndex === index ? (
                  <img src={Minus} alt="Collapse" />
                ) : (
                  <img src={Plus} alt="Expand" />
                )}
              </span>
            </div>
            {expandedIndex === index && (
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">{faq.answer}</p>
            )}
          </div>
          <hr />
          </>
        ))}
      
      </div>

      {/* Image Section */}
      <div className="absolute right-0 -bottom-40 transform  w-[30%]">
        <img src={rice} alt="Rice Image" className="w-full" />
      </div>
    </div>
  </div>
</section>

        </section>
    )
}

export default FAQ

import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const riceData = {
  Ponni: {
    image: "/images/brand-rice.png",
    description: "Ponni rice is a popular variety in South India.",
    benefits: "Rich in fiber, promotes digestion.",
    cookingInstructions: "Cook with 1:2 rice-to-water ratio for best results.",
    subcategories: [
      {
        name: "Deluxe Ponni",
        image: "/images/brand-rice.png",
        description: "Deluxe Ponni is a premium variety of Ponni rice.",
        benefits: "Highly nutritious, rich in essential vitamins.",
        cookingInstructions: "Soak for 30 minutes before cooking.",
      },
      {
        name: "Rajabogam Ponni",
        image: "/images/brand-rice.png",
        description: "Rajabogam Ponni is known for its rich taste.",
        benefits: "Good for heart health.",
        cookingInstructions: "Boil for 15-20 minutes.",
      },
      {
        name: "Nayam Ponni",
        image: "/images/brand-rice.png",
        description: "Nayam Ponni is a premium choice for festival meals.",
        benefits: "High in antioxidants.",
        cookingInstructions: "Use 1:1.5 rice-to-water ratio.",
      },
    ],
  },
  Basmati: {
    image: "/images/brand-rice.png",
    description: "Basmati rice is a long-grain rice with a nutty flavor.",
    benefits: "Low glycemic index, great for weight management.",
    cookingInstructions: "Rinse and soak for 30 minutes before cooking.",
    subcategories: [
      {
        name: "Royal Basmati",
        image: "/images/brand-rice.png",
        description: "Royal Basmati is known for its aromatic fragrance.",
        benefits: "Good for detoxification.",
        cookingInstructions: "Use 1:1.75 rice-to-water ratio.",
      },
    ],
  },
  Zeera: {
    image: "/images/brand-rice.png",
    description: "Zeera rice has a mild cumin flavor and is aromatic.",
    benefits: "Good for digestion and metabolism.",
    cookingInstructions: "Cook with whole spices for added flavor.",
    subcategories: [],
  },
};

function ProductGallery() {
  const [selectedRice, setSelectedRice] = useState(null);
  const [expandedRice, setExpandedRice] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  useEffect(() => {
    const firstRice = Object.keys(riceData)[0]; 
    setSelectedRice(firstRice);
  }, []);

  const handleRiceClick = (riceName) => {
    if (riceData[riceName].subcategories.length > 0) {
      setExpandedRice(expandedRice === riceName ? null : riceName);
      if (expandedRice !== riceName) {
        setSelectedRice(riceName);
        setSelectedSubcategory(null);
      }
    } else {
      setSelectedRice(riceName);
      setSelectedSubcategory(null);
      setExpandedRice(null);
    }
  };

  const handleSubcategoryClick = (riceName, subcategory) => {
    setSelectedRice(riceName);
    setSelectedSubcategory(subcategory);
  };

  const getDisplayData = () => {
    if (selectedSubcategory) {
      return selectedSubcategory;
    }
    if (selectedRice) {
      return riceData[selectedRice];
    }
    return null;
  };

  const displayData = getDisplayData();

  return (
    <section className="pr-20 py-16 bg-[#F6F6F6CC]">
      <div>
        <h1 className="text-[#282C4B] pl-20 pb-10 font-bold text-6xl font-anderson">
          Product Gallery
        </h1>
      </div>

      <div className="flex space-x-8">
        <div className=" w-1/5">
          <div className="space-y-2">
            {Object.keys(riceData).map((riceName) => (
              <div key={riceName} className="rounded-md overflow-hidden">
                <div
                  className={`p-3 pl-20 cursor-pointer flex items-center justify-between relative ${
                    selectedRice === riceName && !selectedSubcategory
                      ? "text-[#017807]"
                      : "text-[#666666]"
                  } `}
                  onClick={() => handleRiceClick(riceName)}
                >
                  <div className="flex items-center gap-2 w-full">
                    <span className="text-xl">
                      {riceName}
                    </span>
                    {selectedRice === riceName && !selectedSubcategory && (
                      <div className="w-3 h-6 bg-[#017807] rounded-r-full absolute left-0" />
                    )}
                  </div>
                  {riceData[riceName].subcategories.length > 0 && (
                    <span className={` ${
                      selectedRice === riceName && !selectedSubcategory 
                        ? "text-[#017807]"
                        : "text-gray-500"
                    }`}>
                      {expandedRice === riceName ? (
                        <ChevronDown size={20} />
                      ) : (
                        <ChevronRight size={20} />
                      )}
                    </span>
                  )}
                </div>
                {expandedRice === riceName && (
                  <div className="">
                    {riceData[riceName].subcategories.map((sub) => (
                      <div
                        key={sub.name}
                        className={`pl-24 text-lg cursor-pointer relative ${
                          selectedSubcategory?.name === sub.name
                            ? "text-[#017807]"
                            : "text-[#666666]"
                        } `}
                        onClick={() => handleSubcategoryClick(riceName, sub)}
                      >
                        <div className="flex items-center py-1 gap-5">
                          <span>{sub.name}</span>
                          {selectedSubcategory?.name === sub.name && (
                                                 <div className="w-3 h-6 bg-[#017807] rounded-r-full absolute left-0" />

                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {displayData ? (
          <>
            <div className="w-1/3 flex items-center justify-center">
              <img
                src={displayData.image}
                alt={selectedSubcategory?.name || selectedRice}
                className="w-[600px] h-[600px] shadow-lg"
              />
            </div>

            <div className="w-1/3 pl-10">
              <h2 className="text-4xl font-ubuntu font-medium text-[#017807] mb-4">
                {selectedSubcategory?.name || selectedRice}
              </h2>
              <div className="space-y-10">
                <div>
                  <p className="text-[#747582] font-ubuntu text-xl">{displayData.description}</p>
                </div>
                <div>
                    <h3 className=" text-2xl text-[#017807]">Benefits</h3>
                    <p className="text-[#747582] font-ubuntu text-xl leading-relaxed">{displayData.benefits}</p>
                </div>
                <div>
                  <h3 className=" text-2xl text-[#017807]">Cooking Method</h3>
                  <p className="text-[#747582] font-ubuntu text-xl leading-relaxed">{displayData.cookingInstructions}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="w-2/3 flex items-center justify-center text-gray-500">
            Please select a rice type to view details
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductGallery;
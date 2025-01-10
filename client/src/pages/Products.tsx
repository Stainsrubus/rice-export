
import ArrowRight from "../../public/svg/right arrow.svg"
import { useNavigate } from 'react-router-dom';
const productData = [
  {
    id: "CAT-001",
    name: "RICE",
    image: "/api/placeholder/300/200",
    subcategories: [
      {
        id: "SUB-001",
        name: "Ponni Rice",
        image: "/images/ponni.png",
        products: [
          {
            id: "PROD-001",
            name: "Amman Ponni",
            image: "/api/placeholder/300/200",
            description: "Amman Ponni Rice is a premium, aromatic rice known for its firm texture and perfect for daily meals and South Indian dishes.",
            benefits: "Easy to digest, low in fat, rich in carbohydrates, provides energy, and supports healthy digestion.",
            cookingMethod: "Rinse 1 cup Amman Ponni Rice, soak for 15-20 minutes. Cook with 2 cups water, bring to a boil, cover, and cook for 1 whistle."
          },
          {
            id: "PROD-002",
            name: "JSR Ponni Rice",
            image: "/api/placeholder/300/200",
            description: "JSR Ponni Rice is a high-quality, aromatic rice variety, known for its non-sticky texture and suitability for everyday meals.",
            benefits: "Easy to digest, rich in carbohydrates, helps boost energy, and is ideal for healthy, daily meals.",
            cookingMethod: "Rinse 1 cup JSR Ponni Rice, soak for 15-20 minutes. Cook with 2 cups water, bring to a boil, cook for 1 whistle."
          },
          {
            id: "PROD-003",
            name: "Akshaya Ponni Rice",
            image: "/api/placeholder/300/200",
            description: "Akshaya Ponni Rice is a long-grain variety, widely used for making fragrant, soft rice perfect for biryanis and curries.",
            benefits: "Rich in essential nutrients, provides energy, is low in fat, and supports digestion and heart health.",
            cookingMethod: "Rinse 1 cup Akshaya Ponni Rice, soak for 15-20 minutes. Cook with 2 cups water, bring to a boil, cook for 1 whistle."
          },
          {
            id: "PROD-004",
            name: "RNR Ponni Rice",
            image: "/api/placeholder/300/200",
            description: "RNR Ponni Rice is a premium variety known for its long grains, fluffy texture, and versatility in various dishes.",
            benefits: "Rich in fiber, low in fat, supports digestion, and provides steady energy throughout the day.",
            cookingMethod: "Rinse 1 cup RNR Ponni Rice, soak for 15-20 minutes. Cook with 2 cups water, bring to a boil, cook for 1 whistle."
          },
          {
            id: "PROD-005",
            name: "Ponni Brown Rice",
            image: "/api/placeholder/300/200",
            description: "Ponni Brown Rice is a whole-grain variety, known for its rich, nutty flavor and higher fiber content compared to white rice.",
            benefits: "Aids digestion, promotes heart health, provides essential nutrients, and supports weight management due to its high fiber content.",
            cookingMethod: "Rinse 1 cup Ponni Brown Rice, soak for 30-40 minutes. Cook with 2.5 cups water, bring to a boil, cook for 1 whistle."
          },
          {
            id: "PROD-006",
            name: "Sonna Masoori Rice",
            image: "/api/placeholder/300/200",
            description: "Sonna Masoori Rice is a premium, aromatic medium-grain variety known for its delicate texture, fragrant aroma, and versatility in cooking.",
            benefits: "Low in calories, easy to digest, rich in carbohydrates, promotes heart health, and is ideal for weight management.",
            cookingMethod: "Rinse 1 cup Sonna Masoori Rice, soak for 15-20 minutes. Cook with 2 cups water, bring to a boil, cook for 1 whistle."
          }
        ]
      },
      {
        id: "SUB-002",
        name: "Matta Rice",
        image: "/images/matta.png",
        products: [
          {
            id: "PROD-007",
            name: "Unda Matta Rice",
            image: "/api/placeholder/300/200",
            description: "Unda Matta Rice is a traditional, short-grain variety, known for its unique shape and firm texture, perfect for Kerala-style dishes.",
            benefits: "Rich in fiber, supports digestion, helps in weight management, and provides energy for the day.",
            cookingMethod: "Rinse 1 cup Unda Matta Rice, soak for 30 minutes. Cook with 2-2.5 cups water, bring to a boil, and cook for 20-25 minutes."
          },
          {
            id: "PROD-008",
            name: "Vadi Matta Rice",
            image: "/api/placeholder/300/200",
            description: "Vadi Matta Rice is a red rice variety with a robust texture and earthy flavor, commonly used in Kerala and other South Indian regions.",
            benefits: "High in antioxidants, rich in fiber, promotes heart health, and aids in digestion, making it a nutritious choice.",
            cookingMethod: "Rinse 1 cup Vada Matti Rice, soak for 30-40 minutes. Cook with 2.5 cups water, bring to a boil, cook for 25-30 minutes."
          }
        ]
      },
{
  id: "SUB-003",
  name: "Seeraga Samba Rice",
  image: "/images/seeraga-samba.webp",
  products: [
    {
      id: "PROD-009",
      name: "Jeerakasala Rice",
      image: "/api/placeholder/300/200",
      description: "Jeerakasala Rice is a fragrant, short-grain rice variety, popularly used for making biryani and other flavorful dishes.",
      benefits: "Rich in aroma, easy to digest, low in fat, and provides a source of quick energy, while supporting heart health.",
      cookingMethod: "Rinse 1 cup Jeerakasala Rice, soak for 20 minutes. Cook with 2 cups water, bring to a boil, cook for 15-20 minutes."
    }
  ]
},
{
  id: "SUB-004",
  name: "Basmati Rice",
  image: "/images/basmati.png",
  products: [
    {
      id: "PROD-010",
      name: "Raw Basmati Rice",
      image: "/api/placeholder/300/200",
      description: "Raw Basmati Rice is a long-grain, aromatic variety known for its rich fragrance and delicate texture, perfect for making biryanis and pilafs.",
      benefits: "Low glycemic, high in fiber, promotes heart health, aids digestion, and provides long-lasting energy.",
      cookingMethod: "Rinse 1 cup Raw Basmati Rice, soak for 20-30 minutes. Cook with 1.5 cups water, bring to a boil, cover, and cook for 1 whistle."
    },
    {
      id: "PROD-011",
      name: "Basmati Sella (Boiled) Rice",
      image: "/api/placeholder/300/200",
      description: "Basmati Sella Rice is a parboiled version of traditional Basmati rice, known for its firm texture, long grains, and ability to remain separate after cooking.",
      benefits: "Rich in fiber, supports digestion, helps control blood sugar, low glycemic, and provides lasting energy.",
      cookingMethod: "Rinse 1 cup Basmati Sella Rice, soak for 15-20 minutes. Cook with 1.75 cups water, bring to a boil, cook for 1 whistle."
    },
    {
      id: "PROD-012",
      name: "Basmati Steam Rice",
      image: "/api/placeholder/300/200",
      description: "Basmati Steam Rice is a carefully steamed, aromatic rice variety that retains its nutrients and delicate fragrance, ideal for traditional dishes.",
      benefits: "Rich in fiber, promotes heart health, aids digestion, is low in fat, and provides steady energy throughout the day.",
      cookingMethod: "Rinse 1 cup Basmati Steam Rice, soak for 10-15 minutes. Cook with 1.5 cups water, bring to a boil, cook for 1 whistle."
    }
  ]
},
{
  "id": "SUB-005",
  "name": "Idly Rice",
  "image": "/images/idly-rice.jpg",
  "products": [
    {
      "id": "PROD-013",
      "name": "Idli Rice",
      "image": "/api/placeholder/300/200",
      "description": "Idli Rice is a short-grain rice variety specially used for making soft, fluffy idlis, a staple South Indian breakfast dish.",
      "benefits": "Easy to digest, rich in carbohydrates, low in fat, helps improve gut health, and provides steady energy.",
      "cookingMethod": "Soak 1 cup Idli Rice with 1/4 cup urad dal for 4-6 hours. Grind into a smooth batter, ferment overnight, and steam for 10-15 minutes."
    }
  ]
},
{
  "id": "SUB-006",
  "name": "Kaima Rice",
  "image": "/images/kaima.png",
  "products": [
    {
      "id": "PROD-014",
      "name": "Kaima Raw Rice",
      "image": "/api/placeholder/300/200",
      "description": "Kaima Raw Rice, also known as Jeerakasala or Khaima Rice, is a fragrant, short-grain variety popular in South India for its distinct aroma and soft, fluffy texture, ideal for biryanis and pulavs.",
      "benefits": "Rich in carbohydrates, easy to digest, supports digestion, promotes heart health, and provides a steady source of energy.",
      "cookingMethod": "Rinse 1 cup Kaima Raw Rice, soak for 20 minutes. Cook with 2 cups water, bring to a boil, and cook for 15-20 minutes"
    },
    {
      "id": "PROD-015",
      "name": "Kaima Sella (Boiled) Rice",
      "image": "/api/placeholder/300/200",
      "description": "Kaima Sella Rice, a parboiled version of Kaima Rice, has a firmer texture and is more resilient during cooking, making it perfect for dishes like biryanis that require grains to stay separate.",
      "benefits": "High in fiber, promotes digestion, helps control blood sugar levels, and provides a long-lasting energy boost.",
      "cookingMethod": "Rinse 1 cup Kaima Sella Rice, soak for 15-20 minutes. Cook with 2 cups water, bring to a boil, cook for 1 whistle."
    },
    {
      "id": "PROD-016",
      "name": "Kaima Steam Rice",
      "image": "/api/placeholder/300/200",
      "description": "Kaima Steam Rice is a steamed version of Kaima Rice, which retains nutrients and offers a light, fluffy texture, ideal for traditional South Indian meals like biryanis and pulaos.",
      "benefits": "Rich in fiber, aids digestion, supports heart health, and provides a good source of energy throughout the day.",
      "cookingMethod": "Rinse 1 cup Kaima Steam Rice, soak for 10-15 minutes. Cook with 1.5 cups water, bring to a boil, cook for 1 whistle."
    }
  ]
}
]
},
{
  id: "CAT-002",
  name: "Traditional Rice Variety",
  image: "/api/placeholder/300/200",
  subcategories: [
    {
      id: "SUB-005",
      name: "Karupu Kavuni",
      image: "/api/placeholder/300/200",
      products: [
        {
          id: "PROD-013",
          name: "Karupu Kavuni (Boiled) Rice",
          image: "/api/placeholder/300/200",
          description: "Karupu Kavuni (Boiled) Rice, also known as Black Rice, is a unique, dark-hued rice variety with a slightly nutty flavor and chewy texture.",
          benefits: "Rich in antioxidants, high in fiber, promotes digestion, supports heart health, and helps in weight management.",
          cookingMethod: "Rinse 1 cup Karupu Kavuni Rice, soak for 30-40 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 25-30 minutes."
        },
        {
          id: "PROD-014",
          name: "Karupu Kavuni (Raw) Rice",
          image: "/api/placeholder/300/200",
          description: "Karupu Kavuni (Raw) Rice is the unprocessed version of Black Rice, known for its distinctive dark color and rich, earthy flavor.",
          benefits: "Packed with antioxidants, supports digestive health, boosts immunity, and is rich in essential nutrients like iron and fiber.",
          cookingMethod: "Rinse 1 cup Karupu Kavuni Rice, soak for 30-40 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 30-35 minutes."
        }
      ]
    }
  ]
},
{
  id: "CAT-003",
  name: "MILLETS",
  image: "/api/placeholder/300/200",
  subcategories: [
    {
      id: "SUB-006",
      name: "Common Millets",
      image: "/api/placeholder/300/200",
      products: [
        {
          id: "PROD-015",
          name: "Varagu (Kodo Millet)",
          image: "/api/placeholder/300/200",
          description: "Varagu is a nutritious, gluten-free grain with a mild, nutty flavor. It's commonly used in South Indian dishes, including rice alternatives, thin items, and porridge.",
          benefits: "Rich in fiber, antioxidants, supports digestion, regulates blood sugar levels, and is an excellent source of energy.",
          cookingMethod: "Rinse 1 cup Varagu, soak for 20-30 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 15-20 minutes."
        },
        {
          id: "PROD-016",
          name: "Samai (Little Millet)",
          image: "/api/placeholder/300/200",
          description: "Samai is a small, gluten-free grain rich in fiber and minerals, commonly used in South Indian cuisine to make rice dishes, upma, and porridges.",
          benefits: "Rich in fiber, aids digestion, regulates blood sugar, and is an excellent source of iron and magnesium.",
          cookingMethod: "Rinse 1 cup Samai, soak for 15-20 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 15-20 minutes."
        }
      ]
    }
  ]
},
{
  id: "CAT-004",
  name: "SPECIAL VARIETY",
  image: "/api/placeholder/300/200",
  subcategories: [
    {
      id: "SUB-007",
      name: "Special Grains",
      image: "/api/placeholder/300/200",
      products: [
        {
          id: "PROD-017",
          name: "Buckwheat",
          image: "/api/placeholder/300/200",
          description: "Buckwheat is a nutrient-dense, gluten-free pseudo-grain with a slightly earthy flavor. It is commonly used in making porridge, pancakes, and as a rice substitute in various dishes.",
          benefits: "High in protein, fiber, antioxidants, and essential minerals. It helps support heart health, regulate blood sugar, and improve digestion.",
          cookingMethod: "Rinse 1 cup Buckwheat, soak for 15-20 minutes. Cook with 2 cups water, bring to a boil, and simmer for 10-12 minutes until tender."
        },
        {
          id: "PROD-018",
          name: "Amaranthus (Raja Kirai Vithai)",
          image: "/api/placeholder/300/200",
          description: "Amaranthus is a highly nutritious leafy plant used as a grain. It has a mild, nutty flavor and is commonly used in porridges, soups, and salads.",
          benefits: "Rich in protein, fiber, iron, calcium, and antioxidants, supports immune function, promotes digestion, and helps improve bone health.",
          cookingMethod: "Rinse 1 cup Amaranthus, soak for 15-20 minutes. Cook with 2 cups water, bring to a boil, and cook for 15-20 minutes."
        }
      ]
    }
  ]
},

{
  id: "CAT-005",
  name: "VALUE ADDED PRODUCTS",
  image: "/api/placeholder/300/200",
  subcategories: [
    {
      id: "SUB-009",
      name: "Dosa Mix",
      image: "/api/placeholder/300/200",
      products: [
        {
          id: "PROD-024",
          name: "Varagu Dosa Mix",
          image: "/api/placeholder/300/200",
          description: "Kodo Millet Dosa Mix",
          type: "Dosa Mix"
        },
        {
          id: "PROD-025",
          name: "Samai Dosa Mix",
          image: "/api/placeholder/300/200",
          description: "Little Millet Dosa Mix",
          type: "Dosa Mix"
        },
        {
          id: "PROD-026",
          name: "Thinai Dosa Mix",
          image: "/api/placeholder/300/200",
          description: "Foxtail Millet Dosa Mix",
          type: "Dosa Mix"
        },
        {
          id: "PROD-027",
          name: "Kuthiraivali Dosa Mix",
          image: "/api/placeholder/300/200",
          description: "Barnyard Millet Dosa Mix",
          type: "Dosa Mix"
        },
        {
          id: "PROD-028",
          name: "Raagi Dosa Mix",
          image: "/api/placeholder/300/200",
          description: "Finger Millet Dosa Mix",
          type: "Dosa Mix"
        },
        {
          id: "PROD-029",
          name: "Kambu Dosa Mix",
          image: "/api/placeholder/300/200",
          description: "Pearl Millet Dosa Mix",
          type: "Dosa Mix"
        },
        {
          id: "PROD-030",
          name: "Panivaragu Dosa Mix",
          image: "/api/placeholder/300/200",
          description: "Proso Millet Dosa Mix",
          type: "Dosa Mix"
        }
      ]
    },
    {
      id: "SUB-010",
      name: "Rice Flour",
      image: "/api/placeholder/300/200",
      products: [
        {
          id: "PROD-031",
          name: "Rice Flour",
          image: "/api/placeholder/300/200",
          description: "Traditional rice flour for various preparations",
          type: "Flour"
        },
        {
          id: "PROD-032",
          name: "Puttu Flour",
          image: "/api/placeholder/300/200",
          description: "Special rice flour for making puttu",
          type: "Flour"
        }
      ]
    }
  ]
}
]

function Products() {
  const navigate = useNavigate();

  const riceCategory = productData.find(category => category.name === "RICE");
  const riceSubcategories = riceCategory?.subcategories || [];

  const handleKnowMoreClick = (id: string,_id:any) => {
    navigate(`/product/${id}?_id=${_id}`);
  };
  const handleViewMoreClick = () => {
    if (riceSubcategories.length > 0) {
      navigate(`/product/ind${riceSubcategories[0].id}`);
    }
  };

  return (
    <section className="lg:pr-20 px-5 lg:py-24 py-5">
      <div className="flex justify-between  pb-10">
        <h1 className="text-[#282C4B] lg:pl-20 lg:pb-10 font-bold lg:text-6xl text-3xl font-anderson">
          Products
        </h1>
        <p onClick={handleViewMoreClick} className="cursor-pointer font-ubuntu lg:gap-3 gap-1 flex justify-center items-center lg:text-3xl text-lg text-[#017807] font-medium">
          View More 
          <span className="text-white p-1 bg-[#017807]  rounded-full"> 
<img src={ArrowRight} alt="arrow" />
          </span>
        </p>
      </div>

      <div className="flex ">
         <div className="grid lg:grid-cols-3 grid-cols-2  lg:pl-20 w-full justify-between lg:gap-10 gap-3">
         {riceSubcategories.map((subcategory:any,index:any) => (
  <div key={subcategory.id} className="hover:shadow-lg lg:h-[500px] lg:w-[410px] transition-shadow cursor-pointer">
    <div className="flex justify-center">
      <img loading="lazy" src={subcategory.image} alt={`${subcategory.name} image`} className="  object-cover lg:w-[410px] lg:h-[350px] h-[145px] w-[171px]" />
    </div>
    <div className="pt-6 py-6 text-center">
      <h3 className="font-bold lg:text-4xl text-lg text-[#282C4B] font-anderson mb-2">{subcategory.name}</h3>
      <p className="lg:text-xl text-base font-ubuntu font-medium text-[#747582] mb-3">{subcategory.products.length} Varieties</p>
      <p  onClick={() => handleKnowMoreClick(index,subcategory.id)}  className="font-ubuntu hover:underline font-medium lg:text-lg text-base text-[#017807]">Know More</p>
    </div>
  </div>
))}
        </div>

      </div>
      <div className="flex justify-center items-center lg:pt-20 pt-10 cursor-pointer">
         <div className="">
         <p onClick={handleViewMoreClick} className="font-ubuntu gap-3  flex justify-center items-center text-3xl  text-[#017807] font-medium">
          View More 
          <span className="text-white p-1 bg-[#017807]  rounded-full"> 
<img src={ArrowRight} alt="arrow" />
          </span>
        </p>
        <hr className="bg-[#017807] mt-2 h-0.5" />
         </div>

      </div>
    </section>
  );
}

export default Products;

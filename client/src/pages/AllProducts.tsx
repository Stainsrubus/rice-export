import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from './Footer';
import left from "../../public/svg/weui_arrow-filled.svg"
import sideNav from "../../public/images/side-nav.png"
import sideNavClose from "../../public/images/sideNav-close.png"
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';

  interface Product {
    id: string;
    name: string;
    image: string;
    description: string;
    benefits?: string;
    cookingMethod?: string;
    type?: string;
}

interface Subcategory {
    id: string;
    name: string;
    image: string;
    products: Product[];
}

export interface Category {
    id: string;
    name: string;
    image: string;
    subcategories: Subcategory[];
}

// Assuming productData is imported from somewhere
export const productData: Category[] = [
    {
        "id": "CAT-001",
        "name": "Rice Varieties",
        "image": "/api/placeholder/300/200",
        "subcategories": [
          {
            "id": "SUB-001",
            "name": "Ponni Rice",
            "image": "/images/ponni.png",
            "products": [
              {
                "id": "PROD-001",
                "name": "Amman Ponni",
                "image": "/images/ponni.png",
                "description": "Amman Ponni Rice is a premium, aromatic rice known for its firm texture and perfect for daily meals and South Indian dishes.",
                "benefits": "Easy to digest, low in fat, rich in carbohydrates, provides energy, and supports healthy digestion.",
                "cookingMethod": "Rinse 1 cup Amman Ponni Rice, soak for 15-20 minutes. Cook with 2 cups water, bring to a boil, cover, and cook for 1 whistle."
              },
              {
                "id": "PROD-002",
                "name": "JSR Ponni Rice",
                "image": "/images/ponni.png",
                "description": "JSR Ponni Rice is a high-quality, aromatic rice variety, known for its non-sticky texture and suitability for everyday meals.",
                "benefits": "Easy to digest, rich in carbohydrates, helps boost energy, and is ideal for healthy, daily meals.",
                "cookingMethod": "Rinse 1 cup JSR Ponni Rice, soak for 15-20 minutes. Cook with 2 cups water, bring to a boil, cook for 1 whistle."
              },
              {
                "id": "PROD-003",
                "name": "Akshaya Ponni Rice",
                "image": "/images/ponni.png",
                "description": "Akshaya Ponni Rice is a long-grain variety, widely used for making fragrant, soft rice perfect for biryanis and curries.",
                "benefits": "Rich in essential nutrients, provides energy, is low in fat, and supports digestion and heart health.",
                "cookingMethod": "Rinse 1 cup Akshaya Ponni Rice, soak for 15-20 minutes. Cook with 2 cups water, bring to a boil, cook for 1 whistle."
              },
              {
                "id": "PROD-004",
                "name": "RNR Ponni Rice",
                "image": "/images/ponni.png",
                "description": "RNR Ponni Rice is a premium variety known for its long grains, fluffy texture, and versatility in various dishes.",
                "benefits": "Rich in fiber, low in fat, supports digestion, and provides steady energy throughout the day.",
                "cookingMethod": "Rinse 1 cup RNR Ponni Rice, soak for 15-20 minutes. Cook with 2 cups water, bring to a boil, cook for 1 whistle."
              },
              {
                "id": "PROD-005",
                "name": "Ponni Brown Rice",
                "image": "/images/ponni.png",
                "description": "Ponni Brown Rice is a whole-grain variety, known for its rich, nutty flavor and higher fiber content compared to white rice.",
                "benefits": "Aids digestion, promotes heart health, provides essential nutrients, and supports weight management due to its high fiber content.",
                "cookingMethod": "Rinse 1 cup Ponni Brown Rice, soak for 30-40 minutes. Cook with 2.5 cups water, bring to a boil, cook for 1 whistle."
              },
              {
                "id": "PROD-006",
                "name": "Sonna Masoori Rice",
                "image": "/images/ponni.png",
                "description": "Sonna Masoori Rice is a premium, aromatic medium-grain variety known for its delicate texture, fragrant aroma, and versatility in cooking.",
                "benefits": "Low in calories, easy to digest, rich in carbohydrates, promotes heart health, and is ideal for weight management.",
                "cookingMethod": "Rinse 1 cup Sonna Masoori Rice, soak for 15-20 minutes. Cook with 2 cups water, bring to a boil, cook for 1 whistle."
              }
            ]
          },
          {
            "id": "SUB-002",
            "name": "Matta Rice",
            "image": "/images/matta.png",
            "products": [
              {
                "id": "PROD-007",
                "name": "Unda Matta Rice",
                "image": "/images/matta.png",
                "description": "Unda Matta Rice is a traditional, short-grain variety, known for its unique shape and firm texture, perfect for Kerala-style dishes.",
                "benefits": "Rich in fiber, supports digestion, helps in weight management, and provides energy for the day.",
                "cookingMethod": "Rinse 1 cup Unda Matta Rice, soak for 30 minutes. Cook with 2-2.5 cups water, bring to a boil, and cook for 20-25 minutes."
              },
              {
                "id": "PROD-008",
                "name": "Vadi Matta Rice",
                "image": "/images/matta.png",
                "description": "Vadi Matta Rice is a red rice variety with a robust texture and earthy flavor, commonly used in Kerala and other South Indian regions.",
                "benefits": "High in antioxidants, rich in fiber, promotes heart health, and aids in digestion, making it a nutritious choice.",
                "cookingMethod": "Rinse 1 cup Vada Matti Rice, soak for 30-40 minutes. Cook with 2.5 cups water, bring to a boil, cook for 25-30 minutes."
              }
            ]
          },
          {
            "id": "SUB-003",
            "name": "Seeraga Samba Rice",
            "image": "/images/seeraga-samba.webp",
            "products": [
              {
                "id": "PROD-009",
                "name": "Jeerakasala Rice",
                "image": "/images/seeraga-samba.webp",
                "description": "Jeerakasala Rice is a fragrant, short-grain rice variety, popularly used for making biryani and other flavorful dishes.",
                "benefits": "Rich in aroma, easy to digest, low in fat, and provides a source of quick energy, while supporting heart health.",
                "cookingMethod": "Rinse 1 cup Jeerakasala Rice, soak for 20 minutes. Cook with 2 cups water, bring to a boil, cook for 15-20 minutes."
              }
            ]
          },
          {
            "id": "SUB-004",
            "name": "Basmati Rice",
            "image": "/images/basmati.png",
            "products": [
              {
                "id": "PROD-010",
                "name": "Raw Basmati Rice",
                "image": "/images/basmati.png",
                "description": "Raw Basmati Rice is a long-grain, aromatic variety known for its rich fragrance and delicate texture, perfect for making biryanis and pilafs.",
                "benefits": "Low glycemic, high in fiber, promotes heart health, aids digestion, and provides long-lasting energy.",
                "cookingMethod": "Rinse 1 cup Raw Basmati Rice, soak for 20-30 minutes. Cook with 1.5 cups water, bring to a boil, cover, and cook for 1 whistle."
              },
              {
                "id": "PROD-011",
                "name": "Basmati Sella (Boiled) Rice",
                "image": "/images/basmati.png",
                "description": "Basmati Sella Rice is a parboiled version of traditional Basmati rice, known for its firm texture, long grains, and ability to remain separate after cooking.",
                "benefits": "Rich in fiber, supports digestion, helps control blood sugar, low glycemic, and provides lasting energy.",
                "cookingMethod": "Rinse 1 cup Basmati Sella Rice, soak for 15-20 minutes. Cook with 1.75 cups water, bring to a boil, cook for 1 whistle."
              },
              {
                "id": "PROD-012",
                "name": "Basmati Steam Rice",
                "image": "/images/basmati.png",
                "description": "Basmati Steam Rice is a carefully steamed, aromatic rice variety that retains its nutrients and delicate fragrance, ideal for traditional dishes.",
                "benefits": "Rich in fiber, promotes heart health, aids digestion, is low in fat, and provides steady energy throughout the day.",
                "cookingMethod": "Rinse 1 cup Basmati Steam Rice, soak for 10-15 minutes. Cook with 1.5 cups water, bring to a boil, cook for 1 whistle."
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
                "image": "/images/idly-rice.jpg",
                "description": "Idli Rice is a short-grain rice variety specially used for making soft, fluffy idlis and dosas, a staple in South Indian cuisine.",
                "benefits": "Helps in digestion, rich in carbohydrates, ideal for breakfast, and provides a quick source of energy.",
                "cookingMethod": "Soak 1 cup Idli Rice and 1/2 cup urad dal for 4-6 hours. Grind to a fine paste, ferment overnight. Steam in idli mold for 10-12 minutes."
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
                "image": "/images/kaima-rice.jpg",
                "description": "Kaima Raw Rice, also known as Jeerakasala or Khaima Rice, is a fragrant, short-grain variety popular in South India for its distinct aroma and soft, fluffy texture, ideal for biryanis and pulavs.",
                "benefits": "Rich in carbohydrates, easy to digest, supports digestion, promotes heart health, and provides a steady source of energy.",
                "cookingMethod": "Rinse 1 cup Kaima Raw Rice, soak for 20 minutes. Cook with 2 cups water, bring to a boil, and cook for 15-20 minutes"
              },
              {
                "id": "PROD-015",
                "name": "Kaima Sella (Boiled) Rice",
                "image": "/images/kaima-rice.jpg",
                "description": "Kaima Sella Rice, a parboiled version of Kaima Rice, has a firmer texture and is more resilient during cooking, making it perfect for dishes like biryanis that require grains to stay separate.",
                "benefits": "High in fiber, promotes digestion, helps control blood sugar levels, and provides a long-lasting energy boost.",
                "cookingMethod": "Rinse 1 cup Kaima Sella Rice, soak for 15-20 minutes. Cook with 2 cups water, bring to a boil, cook for 1 whistle."
              },
              {
                "id": "PROD-016",
                "name": "Kaima Steam Rice",
                     "image": "/images/kaima-rice.jpg",
                "description": "Kaima Steam Rice is a steamed version of Kaima Rice, which retains nutrients and offers a light, fluffy texture, ideal for traditional South Indian meals like biryanis and pulaos.",
                "benefits": "Rich in fiber, aids digestion, supports heart health, and provides a good source of energy throughout the day.",
                "cookingMethod": "Rinse 1 cup Kaima Steam Rice, soak for 10-15 minutes. Cook with 1.5 cups water, bring to a boil, cook for 1 whistle."
              }
            ]
          }
        ]
      },
  {
    "id": "CAT-002",
    "name": "Traditional Rice Variety",
    "image": "/images/traditional_rice_variety.png",
    "subcategories": [
      {
        "id": "SUB-005",
        "name": "Karupu Kavuni",
        "image": "/images/karupukavuni.png",
        "products": [
          {
            "id": "PROD-013",
            "name": "Karupu Kavuni (Boiled) Rice",
            "image": "/images/karupukavuni.png",
            "description": "Karupu Kavuni (Boiled) Rice, also known as Black Rice, is a unique, dark-hued rice variety with a slightly nutty flavor and chewy texture.",
            "benefits": "Rich in antioxidants, high in fiber, promotes digestion, supports heart health, and helps in weight management.",
            "cookingMethod": "Rinse 1 cup Karupu Kavuni Rice, soak for 30-40 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 25-30 minutes."
          },
          {
            "id": "PROD-014",
            "name": "Karupu Kavuni (Raw) Rice",
            "image": "/images/karupukavuni.png",
            "description": "Karupu Kavuni (Raw) Rice is the unprocessed version of Black Rice, known for its distinctive dark color and rich, earthy flavor.",
            "benefits": "Packed with antioxidants, supports digestive health, boosts immunity, and is rich in essential nutrients like iron and fiber.",
            "cookingMethod": "Rinse 1 cup Karupu Kavuni Rice, soak for 30-40 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 30-35 minutes."
          }
        ]
      },
      {
        "id": "SUB-006",
        "name": "Mapilai Samba",
        "image": "/images/mapilaisamba.jpg",
        "products": [
          {
            "id": "PROD-015",
            "name": "Mapilai Samba Raw Rice",
            "image": "/images/mapilaisamba.jpg",
            "description": "Mapilai Samba Raw Rice is an unprocessed variety of this traditional rice, known for its aromatic fragrance and firm texture.",
            "benefits": "High in fiber, rich in antioxidants, aids digestion, supports heart health, and provides sustained energy.",
            "cookingMethod": "Rinse 1 cup Mapilai Samba Raw Rice, soak for 30 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 25-30 minutes."
          },
          {
            "id": "PROD-016",
            "name": "Mapilai Samba Boiled Rice",
            "image": "/images/mapilaisamba.jpg",
            "description": "Mapilai Samba Boiled Rice is the parboiled version of Mapilai Samba Rice, which retains more nutrients and has a firmer texture, making it ideal for dishes that require non-sticky rice.",
            "benefits": "Rich in fiber, promotes heart health, aids digestion, and provides a steady energy source throughout the day.",
            "cookingMethod": "Rinse 1 cup Mapilai Samba Boiled Rice, soak for 20 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 20-25 minutes."
          },
          {
            "id": "PROD-017",
            "name": "Mapilai Samba Semi Polished Rice",
            "image": "/images/mapilaisamba.jpg",
            "description": "Mapilai Samba Semi Polished Rice is a special type of rice with a unique processing method that enhances its flavor and texture.",
            "benefits": "Rich in essential nutrients, antioxidants, and fiber, which aid in digestion, support heart health, and help maintain a healthy weight.",
            "cookingMethod": "Rinse 1 cup Mapilai Samba Kaikuthal Rice, soak for 30 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 20-25 minutes."
          }
        ]
      },
      {
        "id": "SUB-007",
        "name": "Kattuyanam",
        "image": "/images/kattuyanam.png",
        "products": [
          {
            "id": "PROD-018",
            "name": "Kattuyanam Raw Rice",
            "image": "/images/kattuyanam.png",
            "description": "Kattuyanam Raw Rice is a traditional, aromatic, and medium-grain rice with a rich flavor and firm texture.",
            "benefits": "Rich in fiber, supports digestive health, improves heart health, and provides long-lasting energy throughout the day.",
            "cookingMethod": "Rinse 1 cup Kattuyanam Raw Rice, soak for 30 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 25-30 minutes."
          },
          {
            "id": "PROD-019",
            "name": "Kattuyanam Boiled Rice",
            "image": "/images/kattuyanam.png",
            "description": "Kattuyanam Boiled Rice is a parboiled version of this traditional rice, known for its firmer texture and nutrient retention.",
            "benefits": "High in fiber, aids digestion, supports heart health, and provides sustained energy.",
            "cookingMethod": "Rinse 1 cup Kattuyanam Boiled Rice, soak for 20 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 20-25 minutes."
          },
          {
            "id": "PROD-020",
            "name": "Kattuyanam Semi Polished Rice",
            "image": "/images/kattuyanam.png",
            "description": "Kattuyanam Semi Polished Rice is specially processed to enhance its flavor and texture, making it a popular choice for South Indian delicacies.",
            "benefits": "Rich in antioxidants, high in fiber, promotes digestion, supports heart health, and helps maintain weight.",
            "cookingMethod": "Rinse 1 cup Kattuyanam Semi polished Rice, soak for 30 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 20-25 minutes."
          }
        ]
      },
      {
        "id": "SUB-008",
        "name": "Karunguruvai",
        "image": "/images/kattuyanam.png",
        "products": [
          {
            "id": "PROD-021",
            "name": "Karunguruvai Rice",
            "image": "/images/kattuyanam.png",
            "description": "Karunguruvai Rice is a traditional, aromatic, and drought-resistant rice variety known for its strong flavor and firm texture.",
            "benefits": "Rich in fiber, high in antioxidants, promotes heart health, supports digestion, and provides sustained energy.",
            "cookingMethod": "Rinse 1 cup Karunguruvai Rice, soak for 30 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 25-30 minutes."
          }
        ]
      },
      {
        "id": "SUB-009",
        "name": "Poongar",
        "image": "/images/kattuyanam.png",
        "products": [
          {
            "id": "PROD-022",
            "name": "Poongar Rice",
            "image": "/images/kattuyanam.png",
            "description": "Poongar Rice is an aromatic, short-grain rice variety widely known for its mild flavor and slightly sticky texture.",
            "benefits": "Rich in fiber, high in essential nutrients, aids digestion, supports heart health, and provides steady energy throughout the day.",
            "cookingMethod": "Rinse 1 cup Poongar Rice, soak for 20 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 20-25 minutes."
          }
        ]
      },
      {
        "id": "SUB-010",
        "name": "Kottaram Samba",
        "image": "/images/kattuyanam.png",
        "products": [
          {
            "id": "PROD-023",
            "name": "Kottaram Samba Rice",
            "image": "/images/kattuyanam.png",
            "description": "Kottaram Samba Rice is a traditional rice variety known for its nutty flavor, aroma, and unique texture.",
            "benefits": "High in fiber, aids digestion, helps regulate blood sugar levels, and is a great source of energy.",
            "cookingMethod": "Rinse 1 cup Kottaram Samba Rice, soak for 30 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 25-30 minutes."
          }
        ]
      },
      {
        "id": "SUB-011",
        "name": "Unda",
        "image": "/images/kattuyanam.png",
        "products": [
          {
            "id": "PROD-024",
            "name": "Unda Rice (Semi polished)",
            "image": "/images/mapilaisamba.jpg",
            "description": "Semi polished Unda Rice retains its nutritional value and unique texture, commonly used for making soft and aromatic rice dishes.",
            "benefits": "Rich in fiber, helps in digestion, promotes heart health, and provides sustained energy. It is also easy to digest.",
            "cookingMethod": "Rinse 1 cup Unda Rice, soak for 20-30 minutes. Cook with 2 cups water, bring to a boil, and cook for 15-20 minutes."
          }
        ]
      },
      {
        "id": "SUB-012",
        "name": "Vadi",
        "image": "/images/mapilaisamba.jpg",
        "products": [
          {
            "id": "PROD-025",
            "name": "Vadi Rice (Semi polished)",
            "image": "/images/vadi.png",
            "description": "Vadi Rice preserves its flavor and nutrients, commonly used in making vadi or other authentic rice-based dishes.",
            "benefits": "Rich in essential nutrients, fiber, promotes digestion, and supports heart health, offering a natural energy source.",
            "cookingMethod": "Rinse 1 cup Vadi Rice, soak for 30 minutes. Cook with 2 cups water, bring to a boil, and cook for 15-20 minutes."
          }
        ]
      },
      {
        "id": "SUB-013",
        "name": "Idli",
        "image": "/images/idly-rice.jpg",
        "products": [
          {
            "id": "PROD-026",
            "name": "Idli Rice (Semi polished)",
            "image": "/images/idly-rice.jpg",
            "description": "Idli Rice is specifically used for making soft, fluffy idlis. This variety retains its nutritional integrity and enhances the texture of idlis.",
            "benefits": "Easy to digest, rich in fiber, promotes better digestion, and supports heart health. It provides a natural energy boost.",
            "cookingMethod": "Rinse 1 cup Idli Rice, soak for 4-6 hours. Grind with ½ cup urad dal and water to a smooth batter. Ferment overnight and steam for 10-12 minutes."
          }
        ]
      },
      {
        "id": "SUB-014",
        "name": "Samba",
        "image": "/images/samba.png",
        "products": [
          {
            "id": "PROD-027",
            "name": "Samba Raw Rice",
            "image": "/images/samba.png",
            "description": "Samba Raw Rice is a traditional variety known for its rich texture and aromatic flavor. It's ideal for making rice-based dishes.",
            "benefits": "Rich in fiber, helps in digestion, provides sustained energy, and supports heart health.",
            "cookingMethod": "Rinse 1 cup Samba Rice, soak for 30 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 25-30 minutes."
          }
        ]
      }
    ]
  },  
  {
    "id": "CAT-003",
    "name": "Millets",
    "image": "/images/varagu.jpg",
    "subcategories": [
      {
        "id": "SUB-006",
        "name": "Common Millets",
        "image": "/images/varagu.jpg",
        "products": [
          {
            "id": "PROD-015",
            "name": "Varagu (Kodo Millet)",
            "image": "/images/varagu.jpg",
            "description": "Varagu is a nutritious, gluten-free grain with a mild, nutty flavor. It's commonly used in South Indian dishes, including rice alternatives, thin items, and porridge.",
            "benefits": "Rich in fiber, antioxidants, supports digestion, regulates blood sugar levels, and is an excellent source of energy.",
            "cookingMethod": "Rinse 1 cup Varagu, soak for 20-30 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 15-20 minutes."
          },
          {
            "id": "PROD-016",
            "name": "Samai (Little Millet)",
            "image": "/images/samai.webp",
            "description": "Samai is a small, gluten-free grain rich in fiber and minerals, commonly used in South Indian cuisine to make rice dishes, upma, and porridges.",
            "benefits": "Rich in fiber, aids digestion, regulates blood sugar, and is an excellent source of iron and magnesium.",
            "cookingMethod": "Rinse 1 cup Samai, soak for 15-20 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 15-20 minutes."
          },
          {
            "id": "PROD-017",
            "name": "Thinai (Foxtail Millet)",
            "image": "/images/samai.webp",
            "description": "Thinai is a highly nutritious, gluten-free grain commonly used in South Indian cuisine for rice substitutes, upma, and health foods.",
            "benefits": "Rich in fiber, antioxidants, helps in weight management, boosts immunity, and promotes digestion.",
            "cookingMethod": "Rinse 1 cup Thinai, soak for 20 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 15-20 minutes."
          },
          {
            "id": "PROD-018",
            "name": "Kuthiraivali (Barnyard Millet)",
            "image": "/images/samai.webp",
            "description": "Barnyard Millet is a highly nutritious millet variety with a delicate texture, perfect for making healthy rice alternatives, upma, and porridge.",
            "benefits": "Kuthiraivali is rich in fiber, boosts metabolism, helps in weight management, and is a good source of calcium and iron.",
            "cookingMethod": "Rinse 1 cup Kuthiraivali, soak for 20 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 15-20 minutes."
          },
          {
            "id": "PROD-019",
            "name": "Ragi (Finger Millet)",
            "image": "/images/varagu.jpg",
            "description": "Ragi is a powerhouse of nutrients, widely used in South India to make nutritious porridge, dosas, and idlis. It’s high in calcium and iron.",
            "benefits": "Ragi is rich in calcium, fiber, and iron, helps strengthen bones, boosts immunity, and promotes healthy digestion.",
            "cookingMethod": "Rinse 1 cup Ragi, soak for 30 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 10-15 minutes."
          },
          {
            "id": "PROD-020",
            "name": "Kambu (Pearl Millet)",
            "image": "/images/samai.webp",
            "description": "Pearl Millet is a nutrient-dense, gluten-free grain commonly used for making roti, porridge, and rice substitutes. It has a slightly earthy flavor.",
            "benefits": "Kambu is rich in iron, magnesium, fiber, and antioxidants, supports digestion, promotes heart health, and provides energy.",
            "cookingMethod": "Rinse 1 cup Kambu, soak for 30 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 15-20 minutes."
          },
          {
            "id": "PROD-021",
            "name": "Panivaragu (Proso Millet)",
            "image": "/images/varagu.jpg",
            "description": "Panivaragu is a small, nutrient-dense grain that is often used as a substitute for rice in South Indian dishes, porridge, and upma.",
            "benefits": "Panivaragu is high in fiber, antioxidants, helps in digestion, regulates blood sugar, and is a good source of protein and minerals.",
            "cookingMethod": "Rinse 1 cup Panivaragu, soak for 20 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 15-20 minutes."
          },
          {
            "id": "PROD-022",
            "name": "White Solam (White Sorghum)",
            "image": "/images/samai.webp",
            "description": "Sorghum is a highly nutritious grain known for its mild, nutty flavor. It’s commonly used in traditional recipes like roti, upma, and porridge.",
            "benefits": "White Solam is rich in fiber, antioxidants, helps in digestion, controls blood sugar levels, and promotes overall health.",
            "cookingMethod": "Rinse 1 cup White Solam, soak for 30 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 20-25 minutes."
          },
          {
            "id": "PROD-023",
            "name": "Red Solam (Red Sorghum)",
            "image": "/images/varagu.jpg",
            "description": "Red Solam is a rich source of nutrients with a slightly earthy flavor, often used in South Indian cuisine to prepare traditional dishes like porridge, upma, and roti.",
            "benefits": "Red Solam is high in iron, fiber, antioxidants, helps boost immunity, supports digestion, and is excellent for managing blood sugar levels.",
            "cookingMethod": "Rinse 1 cup Red Solam, soak for 30 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 20-25 minutes."
          },
          {
            "id": "PROD-024",
            "name": "Kulasaamai (Brown Top Millet)",
            "image": "/images/samai.webp",
            "description": "Kulasaamai is a traditional millet variety used for its unique flavor and nutritional benefits, ideal for making porridge, upma, and other dishes.",
            "benefits": "Kulasaamai is rich in fiber, helps control blood sugar, aids digestion, and is an excellent source of energy.",
            "cookingMethod": "Rinse 1 cup Kulasaamai, soak for 20 minutes. Cook with 2.5 cups water, bring to a boil, and cook for 15-20 minutes."
          },
          {
            "id": "PROD-025",
            "name": "Kinova (Quinoa)",
            "image": "/images/varagu.jpg",
            "description": "Quinoa is a gluten-free, high-protein grain often used as a substitute for rice. It is perfect for salads, upma, and other dishes.",
            "benefits": "Kinova is rich in protein, fiber, iron, and antioxidants, supports weight loss, improves digestion, and promotes heart health.",
            "cookingMethod": "Rinse 1 cup Kinova, soak for 10 minutes. Cook with 2 cups water, bring to a boil, and cook for 15-20 minutes."
          }
        ]
      }
    ]
  },
  {
    id: "CAT-004",
    name: "Special Variety",
    image: "/images/varagu.jpg",
    subcategories: [
      {
        id: "SUB-007",
        name: "Special Grains",
        image: "/images/varagu.jpg",
        products: [
          {
            id: "PROD-017",
            name: "Buckwheat",
            image: "/images/varagu.jpg",
            description: "Buckwheat is a nutrient-dense, gluten-free pseudo-grain with a slightly earthy flavor. It is commonly used in making porridge, pancakes, and as a rice substitute in various dishes.",
            benefits: "High in protein, fiber, antioxidants, and essential minerals. It helps support heart health, regulate blood sugar, and improve digestion.",
            cookingMethod: "Rinse 1 cup Buckwheat, soak for 15-20 minutes. Cook with 2 cups water, bring to a boil, and simmer for 10-12 minutes until tender."
          },
          {
            id: "PROD-018",
            name: "Amaranthus (Raja Kirai Vithai)",
            image: "/images/varagu.jpg",
            description: "Amaranthus is a highly nutritious leafy plant used as a grain. It has a mild, nutty flavor and is commonly used in porridges, soups, and salads.",
            benefits: "Rich in protein, fiber, iron, calcium, and antioxidants, supports immune function, promotes digestion, and helps improve bone health.",
            cookingMethod: "Rinse 1 cup Amaranthus, soak for 15-20 minutes. Cook with 2 cups water, bring to a boil, and cook for 15-20 minutes."
          }
        ]
      }
    ]
  },
  {
    "id": "CAT-005",
    "name": "Value Added Products",
    "image": "/images/samai.webp",
    "subcategories": [
      {
        "id": "SUB-008",
        "name": "Millet Flour",
        "image": "/images/millet-flour.webp",
        "products": [
          {
            "id": "PROD-019",
            "name": "Varagu Flour",
            "image": "/images/millet-flour.webp",
            "description": "Kodo Millet Flour",
            "type": "Flour"
          },
          {
            "id": "PROD-020",
            "name": "Samai Flour",
            "image": "/images/millet-flour.webp",
            "description": "Little Millet Flour",
            "type": "Flour"
          },
          {
            "id": "PROD-021",
            "name": "Thinai Flour",
            "image": "/images/millet-flour.webp",
            "description": "Foxtail Millet Flour",
            "type": "Flour"
          },
          {
            "id": "PROD-022",
            "name": "Kuthiraivali Flour",
            "image": "/images/millet-flour.webp",
            "description": "Barnyard Millet Flour",
            "type": "Flour"
          },
          {
            "id": "PROD-023",
            "name": "Ragi Flour",
            "image": "/images/millet-flour.webp",
            "description": "Finger Millet Flour",
            "type": "Flour"
          },
          {
            "id": "PROD-024",
            "name": "Kambu Flour",
            "image": "/images/millet-flour.webp",
            "description": "Pearl Millet Flour",
            "type": "Flour"
          },
          {
            "id": "PROD-025",
            "name": "Panivaragu Flour",
            "image": "/images/millet-flour.webp",
            "description": "Proso Millet Flour",
            "type": "Flour"
          },
          {
            "id": "PROD-026",
            "name": "White Solam Flour",
            "image": "/images/millet-flour.webp",
            "description": "Sorghum Flour",
            "type": "Flour"
          },
          {
            "id": "PROD-027",
            "name": "Red Solam Flour",
            "image": "/images/millet-flour.webp",
            "description": "Red Sorghum Flour",
            "type": "Flour"
          },
          {
            "id": "PROD-028",
            "name": "Kulasamai Flour",
            "image": "/images/millet-flour.webp",
            "description": "Brown Top Millet Flour",
            "type": "Flour"
          },
          {
            "id": "PROD-029",
            "name": "Kinova Flour",
            "image": "/images/millet-flour.webp",
            "description": "Quinoa Flour",
            "type": "Flour"
          }
        ]
      },
      {
        "id": "SUB-009",
        "name": "Dosa Mix",
        "image": "/images/dosa-mix.jpeg",
        "products": [
          {
            "id": "PROD-030",
            "name": "Varagu Dosa Mix",
            "image": "/images/dosa-mix.jpeg",
            "description": "Kodo Millet Dosa Mix",
            "type": "Dosa Mix"
          },
          {
            "id": "PROD-031",
            "name": "Samai Dosa Mix",
            "image": "/images/dosa-mix.jpeg",
            "description": "Little Millet Dosa Mix",
            "type": "Dosa Mix"
          },
          {
            "id": "PROD-032",
            "name": "Thinai Dosa Mix",
            "image": "/images/dosa-mix.jpeg",
            "description": "Foxtail Millet Dosa Mix",
            "type": "Dosa Mix"
          },
          {
            "id": "PROD-033",
            "name": "Kuthiraivali Dosa Mix",
            "image": "/images/dosa-mix.jpeg",
            "description": "Barnyard Millet Dosa Mix",
            "type": "Dosa Mix"
          },
          {
            "id": "PROD-034",
            "name": "Raagi Dosa Mix",
            "image": "/images/dosa-mix.jpeg",
            "description": "Finger Millet Dosa Mix",
            "type": "Dosa Mix"
          },
          {
            "id": "PROD-035",
            "name": "Kambu Dosa Mix",
            "image": "/images/dosa-mix.jpeg",
            "description": "Pearl Millet Dosa Mix",
            "type": "Dosa Mix"
          },
          {
            "id": "PROD-036",
            "name": "Panivaragu Dosa Mix",
            "image": "/images/dosa-mix.jpeg",
            "description": "Proso Millet Dosa Mix",
            "type": "Dosa Mix"
          },
          {
            "id": "PROD-037",
            "name": "White Solam Dosa Mix",
            "image": "/images/dosa-mix.jpeg",
            "description": "Sorghum Dosa Mix",
            "type": "Dosa Mix"
          },
          {
            "id": "PROD-038",
            "name": "Red Solam Dosa Mix",
            "image": "/images/dosa-mix.jpeg",
            "description": "Red Sorghum Dosa Mix",
            "type": "Dosa Mix"
          },
          {
            "id": "PROD-039",
            "name": "Kulasamai Dosa Mix",
            "image": "/images/dosa-mix.jpeg",
            "description": "Brown Top Millet Dosa Mix",
            "type": "Dosa Mix"
          },
          {
            "id": "PROD-040",
            "name": "Kinova Dosa Mix",
            "image": "/images/dosa-mix.jpeg",
            "description": "Quinoa Dosa Mix",
            "type": "Dosa Mix"
          }
        ]
      }
    ]
  }
  
  ];
  const AllProducts: React.FC = ()  => {
    // Get first category and its first subcategory and product for initial state


    const navigate=useNavigate()
      const { index } = useParams<{ index: any }>();
      const dialogRef = useRef<HTMLDivElement | null>(null);
      const [searchparams] = useSearchParams()
      const _id = searchparams.get("_id")
      const location = useLocation()
      const locationState = location.state?.product

      const firstCategory = productData[0];
      const firstSubcategory = firstCategory?.subcategories[0]
      const firstProduct = firstSubcategory?.products[0];
    const [selectedCategory, setSelectedCategory] = useState<string>(firstCategory?.id ?? '');
    const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>(firstSubcategory?.id ?? null);
    const [selectedProduct, setSelectedProduct] = useState<Product | any>(firstProduct ?? null);
   const [productDialogOpen,setProductDialogOpen]=useState(false);
       useEffect(() => {
        const category = productData.find(cat => cat.id === locationState?.categoryId) || firstCategory;
        const subcategory = category?.subcategories.find(sub => sub.id === locationState?.subCategoryId) || category?.subcategories[0];
        const selectedProduct = subcategory?.products.find(prod => prod.id === locationState?.productId) || subcategory?.products[0];
        setSelectedCategory( locationState?.grandParentId ?? category?.id ?? '');
        setExpandedSubcategory( locationState?.parentId ?? subcategory?.id ?? null);
        setSelectedProduct(selectedProduct ?? null);
        console.log(category,subcategory,selectedProduct,locationState)

    }, [index,locationState?.categoryId,locationState?.subCategoryId,locationState?.productId]);

    const handleImageClick = () => {
      setProductDialogOpen(!productDialogOpen);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
          setProductDialogOpen(false);
      }
  }, []);
    useEffect(() => {
      // Only add listener when dialog is open
      if (productDialogOpen) {
          document.addEventListener("mousedown", handleClickOutside);
      }
      
      // Cleanup function to remove listener
      return () => {
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [productDialogOpen, handleClickOutside]);

    useEffect(() =>{
        // setSelectedCategory(locationState?.grandParentId ?? "CAT-001")
        // setExpandedSubcategory(locationState?.parentId ?? (_id || 'SUB-001'))
    },[index,_id])
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const getProductsByCategoryId = (categoryId: string) => {
      console.log(productData,'productData')
        const category = productData.find(cat => cat.id === categoryId);
      
        
        if (!category) {
          console.warn(`Category with ID "${categoryId}" not found.`);
          return [];
        }
      
        // Collect all products from the subcategories of the found category
        return category.subcategories.flatMap(subcategory => subcategory.products);
      };
      console.log(index,'>>>>index')
      const products = getProductsByCategoryId(locationState?.parantId ?? index);

      if (products.length > 0) {
        console.log("Products in the category:", products);
      } else {
        console.log("No products found for the given category ID.");
      }
    // Get current category's subcategories
    const currentCategory = productData.find(cat => cat.id === selectedCategory);
    const subcategories = currentCategory?.subcategories || [];

    const handleCategoryClick = (categoryId: string): void => {
        setSelectedCategory(categoryId);
        const category = productData.find(cat => cat.id === categoryId);
        setExpandedSubcategory(category?.subcategories[0]?.id ?? null);
        setSelectedProduct(category?.subcategories[0]?.products[0] ?? null);
    };

    const handleSubcategoryClick = (subcategoryId: string): void => {
        setExpandedSubcategory(expandedSubcategory === subcategoryId ? null : subcategoryId);
    };

    const handleProductClick = (product: Product): void => {
        setSelectedProduct(product);
    };

    // Reorder categories to make the selected category appear first
    const reorderedCategories = productData.filter(cat => cat.id === selectedCategory)
        .concat(productData.filter(cat => cat.id !== selectedCategory));

    return (
        <>
            <NavBar />
            <div className="lg:mt-24 mt-16 lg:mx-16 lg:px-4  py-8">
                {/* Header */}
                <header className="mb-8 px-5 flex items-center gap-3">
                    <span onClick={()=>{navigate('/')}}  className='-mt-1'><img src={left} className='h-8 lg:h-auto cursor-pointer'  alt="arrow" /></span>
                    <h1 className="lg:text-5xl text-3xl font-anderson font-bold text-[#282C4B]">Products</h1>
                </header>

                <div>
                    <div className='flex px-5 flex-wrap lg:gap-12 lg:py-3  lg:pb-6 '>
                        {reorderedCategories.map((category) => {
                            // Calculate total products in the category by summing products in all subcategories
                            const totalProducts = category.subcategories?.reduce((sum, subcategory) =>
                                sum + (subcategory.products?.length || 0), 0) || 0;

                            // Add logic for handling the selected category style
                            const isSelected = selectedCategory === category.id;

                            return (
                                <div 
                                    key={category.id} 
                                    onClick={() => handleCategoryClick(category.id)}
                                    className={`p-2 cursor-pointer  flex lg:text-base text-sm font-sans items-center rounded gap-3  ${isSelected ? 'bg-[#FA8232] lg:w-64  text-white' : 'hover:bg-gray-50 text-[#5F6C72] '}`}
                                >
                                    {category.name} 
                                    <span className={`rounded-full  border ${isSelected?'border-white text-[#FA8232] bg-white':'border-[#5F6C72]'}  flex items-center justify-center p-1 h-8 w-8`}>
                                        {totalProducts}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="lg:hidden relative">
  <div className="flex items-center gap-5 relative z-40">
    {/* Triggering Image */}
    <div onClick={handleImageClick}>
      <img
        src={productDialogOpen ? sideNavClose : sideNav}
        alt="Toggle Navigation"
        className="h-20"
      />
    </div>
    <p className="text-base text-[#191C1F]">
      {subcategories.find((sub) => sub.id === expandedSubcategory)?.name} -{" "}
      <span className="text-[#017807]">{selectedProduct.name}</span>
    </p>
  </div>

  {productDialogOpen && (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-30 bg-black bg-opacity-50"
        onClick={() => setProductDialogOpen(false)} // Close dialog on outside click
      ></div>

      {/* Dialog */}
      <div className="fixed inset-y-0 left-0 z-50 flex items-center justify-start pl-12">
        <div
          ref={dialogRef}
          className="space-y-2 bg-white w-64 rounded z-40"
        >
          {subcategories.map((subcategory) => (
            <div key={subcategory.id} className="border-b last:border-b-0">
              <button
                className={`w-full flex font-sans items-center p-4 justify-between font-medium  text-left ${
                  expandedSubcategory === subcategory.id
                    ? "text-black bg-[#F2F4F5]"
                    : "text-[#5F6C72]"
                }`}
                onClick={() => handleSubcategoryClick(subcategory.id)}
              >
                <span>{subcategory.name}</span>
                {expandedSubcategory === subcategory.id ? (
                  <ChevronDown className="w-5 h-5" />
                ) : (
                  <ChevronRight className="w-5 h-5" />
                )}
              </button>

              {/* Products Dropdown */}
              {expandedSubcategory === subcategory.id && (
                <div className="py-2 space-y-2">
                  {subcategory.products.map((product) => (
                    <button
                      key={product.id}
                      className={`w-full text-left py-2 rounded relative ${
                        selectedProduct?.id === product.id
                          ? "text-green-700"
                          : "hover:bg-gray-50 text-[#5F6C72]"
                      }`}
                      onClick={() => {handleProductClick(product)
                        setProductDialogOpen(false);
                      }}
                    >
                      {/* Half circle indicator for selected product */}
                      {selectedProduct?.id === product.id && (
                        <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-4 bg-green-700 rounded-r-full"></span>
                      )}
                      <p className="pl-10">{product.name}</p>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )}
</div>




                <div className="flex px-5 gap-8">
                    {/* Sidebar */}
                 
                    <div className="w-64 hidden lg:block shrink-0">
                        <div className="bg-white  rounded-lg shadow-lg py-2  border ">
                            {/* Category Tabs */}

                            {/* Subcategories with Products */}
                            <div className="space-y-2">
                                {subcategories.map((subcategory) => (
                                    <div key={subcategory.id} className="border-b last:border-b-0">
                                        <button
                                            className={`w-full flex font-sans items-center p-4 justify-between font-medium  text-left ${
                                                expandedSubcategory === subcategory.id ? 'text-black bg-[#F2F4F5]' : 'text-[#5F6C72]'
                                            }`}
                                            onClick={() => handleSubcategoryClick(subcategory.id)}
                                        >
                                            <span>{subcategory.name}</span>
                                            {expandedSubcategory === subcategory.id ? (
                                                <ChevronDown className="w-5 h-5" />
                                            ) : (
                                                <ChevronRight className="w-5 h-5" />
                                            )}
                                        </button>

                                        {/* Products Dropdown */}
                                        {expandedSubcategory === subcategory.id && (
    <div className=" py-2 space-y-2">
       {expandedSubcategory === subcategory.id && (
    <div className=" py-2 space-y-2">
        {subcategory.products.map((product) => (
            <button
                key={product.id}
                className={`w-full text-left py-2 rounded relative ${
                    selectedProduct?.id === product.id
                        ? ' text-green-700'
                        : 'hover:bg-gray-50 text-[#5F6C72]'
                }`}
                onClick={() => handleProductClick(product)}
            >
                {/* Half circle indicator for selected product */}
                {selectedProduct?.id === product.id && (
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-4 bg-green-700 rounded-r-full"></span>
                )}
                <p className='pl-10'>
                {product.name}
                </p>
                
            </button>
        ))}
    </div>
)}

    </div>
)}

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Content - Product Details */}
                    {selectedProduct && (
                        <div className="flex w-full cursor-default">
                            <div className="bg-white w-full">
                                <div className="grid mt-8 lg:mt-0 grid-cols-1 gap-6">
                                    <div>
                                        <img
                                            src={selectedProduct.image}
                                            alt={selectedProduct.name}
                                            className="w-full lg:h-[400px] h-[275px] object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="space-y-5">
                                        <h2 className="text-3xl font-anderson font-bold text-[#282C4B]">
                                            {selectedProduct.name}
                                        </h2>
                                        <p className="text-[#747582] lg:text-xl text-lg leading-loose  e font-ubuntu">
                                            {selectedProduct.description}
                                        </p>

                                        {selectedProduct.benefits && (
                                            <div className="space-y-5">
                                                <h3 className="text-2xl font-bold font-anderson text-[#F07922] mb-2">
                                                    Benefits
                                                </h3>
                                                <p className="text-[#747582] lg:text-xl text-lg leading-loose   font-ubuntu">
                                                    {selectedProduct.benefits}
                                                </p>
                                            </div>
                                        )}

                                        {selectedProduct.cookingMethod && (
                                            <div className="space-y-5">
                                                <h3 className="text-2xl font-bold font-anderson text-[#F07922] mb-2">
                                                    Cooking Method
                                                </h3>
                                                <p className="text-[#747582] lg:text-xl text-lg leading-loose  font-ubuntu">
                                                    {selectedProduct.cookingMethod}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
           
        </>
    );
};


                
                export default AllProducts;
// src/data/products.ts

// 1. Define the Product structure using a TypeScript Interface
export interface Product {
  id: number;
  name: string;
  category: "Hair Clips" | "Brooches"; // Only allow these two categories
  description: string;
  imageUrl: string; // Placeholder for image path or URL
  price: string;
  tags: string[]; // For better search functionality
}

// 2. Mock Product Data
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Elegant Pearl Clip",
    category: "Hair Clips",
    description:
      "A classic, handcrafted hair clip with delicate pearl accents.",
    imageUrl: "https://jebulin.github.iohttps://jebulin.github.io/images/clip.png",
    price: "₹250",
    tags: ["pearl", "wedding", "white", "formal"],
  },
  {
    id: 2,
    name: "Traditional Peacock Brooch",
    category: "Brooches",
    description: "Vibrant peacock design perfect for sarees and shawls.",
    imageUrl: "https://jebulin.github.io/images/brooch.png",
    price: "₹499",
    tags: ["peacock", "saree", "traditional", "blue", "green"],
  },
  {
    id: 3,
    name: "Minimalist Metal Clip",
    category: "Hair Clips",
    description: "Simple and modern golden metal hair clip for everyday use.",
    imageUrl: "https://jebulin.github.io/images/brooch.png",
    price: "₹150",
    tags: ["metal", "modern", "golden", "everyday"],
  },
  {
    id: 4,
    name: "Floral Kundan Brooch",
    category: "Brooches",
    description: "Beautiful kundan work in a floral pattern.",
    imageUrl: "https://jebulin.github.io/images/clip.png",
    price: "₹550",
    tags: ["kundan", "floral", "saree", "pink"],
  },
  {
    id: 5,
    name: "Elegant Pearl Clip",
    category: "Hair Clips",
    description:
      "A classic, handcrafted hair clip with delicate pearl accents.",
    imageUrl: "https://jebulin.github.io/images/clip.png",
    price: "₹250",
    tags: ["pearl", "wedding", "white", "formal"],
  },
  {
    id: 6,
    name: "Traditional Peacock Brooch",
    category: "Brooches",
    description: "Vibrant peacock design perfect for sarees and shawls.",
    imageUrl: "https://jebulin.github.io/images/brooch.png",
    price: "₹499",
    tags: ["peacock", "saree", "traditional", "blue", "green"],
  },
  {
    id: 7,
    name: "Minimalist Metal Clip",
    category: "Hair Clips",
    description: "Simple and modern golden metal hair clip for everyday use.",
    imageUrl: "https://jebulin.github.io/images/brooch.png",
    price: "₹150",
    tags: ["metal", "modern", "golden", "everyday"],
  },
  {
    id: 8,
    name: "Floral Kundan Brooch",
    category: "Brooches",
    description: "Beautiful kundan work in a floral pattern.",
    imageUrl: "https://jebulin.github.io/images/clip.png",
    price: "₹550",
    tags: ["kundan", "floral", "saree", "pink"],
  }
];

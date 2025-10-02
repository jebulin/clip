// src/components/ProductCard.tsx
import React, { useState } from "react";
import type { Product } from "../data/products";
import ViewProductCard from "./ViewProductCard";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Function to open WhatsApp chat with product details
  const [showModel, setShowModel] = useState(false);

  const onHide = () => {
    setShowModel(false);
  };
  const handleProductClick = () => {
    // We reuse the WhatsAppButton's logic by creating a dummy button here and clicking the inner link
    setShowModel(true);
  };

  const cardStyle: React.CSSProperties = {
    border: "1px solid #ddd",
    padding: "0", // Removed inner padding for cleaner look
    borderRadius: "10px",
    textAlign: "left",
    width: "300px", // Slightly larger card
    margin: "15px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for premium lift
    overflow: "hidden",
    cursor: "pointer", // Indicates it's clickable
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  };

  return (
    <>
      <div
        style={cardStyle}
        onClick={handleProductClick} // Handle the click event here
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
        }}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <div style={{ padding: "15px" }}>
          <h3 style={{ margin: "0 0 5px 0", color: "#333" }}>{product.name}</h3>
          <p style={{ color: "#888", fontSize: "0.9em", margin: "0 0 10px 0" }}>
            {product.category}
          </p>
          <p style={{ color: "#A52A2A", fontWeight: "600", fontSize: "1.2em" }}>
            {product.price}
          </p>
        </div>
      </div>
      <ViewProductCard
        images={product.images}
        onHide={onHide}
        show={showModel}
        product={product}
      />
    </>
  );
};

export default ProductCard;

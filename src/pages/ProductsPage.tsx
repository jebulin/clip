// src/pages/ProductsPage.tsx
import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  // Sync state when navigating from Home page category links
  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  // Logic to filter and search the products
  const filteredProducts = useMemo(() => {
    let list = PRODUCTS;

    // 1. Filter by Category
    if (selectedCategory !== "All") {
      list = list.filter((product) => product.category === selectedCategory);
    }

    // 2. Filter by Search Term (Dynamic Filtering)
    if (searchTerm.trim() !== "") {
      const lowerSearchTerm = searchTerm.toLowerCase().trim();
      list = list.filter(
        (product) =>
          product.name.toLowerCase().includes(lowerSearchTerm) ||
          product.description.toLowerCase().includes(lowerSearchTerm) ||
          product.tags.some((tag) =>
            tag.toLowerCase().includes(lowerSearchTerm)
          )
      );
    }

    return list;
  }, [selectedCategory, searchTerm]);

  const categories = ["All", "Hair Clips", "Brooches"];

  return (
    <div style={pageContainerStyle}>
      {/* Page Title: Bespoke Creations */}
      <h1 style={titleStyle}>
        {selectedCategory !== "All"
          ? `${selectedCategory} Collection`
          : "Bespoke Creations"}
      </h1>

      <div style={filterBarContainerStyle}>
        {/* Search Input with Premium Styling */}
        <input
          type="text"
          placeholder="Search product names or tags..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={searchInputStyle}
          // Hover/Focus effects handled via inline style functions
          onFocus={(e) => (e.target.style.borderColor = "#A52A2A")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />

        {/* Separator (visible on desktop) */}
        <div style={separatorStyle as React.CSSProperties} />

        {/* Category Filter Dropdown with Premium Styling */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={selectInputStyle}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "All" ? "Filter by Category" : cat}
            </option>
          ))}
        </select>
      </div>

      <p style={resultsCountStyle}>
        {filteredProducts.length} unique results found. Click a product to
        inquire via WhatsApp.
      </p>

      {/* Product List */}
      <div style={productListStyle}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            // ProductCard handles the click-to-WhatsApp feature
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p style={{ marginTop: "50px", fontSize: "1.2em", color: "#888" }}>
            Sorry, no exquisite products matched your search or filter.
          </p>
        )}
      </div>
    </div>
  );
};

// --- PRODUCTS PAGE STYLES ---

const pageContainerStyle: React.CSSProperties = {
  padding: "40px 20px",
  maxWidth: "1400px",
  margin: "0 auto",
  backgroundColor: "#f9f5f1",
};

const titleStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#36454F", // Deep Charcoal Gray
  marginBottom: "40px",
  fontSize: "2.5em",
  fontWeight: "600",
  letterSpacing: "2px", // Increased letter spacing
  borderBottom: "1px solid #ddd",
  paddingBottom: "15px",
};

const filterBarContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  margin: "0 auto 40px",
  padding: "10px 20px",
  maxWidth: "800px",
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
  flexWrap: "wrap", // Responsive wrapping
};

const inputBaseStyle: React.CSSProperties = {
  padding: "12px 20px",
  fontSize: "16px",
  borderRadius: "50px",
  border: "1px solid #ccc",
  transition: "border-color 0.3s, box-shadow 0.3s",
  backgroundColor: "#fff",
  minWidth: "200px",
  flexGrow: 1,
};

const searchInputStyle: React.CSSProperties = {
  ...inputBaseStyle,
  flex: "3",
};

const selectInputStyle: React.CSSProperties = {
  ...inputBaseStyle,
  flex: "2",
  cursor: "pointer",
  // Note: Custom select arrow styling is complex with inline CSS and is omitted here for simplicity
};

// Separator is a bit tricky with inline CSS media queries, so we'll use a basic style
// that works when items are side-by-side.
const separatorStyle: React.CSSProperties = {
  width: "1px",
  height: "30px",
  backgroundColor: "#eee",
};

const resultsCountStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#666",
  marginBottom: "40px",
  fontStyle: "italic",
};

const productListStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "30px",
  marginTop: "30px",
};

export default ProductsPage;

// src/pages/HomePage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAVLINKS } from '../helper/constants';

// Component for a clean, responsive category link
interface CategoryLinkProps {
  to: string;
  icon: string;
  title: string;
  description: string;
}

const CategoryLink: React.FC<CategoryLinkProps> = ({ to, icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const linkStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px 20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textDecoration: 'none',
    color: '#333',
    transition: 'all 0.3s ease-in-out',
    width: '100%', // Full width on mobile, scales on desktop
    maxWidth: '350px', 
    boxShadow: isHovered ? '0 10px 20px rgba(165, 42, 42, 0.1)' : '0 2px 8px rgba(0,0,0,0.05)',
    backgroundColor: 'white',
    transform: isHovered ? 'translateY(-5px)' : 'translateY(0)', // Subtle lift
    textAlign: 'center',
    margin: '10px 0', // Space for mobile view
  };

  const iconStyle: React.CSSProperties = {
    fontSize: '3em',
    marginBottom: '10px',
    color: '#A52A2A', // Consistent accent color
  };

  return (
    <Link 
      to={to} 
      style={linkStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={iconStyle}>{icon}</div>
      <h3 style={{ margin: '5px 0', color: '#333', fontSize: '1.4em' }}>{title}</h3>
      <p style={{ color: '#666', fontSize: '0.9em' }}>{description}</p>
    </Link>
  );
};


const HomePage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#f9f5f1', minHeight: '85vh' }}> 
      
      {/* 1. HERO SECTION (Clean, Responsive, Elegant) */}
      <header style={heroStyle}>
        <h1 style={{ fontSize: 'clamp(2.5em, 5vw, 4em)', color: 'white', letterSpacing: '2px', fontWeight: '700' }}>
          Try Today
        </h1>
        <p style={{ 
            fontSize: 'clamp(1em, 2vw, 1.4em)', 
            color: 'white', 
            marginTop: '10px', 
            maxWidth: '600px', 
            fontWeight: '400' 
        }}>
          Handcrafted accessories. **Elegance, tailored for you.**
        </p>
      </header>

      {/* 2. CATEGORIES SECTION */}
      <div style={{ padding: '50px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        
        <h2 style={{ color: '#333', marginBottom: '40px', textAlign: 'center', fontSize: '2em' }}>
          Curated Collections
        </h2>

        {/* Flex container that wraps nicely for mobile */}
        <div style={categoryContainerStyle}>
          
          <CategoryLink
            to={`${NAVLINKS.PRODUCTS}?category=Hair Clips` }
            icon="🎀"
            title="Hair Clips"
            description="Perfect for every occasion, from minimalist to grand."
          />

          <CategoryLink
            to={`${NAVLINKS.PRODUCTS}?category=Brooches`}
            icon="💎"
            title="Brooches"
            description="Add a touch of regal splendor to your sarees."
          />
        </div>
        
        {/* Link to see all products */}
        <div style={{ marginTop: '50px', textAlign: 'center' }}>
          <Link 
            to={NAVLINKS.PRODUCTS}
            style={viewAllLinkStyle}
            onMouseEnter={(e) =>{ e.currentTarget.style.backgroundColor = '#A52A2A', e.currentTarget.style.color = 'white'}}
            onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent', e.currentTarget.style.color = '#A52A2A'}}
          >
            Explore All Products →
          </Link>
        </div>
      </div>
    </div>
  );
};

// --- HOME PAGE STYLES ---

const heroStyle: React.CSSProperties = {
    backgroundColor: '#A52A2A', // Rich accent color background
    height: '35vh', // Slightly shorter for mobile screen efficiency
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '30px 20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
};

const categoryContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap', // CRITICAL for mobile responsiveness: wraps items to the next line
};

const viewAllLinkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: '#A52A2A', 
    fontSize: '1.1em', 
    fontWeight: 'bold', 
    padding: '10px 25px', 
    border: '2px solid #A52A2A', 
    borderRadius: '50px', 
    transition: 'all 0.3s ease-in-out',
    display: 'inline-block'
};

export default HomePage;
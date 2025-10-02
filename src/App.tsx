// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import WhatsAppButton from './components/WhatsAppButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NAVLINKS } from './helper/constants';

const App: React.FC = () => {
  return (
    <Router>
      <AppHeader />
      <Routes>
        {/* Home Page Route */}
        <Route path={NAVLINKS.HOME} element={<HomePage />} />
        
        {/* Products Page Route (handles listing, search, and category filter) */}
        <Route path={NAVLINKS.PRODUCTS} element={<ProductsPage />} />
        
        {/* Search Route - uses the ProductsPage component */}
        <Route path={NAVLINKS.SEARCH} element={<ProductsPage />} /> 

        {/* Fallback for 404 - simple text for now */}
        <Route path="*" element={<h1 style={{ textAlign: 'center', marginTop: '50px' }}>404 - Page Not Found</h1>} />
      </Routes>
      {/* The floating button appears on all pages */}
      <WhatsAppButton />
    </Router>
  );
};

// 💎 IMPROVED NAVIGATION HEADER COMPONENT 💎
const AppHeader: React.FC = () => (
  <nav style={navStyle}>
    {/* Left side: Company Logo/Name */}
    <div style={{ fontWeight: 'bold', fontSize: '1.8em', letterSpacing: '1px' }}>
      <Link to={NAVLINKS.HOME} style={logoLinkStyle}>Try Today</Link>
    </div>
    
    {/* Right side: Navigation Links */}
    <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
      <NavLink to={NAVLINKS.HOME}>Home</NavLink>
      <NavLink to={NAVLINKS.PRODUCTS}>Products</NavLink>
      <NavLink to={NAVLINKS.SEARCH}>Search</NavLink> 
    </div>
  </nav>
);

// --- NAVIGATION BAR STYLES ---

const navStyle: React.CSSProperties = {
  display: 'flex', 
  justifyContent: 'space-between', 
  padding: '20px 60px', // More padding for a spacious, premium feel
  backgroundColor: 'white', // Clean white background
  borderBottom: '1px solid #e0e0e0', // Subtle light grey border
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)', // Very light shadow for depth
};

const logoLinkStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: '#A52A2A', // Using the accent color for the logo
  transition: 'color 0.3s',
};


// A small reusable component for the individual links to handle hover effects
interface NavLinkProps {
    to: string;
    children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    const linkStyle: React.CSSProperties = {
        textDecoration: 'none',
        color: isHovered ? '#A52A2A' : '#333', // Accent color on hover
        fontSize: '1.1em',
        fontWeight: '500', // Medium weight font
        padding: '5px 0',
        position: 'relative',
        transition: 'color 0.3s',
        cursor: 'pointer',
    };

    const underlineStyle: React.CSSProperties = {
        content: '""',
        position: 'absolute',
        bottom: '0',
        left: '0',
        height: '2px',
        width: isHovered ? '100%' : '0',
        backgroundColor: '#A52A2A', // Accent color for underline
        transition: 'width 0.3s ease-in-out',
    };

    return (
        <Link 
            to={to} 
            style={linkStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
            <div style={underlineStyle} />
        </Link>
    );
};


export default App;
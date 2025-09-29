// src/components/WhatsAppButton.tsx
import React from 'react';

// !!! REPLACE YOUR_PHONE_NUMBER !!!
const BUSINESS_NUMBER = 'YOUR_PHONE_NUMBER'; 

interface WhatsAppButtonProps {
    productName?: string; // Optional name to customize the chat message
    style?: React.CSSProperties; // Optional style override for placement
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ productName, style }) => {
  
  // Custom message if a product name is provided
  const baseMessage = productName 
    ? `Hello, I'm interested in the product: ${productName}. Could you provide more details?`
    : 'Hello, I am interested in your products.';
    
  const encodedMessage = encodeURIComponent(baseMessage);
  
  const WHATSAPP_URL = `https://wa.me/${BUSINESS_NUMBER}?text=${encodedMessage}`;

  const defaultStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
    // Elegance styles
    display: 'flex',
    alignItems: 'center',
    padding: '10px 15px',
    backgroundColor: '#075E54', // Darker, premium WhatsApp Green
    color: 'white',
    borderRadius: '50px',
    textDecoration: 'none',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
    ...style // Apply any custom styles
  };

  return (
    <div style={style?.position === 'relative' ? {} : defaultStyle}>
        <a 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            style={style?.position === 'relative' ? { ...defaultStyle, position: 'relative', margin: 0, bottom: 'unset', right: 'unset' } : { textDecoration: 'none', color: 'white' }}
        >
            💬 {productName ? `Inquire about ${productName}` : 'Chat on WhatsApp'}
        </a>
    </div>
  );
};

export default WhatsAppButton;
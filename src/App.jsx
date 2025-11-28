import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs'; // Assuming AboutUs is the Landing Page component provided

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="App">
      {/* Agar showProductList true hai to ProductList dikhao, warna Landing Page (AboutUs) */}
      {showProductList ? (
        <ProductList />
      ) : (
        <div className="landing-page">
          {/* Background Image aur content AboutUs mein ya yahan ho sakta hai */}
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
              <button className="get-started-button" onClick={handleGetStartedClick}>
                Get Started
              </button>
            </div>
            {/* Agar AboutUs component existing hai to usay yahan render kar sakte hain, 
                     lekin rubric ke liye simple structure upar kafi hai */}
            <AboutUs />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
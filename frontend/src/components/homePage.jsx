import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate(); 

  function GetStarted() {
    setButtonClicked(true); 
    console.log("Get started button clicked!");
    
    
    navigate("/courses");
  }

  return (
    <div style={{ display: "flex", alignItems: "center", padding: "20px" }}>
      <img 
        src="https://img.freepik.com/premium-vector/graphic-er-working-computer-picture-device-screen-digital-creativity-concept_277904-5893.jpg?w=900" 
        alt="E-Learning" 
        style={{ maxWidth: "50%", height: "auto", marginRight: "20px" }} 
      />
      <div style={{ textAlign: "left" }}>
        <h1 style={{ fontSize: "24px", color: "black" }}>Welcome to EV-olution</h1>
        <p style={{ fontSize: "16px", color: "#333" }}>
          Your journey to knowledge begins here. Explore our courses and enhance your skills!
        </p>
        <div style={{ display: "flex", color: "#0984e3"}}>
          <button 
            onClick={GetStarted} 
            style={{ 
              backgroundColor: "#E88982", 
              color: "white", 
              border: "none", 
              padding: "10px", 
              borderRadius: "5px",
              cursor: buttonClicked ? "not-allowed" : "pointer" 
            }}
            disabled={buttonClicked} 
          >
            {buttonClicked ? "Loading..." : "Get Started"} 
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
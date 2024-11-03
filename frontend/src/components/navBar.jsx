import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <nav style={{
      backgroundColor: "#FFFFFF",
      padding: "10px",
      margin: "0",
      position: "relative",
      top: "0",
      borderRadius: "0"
    }}>
      <ul style={{ listStyleType: "none", margin: "0", padding: "0", display: "flex", alignItems: "center" }}>
        <li style={{ flexGrow: 1 }}>
          <div
            className="Nav"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "black"
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img 
                src="https://t3.ftcdn.net/jpg/03/21/37/28/360_F_321372809_PCIIUuYKpRwPVuYf45SDSxrjC4z379kN.jpg" 
                alt="Logo"
                style={{ width: "70px", height: "70px", borderRadius: "50%", marginRight: "0px" }} // Adjust size as needed
              />
              <span style={{ fontWeight: "bold", fontSize: "24px" }}>EV-olution</span>
            </div>

            {/* Search Bar */}
            <div style={{ display: "flex", alignItems: "center", marginLeft: "30px" }}>
              <input
                type="text"
                placeholder="Search..."
                style={{
                  padding: "5px",
                  border: "1px solid #E88982",
                  borderRadius: "5px",
                  outline: "none",
                  marginRight: "5px",
                  width: "300px"
                }}
              />
              <button
                style={{
                  backgroundColor: "#E88982",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Search
              </button>
            </div>

            {/* Navigation Links and Dropdown */}
            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <a href="/" style={{ color: "#E88982", textDecoration: "none" }}>Home</a>
              <a href="/courses" style={{ color: "#E88982", textDecoration: "none" }}>Courses</a>
              <div
                style={{ fontSize: "24px", cursor: "pointer" }}
                onClick={() => setShowMenu(!showMenu)}
              >
                &#x22EE;
              </div>
              {showMenu && (
                <div style={{
                  position: "absolute",
                  backgroundColor: "white",
                  boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
                  borderRadius: "5px",
                  padding: "10px",
                  marginTop: "5px",
                  zIndex: 1000
                }}>
                  <div
                    onClick={() => {
                      navigate('/signin');
                      setShowMenu(false);
                    }}
                    style={{ cursor: "pointer", padding: "5px", color: "#E88982" }}
                  >
                    Sign In
                  </div>
                  <div
                    onClick={() => {
                      navigate('/signup');
                      setShowMenu(false);
                    }}
                    style={{ cursor: "pointer", padding: "5px", color: "#E88982" }}
                  >
                    Sign Up
                  </div>
                </div>
              )}
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

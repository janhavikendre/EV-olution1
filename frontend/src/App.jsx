import React from "react";
import NavBar from "./components/navBar";
import HomePage from "./components/homePage";
import CourseList from "./components/courseList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "./components/signin";
import Signup from "./components/signup";
import About from "./components/about";

const App = () => {
  return(
    
      <Router>
        <div>
        <NavBar />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        </Routes>
        <About />
    </div>
    </Router>

  )
}

export default App;
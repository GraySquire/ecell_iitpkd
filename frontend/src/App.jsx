import Home from "./components/Home"
import Navbar from "./components/Navbar";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import AllEvents from "./pages/AllEvents.jsx";
import Contacts from "./pages/Contacts.jsx";
import './App.css'
import Footer from "./components/Footer.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  return (
    <>
    <ScrollToTop />
    <Navbar></Navbar>
    {/* <RightNavBar/> */}
    {/* <Router> */}  
    {/* if Router is present then it is not rendering the website */}
        <Routes>
                  <Route path="/" element={<Home></Home>}></Route>
                  <Route path="/allevents" element={<AllEvents></AllEvents>}></Route>
                  <Route path="/contact" element={<Contacts></Contacts>}></Route>
      </Routes>
    {/* </Router> */}
    
      
    </>
  );
}

export default App

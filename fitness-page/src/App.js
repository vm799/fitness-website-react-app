import React from "react";
import Navbar from "./Components/Navbar"
import Feature from "./Components/Feature"
import Offer from "./Components/Offer"
import About from "./Components/About"
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Header />
     <Feature />
     <Offer />
     <About />
     <Contact />
     <Footer />
    </div>
  )
}

export default App;

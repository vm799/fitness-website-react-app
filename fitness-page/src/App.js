import React from "react";
import Navbar from "./Components/Navbar"
import Feature from "./Components/Feature"
import Offer from "./Components/Offer"
import About from "./Components/About"
import Header from "./Components/Header";
import Contact from "./Components/Contact"

function App() {
  return (
    <div className="App">
     <Navbar />
     <Header />
     <Feature />
     <Offer />
     <About />
     <Contact />
    </div>
  );
}

export default App;

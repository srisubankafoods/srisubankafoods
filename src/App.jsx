import React from "react";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Products from "./components/Products/Products";
import Connect from "./components/connect/Connect";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import "./App.css";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Products />
      <WhyChooseUs />
      <Connect />
      <Contact />
      <Footer />
      <WhatsAppButton/>
    </>
  );
}

export default App;

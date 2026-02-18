import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Products from "./components/Products/Products";
import Connect from "./components/connect/Connect";
import Home from "./components/Home/Home";
import React from "react";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Home />
      <Products />
      <About />
      <Connect />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Products from "./components/Products/Products";
import Connect from "./components/connect/Connect";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
function App() {

  return (
    <>
      <Header />
      <div id="Home-page1"></div>
      <Home />
      <div id="Products-page1"></div>
      <Products />
      <div id="first"></div>
      <About/>
      <Connect />
      <div id="first"></div>
      <Contact />
      <Footer />
    </>
  );
}

export default App;

import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Products from "./components/Products/Products";
import Connect from "./components/connect/Connect";
import Home from "./components/Home/Home";
import React from "react";
function App() {
  return (
    <>
      <Header />
      <Home />
      {/* <Products /> 
       <Contact/> */}
      <Connect />
    </>
  );
}

export default App;

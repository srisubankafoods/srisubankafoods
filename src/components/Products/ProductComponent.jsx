import { useState } from "react";
import "./ProductComponent.css";
import ProductSlide from "./ProductSlider";
import { motion } from "framer-motion";

const ProductComponent = ({
  cn,
  alter = "",
  heading1,
  heading2,
  heading3,
  para1,
  para2,
  para3,
  imgArr = [],
}) => {
  const[activeBtn,setActiveBtn]=useState("btn1  ")
  return (
    <>
     <div className={cn}>
        <ProductSlide images={imgArr} alter={alter} />
        <h1>{heading1}</h1>
        <p>{para1}</p>

        <div className="productbtns">
    
          <button
          id="b-1"
            className={activeBtn === "btn1" ? "active" : ""}
            onClick={ ()=>setActiveBtn("btn1")}
          >
            
            {heading2 && <h2>{heading2}</h2>}
          </button>

          <button
          id="b-2"
            className={activeBtn === "btn2" ? "active" : ""}
            onClick={() => setActiveBtn("btn2")}
          >
            {heading3 && <h2>{heading3}</h2>}
          </button>
        </div>

        {activeBtn === "btn1" && para2 && <p>{para2}</p>}
        {activeBtn === "btn2" && para3 && <p>{para3}</p>}
      </div>
    </>
  );
};
export default ProductComponent;

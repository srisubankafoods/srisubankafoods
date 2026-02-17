import "./ProductComponent.css";
import ProductSlide from "./ProductSlider";



const ProductComponent = ({
  cn,
  alter="",
  heading1,
  heading2,
  heading3,
  para1,
  para2,
  para3,
  paranew1,
  paranew2,
  paranew3,
  paranew4,
  imgArr = [],
}) => {
  
  return (
    <>
      <div className={cn}>
        <ProductSlide images={imgArr} alter={alter} />
        <h1>{heading1}</h1>
        <p>{para1}</p>
        {heading2 && <h2>{heading2}</h2>}
        {para2 && <p>{para2}</p>}
        {heading3 && <h2>{heading3}</h2>}
        {para3 && <p>{para3}</p>}
        {paranew1 && <p>{paranew1}</p>}
        {paranew2 && <p>{paranew2}</p>}
        {paranew3 && <p>{paranew3}</p>}
        {paranew4 && <p>{paranew4}</p>}
      </div>
    </>
  );
};
export default ProductComponent;

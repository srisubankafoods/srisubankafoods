import React from "react";
import "./Products.css";
import ProductComponent from "./ProductComponent";
import Heading from "./../ui/Heading/Heading.jsx";
function Products() {
  return (
    <>
    <div id="Products-page">
      <Heading
        heading="Product Line"
        subHeading=""
      />
      <h3 className="product-second-line">We are committed to promoting nutritious traditional grains by
          transforming millets into convenient, modern food solutions. Our
          millet-based products combine health benefits, authentic taste, and
          ease of preparation — ideal for both domestic and international
          markets.</h3>

      <div className="all">
        <ProductComponent
          imgArr={[1, 2, 3, 4]}
          alter={"MilletDryIdlyDosaBatter"}
          cn={"MilletRava"}
          heading1={"Millet Rava"}
          heading2={"Ideal for"}
          heading3={"Variants"}
          para1="Finely processed from premium-quality millets, our Millet Rava is a
            versatile ingredient suitable for a variety of traditional and
            modern dishes"
          para2="Upma / Pongal / Kichadi / Kesari / Payasam and many more."
          para3="Foxtail Millet / Kodo Millet / Little Millet / Finger Millet / Pearl
            Millet."
        />
        <ProductComponent
          imgArr={[7]}
          alter={"MilletRoti"}
          cn={"MilletRoti"}
          heading1={"Millet Roti"}
          heading2={"Benefits"}
          heading3={"Ideal for"}
          para1=" Our Millet Roti offers a wholesome alternative to wheat-based
            flatbreads, made from carefully selected millets to deliver both
            nutrition and taste."
          para2="  Gluten-free option, High in calcium and iron ,Suitable for
            diabetic-friendly diets ,Soft texture with flavor"
          para3="Daily meals, health-conscious consumers, and specialty diets."
        />
        <ProductComponent
          imgArr={[5, 6]}
          alter={"MilletDryIdlyDosaBatter"}
          cn={"MilletDryIdlyDosaBatter"}
          heading1={"Millet Dry Idly/Dosa Batter"}
          heading2={"Benefits"}
          heading3={"Ideal for"}
          para1=" A convenient solution for preparing soft, traditional idlis using
            millet instead of polished rice. Our dry batter ensures consistent
            results with minimal preparation."
          para2="High fiber content,Better blood sugar management,
            Nutrient-dense alternative to rice"
          para3={
            "Daily meals, health-conscious consumers, and specialty diets."
          }
        />
      </div>
      </div>
    </>
  );
}
export default Products;

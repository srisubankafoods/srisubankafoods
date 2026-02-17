import "./ProductSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import img1 from "./images/flour.jpeg";
import img2 from "./images/flour2.jpeg";
import img3 from "./images/dosaidly.jpeg";
import img4 from "./images/milletrava.jpeg";
import img5 from "./images/dosa.jpeg";
import img6 from "./images/idly.jpeg";
import img7 from "./images/chappathi.jpeg";

function ProductSlide({ images, alter }) {
  console.log(images);

  if (!images || images.length === 0) return null;
  return (
    <>
      <Slider autoplay arrows={false}>
        {images.map((img, i) => {
          const imgMap = {
            1: img1,
            2: img2,
            3: img3,
            4: img4,
            5: img5,
            6: img6,
            7: img7
          };
          return <img key={i} src={imgMap[img]} alt={alter} />;
        })}
      </Slider>
    </>
  );
}
export default ProductSlide;

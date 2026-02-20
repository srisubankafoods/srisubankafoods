import "./ProductSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import img1 from "./../../assets/imagess/flour.jpeg";
import img2 from "../../../assets/imagess/flour2.jpeg";
import img3 from "./../../assets/imagess/dosaidly.jpeg";
import img4 from "./../../assets/imagess/milletrava.jpeg";
import img5 from "./../../assets/imagess/dosa.jpeg";
import img6 from "./../../assets/imagess/idly.jpeg";
import img7 from "./../../assets/imagess/chappathi.jpeg";

function ProductSlide({ images, alter }) {


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

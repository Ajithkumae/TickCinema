import Carousel from "react-bootstrap/Carousel";
import data from "../../appData/Data.json";
function SliderImages() {
  return (
    <div>
      <Carousel>
        {data.map((item, index) => {
          return (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={item.Image}
                alt={"First slide" + index}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default SliderImages;

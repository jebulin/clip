import { useState } from "react";
import { Carousel } from "react-bootstrap";

const ImageCarousel = (props: { images: string[] }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    console.log(props.images, selectedIndex);
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {props.images.map((img, index) => (
        <Carousel.Item key={index}>
          <img
            src={img}
            className="carousel-img"
            style={{
              width: "100%",
              height: "60vh",
              objectFit: "contain",
              display: "block",
              margin: "0 auto",
            }}
            alt={`carousel-img-${index}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;

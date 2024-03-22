import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

type Props = {
  images: string[]
}

function SimpleSlider({ images }: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <Image src={`/assets/images/${img}`} alt={"images"} width={100}
              height={20} id="sliderId" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;

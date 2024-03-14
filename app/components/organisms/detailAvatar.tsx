'use client'
import Slider from "react-slick";
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import heroImage from "../../../public/assets/images/9addc10f-e20a-4671-b78d-9d44c8847311.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "../molecules/slider";




function DetailAvatar() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>();

  const images = [
    "8c133be6-307d-4ff9-8c16-05bc9bd7f78b.jpg",
    "9addc10f-e20a-4671-b78d-9d44c8847311.jpg",
    "0451cb1c-4114-46fe-83ea-fdcc08bbb40d.jpg",
    "0451cb1c-4114-46fe-83ea-fdcc08bbb40d.jpg",
    "0451cb1c-4114-46fe-83ea-fdcc08bbb40d.jpg",
    "0451cb1c-4114-46fe-83ea-fdcc08bbb40d.jpg",
    "0451cb1c-4114-46fe-83ea-fdcc08bbb40d.jpg",
    // subimage1, subimage2, subimage3, subimage4, subimage5, subimage6, subimage7
  ]

  const icons = [
    "10673479_bathroom_wc_washroom_toilet_seat_icon.png",
    "10673488_sofa_armchair_furniture_living_room_icon (1).png",
    "10673473_healthcare_first_aid_kit_emergency_icon.png",
    "10673461_garage_car_parking_vehicle_transportation_icon.png",
    "10673460_router_modem_wifi_computer_access_icon.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => {
  //     console.log('moving', -300);

  //     if (prev <= 0) return 0;

  //     return -300;
  //   });
  // }



  // const nextSlide = (): void => {
  //   setCurrentSlide((prev) => {
  //     const next_slide = prev + 300;

  //     const totalScrollWidth = images.length * 102.5; // 2.5 is the shared gap (5px) divided by 2;

  //     console.log('moving', {next_slide, totalScrollWidth});
  //     if (next_slide > totalScrollWidth) return -Math.floor(totalScrollWidth);

  //     return next_slide;
  //   });
  // }

  // useEffect(() => {
  //   // const interval = setInterval(() => {
  //   //   nextSlide();
  //   // }, 3000);

  //   if (!sliderRef.current) return;

  //   sliderRef.current.scrollBy(currentSlide, 0);

  //   // return () => clearInterval(interval);
  // }, [currentSlide]);



  return (
    <div>
      <div className="avatarWrapper">
        <div className="subWrapperAvatar">
          <div className="leftavatar">

            <Image src={heroImage} alt="Hero image" id="sliderAvatar" layout='responsive' width={100} height={100} />
          </div>
          <div className="rightAvatar">
            <div className="comfort">
              <p id="apartment">Apartment</p>
              <div className="comfortable">
                <p id="comfort">Comfort</p>
              </div>
            </div>
            <h3 id="stylish">Stylish city apartement with gym, pool and harbour views</h3>

            <div className="houselocation">
              <i className="fa-solid fa-location-dot"></i>
              <p id="exactlpcation">Exact Location</p>
            </div>
            <p id="price"><i>$2500 Monthly</i></p>
            <div className="facilities">
              <div className="bathrooms">
                {icons.map((icons, index) => (
                  <Image src={`/assets/images/${icons}`} alt='Icons' key={index} width={30} height={10} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="carousel">
          {/* <button id="decrement" onClick={prevSlide}>&lt;</button> */}
          <div className="imagess">
          <SimpleSlider images={images}/>

            {/* <Image
              src={images[currentSlide]}
              alt={`image ${currentSlide + 1}`}
              id="carouselimages"
              width={100}
              height={30}
            /> */}

            {/* <Slider {...settings}>
              {images.map((img, i) => (
                <div>
                  <Image
                    key={i}
                    src={`/assets/images/${img}`}
                    alt={`image ${i}`}
                    id="carouselimages"
                    width={100}
                    height={30}
                  />
                </div>
              ))}
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
            </Slider> */}


          </div>
          {/* <button id="increment" onClick={nextSlide}>&gt;</button> */}
        </div>
      </div>
    </div>
  )
}

export default DetailAvatar
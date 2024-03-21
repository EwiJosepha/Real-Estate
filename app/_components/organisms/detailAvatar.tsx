'use client'
import Slider from "react-slick";
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import heroImage from "../../../public/assets/images/photo-1506126279646-a697353d3166.avif"
import gf from "../../../public/assets/images/istockphoto-1319747564-170667a.webp"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "../molecules/slider";




function DetailAvatar() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>();

  const images = [
    "photo-1531971589569-0d9370cbe1e5.avif",
    "photo-1565297032488-90722f09db62.avif",
    "istockphoto-1182454657-170667a.webp",
    "istockphoto-1319747564-170667a.webp",
    "istockphoto-1319747564-170667a.webp",
    "istockphoto-1319747564-170667a.webp",
    "istockphoto-1319747564-170667a.webp",

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
          <SimpleSlider images={images} />
          {/* <button id="decrement" onClick={prevSlide}>&lt;</button> */}
          {/* <button id="increment" onClick={nextSlide}>&gt;</button> */}
        </div>
      </div>
    </div>
  )
}

export default DetailAvatar

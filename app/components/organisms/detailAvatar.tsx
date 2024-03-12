'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import heroImage from "../../../public/assets/images/9addc10f-e20a-4671-b78d-9d44c8847311.jpg"
import subimage1 from "../../../public/assets/images/8c133be6-307d-4ff9-8c16-05bc9bd7f78b.jpg"
import subimage2 from "../../../public/assets/images/9addc10f-e20a-4671-b78d-9d44c8847311.jpg"
import subimage3 from "../../../public/assets/images/0451cb1c-4114-46fe-83ea-fdcc08bbb40d.jpg"
import subimage4 from "../../../public/assets/images/0451cb1c-4114-46fe-83ea-fdcc08bbb40d.jpg"
import subimage5 from "../../../public/assets/images/0451cb1c-4114-46fe-83ea-fdcc08bbb40d.jpg"
import subimage6 from "../../../public/assets/images/0451cb1c-4114-46fe-83ea-fdcc08bbb40d.jpg"
import subimage7 from "../../../public/assets/images/0451cb1c-4114-46fe-83ea-fdcc08bbb40d.jpg"
import bath from "../../../public/assets/images/10673479_bathroom_wc_washroom_toilet_seat_icon.png"
import sofa from "../../../public/assets/images/10673488_sofa_armchair_furniture_living_room_icon (1).png"
import healthcare from "../../../public/assets/images/10673473_healthcare_first_aid_kit_emergency_icon.png"
import garage from "../../../public/assets/images/10673461_garage_car_parking_vehicle_transportation_icon.png"
import wifi from "../../../public/assets/images/10673460_router_modem_wifi_computer_access_icon.png"




function DetailAvatar() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const images = [
    subimage1, subimage2, subimage3, subimage4, subimage5, subimage6, subimage7
  ]

  const prevSlide = () => {
    setCurrentSlide((prev) => prev === 0 ? images.length - 1 : prev - 1)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => prev === images.length - 1 ? 0 : prev + 1)
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [currentSlide]);

  const icons = [
    bath, sofa, wifi, healthcare, garage
  ]

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
            {icons.map((icons, index)=>(
              <Image src={icons} alt='Icons' key={index} width={30} height={20}/>
            ))}
              </div>
            </div>
          </div>
        </div>

        <div className="carousel">
          <button id="decrement" onClick={prevSlide}>&lt;</button>
          <div className="imagess">

            <Image
              src={images[currentSlide]}
              alt={`image ${currentSlide + 1}`}
              width={100}
              height={50}
            />


          </div>
          <button id="increment" onClick={nextSlide}>&gt;</button>
        </div>
      </div>
    </div>
  )
}

export default DetailAvatar

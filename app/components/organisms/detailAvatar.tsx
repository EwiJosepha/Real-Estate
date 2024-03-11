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

  return (
    <div>
      <div className="avatarWrapper">
        <div className="subWrapperAvatar">
          <div className="leftavatar">
          
            <Image src={heroImage} alt="Hero image" id="sliderAvatar" layout='responsive' width={100} height={100} />
          </div>
          <div className="rightAvatar">
            <h1>A villa style house is traditionally a more secluded house, often single-level, designed to be a home for a single family, usually on spacious property that puts it at a distance from other houses or at least come with a private courtyard or other areas that solely belongs to the property owner</h1>

            <p>$2500 Monthly</p>
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

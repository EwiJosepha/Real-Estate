'use client'
import React from 'react'
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
  const images = [
    subimage1, subimage2, subimage3, subimage4, subimage5, subimage6, subimage7
  ]

  let index = 0
  const imagesLength = images.length
  const interval = setInterval(() => {
    index++
    slideImages()
  }, 2000)

  function slideImages() {
    if (index > imagesLength - 1) {
      index = 0
    }

  }

  const incrementIndex = () => {
    // tenary operator
    index === images.length - 1 ? (index = 0) : index++;
    // if (images.length - 1 === index) {
    //   index = 0;
    // } else {
    //   index++;
    // }
  };

  const decrementIndex = () => {
    // tenary operator
    index === 0 ? (index = images.length - 1) : index--;
  
    // if (index === 0) {
    //   index = images.length - 1;
    // } else {
    //   index--;
    // }
  };

  (function updateIndexAutomatically() {
    const intervalId = setInterval(() => {
      incrementIndex();
    }, 5000);
  })();

  return (
    <div>
      <div className="avatarWrapper">
        <div className="subWrapperAvatar">
          <div className="leftavatar">
            <Image src={heroImage} alt="Hero image" id="sliderAvatar" layout='responsive' width={100} height={100} />
          </div>
          <div className="rightAvatar">

          </div>
        </div>

        <div className="carousel">
          <button id="decrement" onClick={() => decrementIndex}>&lt;</button>
          <div className="imagess">
            {images.map((img, index) => (
              <Image src={img} key={index} alt="Sub-Images" width={100} height={50} id="objectfit" />
            ))}
          </div>
          <button id="increment" onClick={() => incrementIndex}>&gt;</button>
        </div>
      </div>
    </div>
  )
}

export default DetailAvatar

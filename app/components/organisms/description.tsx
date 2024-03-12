import React from 'react'
import Image from 'next/image'
import avatar from "../../../public/assets/images/8c133be6-307d-4ff9-8c16-05bc9bd7f78b.jpg"

function Description() {
  return (
    <div>
      <div className="descriptionwrapper">
        <h1 id="propertyD">Get All The Details Of Property</h1>
        <div className="cardes">
          <div className="beautytext">
        <div className="subdescription">
        <div className="nameofhouse">
          <p>House name</p>
          <p>Location</p>
        </div>
        <div className="characteristics">
          <p>short house description</p>
          <p>hose Area</p>
          <p>house status</p>
          <p>Agent Name</p>
          <p>Price</p>
        </div>
        <div className="shortdescript">
          <p>number of rooms</p>
          <p>number of baths</p>
          <p>garage</p>
          <p>Space</p>
        </div>
      </div>
      <div className="smallcard">
        <h2>Best Services In Ever!!</h2>
      </div>
      </div>
        <div className="descard">
          <Image src={avatar} id="imgdetails" alt="main House" layout = "responsive" width={100} height={100}/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Description

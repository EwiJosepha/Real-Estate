import React from 'react'
import Image from 'next/image'
import houseAvatar from "../../../public/assets/images/collection_banner_ovf_1.webp"

function Luxury() {
  return (
    <div>
      <div className="luxurySection">
        <div className="houseTextWrapper">
        <div className="luxuryHouse">
        <Image id="imagedes" src={houseAvatar} alt="image" layout="responsive" width={100} height={100}/>
        </div>
        <div className="luxuryText">
          <h1 id="segment">SPECIALIST IN THE LUXURY SEGMENT</h1>
          <span id="luxuryMsg">With recognized relevant experience in the development sector, the brand is increasingly identified as a specialist in this high-quality segment. The portfolio has more than 300 luxury developments, which allows developers, builders and other investors to choose the RE/MAX Collection as the option when delivering their project.</span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Luxury

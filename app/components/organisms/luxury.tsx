import React from 'react'
import Image from 'next/image'

function Luxury() {
  return (
    <div className="luxurySection flex items-center justify-center md:mx-auto md:w-3/4 lg:w-2/3 mb-20 mt-16">
      <div className="houseTextWrapper">
        <div className="luxuryHouse">
          <img id="imagedes" src='banner.webp' alt="image" style={{ width: '90%', height: '500px', objectFit: 'cover' }} />
        </div>
        <div className="luxuryText hidden md:block">
          <h1 id="segment">SPECIALIST IN THE LUXURY SEGMENT</h1>
          <span>With recognized relevant experience in the development sector, the brand is increasingly identified as a specialist in this high-quality segment. The portfolio has more than 300 luxury developments, which allows developers, builders and other investors to choose the D&J Collection as the option when delivering their project.</span>
        </div>
      </div>
    </div>
  )
}

export default Luxury

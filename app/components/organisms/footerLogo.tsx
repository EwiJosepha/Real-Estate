import React from 'react'
import Image from 'next/image'
import logo from "../../../public/assets/images/4373182_earth_logo_logos_icon.png"

function FooterLogo() {
  return (
    <div>
      <div className="forlogo items-center justify-center ">

        <div className="flex items-center">
          <div className="line1"></div>
          <p id="footertext">THE</p>
          <div className="line2"></div>
        </div>

        <div className="flex items-center flex-col justify-center">

          <div className="flex text-white items-center justify-center">
            <div className="imgr">
              <Image src={logo} alt='Logo' width={45} height={50} />
            </div>

            <div>
              <h2 className='font-extrabold font-serif text-xl'>D&J</h2>
              <p id="collection">COLLECTION</p>
            </div>
          </div>

          <div className="line3"></div>

        </div>
      </div>
    </div>
  )
}

export default FooterLogo



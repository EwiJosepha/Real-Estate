import React from 'react'
import Image from 'next/image'
import logo from "../../../public/assets/images/4373182_earth_logo_logos_icon.png"

function FooterLogo() {
  return (
    <div>
          <div className="forlogo" style={{ display: "flex" }}>
                <div className="personaliseLogo">
                  <div className="imgr">
                    <Image src={logo} alt='Logo' width={50} height={50} />
                  </div>
                </div>
                <div className="foterline">
                  <div className="lines">
                    <div className="line1"></div>
                    <p id="footertext">THE</p>
                    <div className="line2"></div>
                  </div>
                  <div className="dj">
                    <h2 id="personaliseLogo">D&J</h2>
                    <p id="collection">COLLECTION</p>
                    <div className="line3"></div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default FooterLogo



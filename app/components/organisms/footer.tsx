import React from 'react'
import Image from 'next/image'
import logo from "../../../public/assets/images/9034714_logo_buffer_icon.png"
import facebook from "../../../public/assets/images/5365678_fb_facebook_facebook logo_icon.png"
import instagram from "../../../public/assets/images/5296765_camera_instagram_instagram logo_icon.png"

function Footer() {
  return (
    <div>
      <div className="footerWrapper">
        <div className="footerlogoWrapper">
          <div className="footerLogo">
            <div className="flexWrapper">
              <div className="forlogo" style={{display:"flex"}}>
        <div className="personaliseLogo">
          <div className="imgr">
          <Image src={logo} alt='Logo' width={50} height={50}/>
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
        <div className="fcbFooter">
          <Image src={facebook} alt="facebookLogo" width={40} height={40}/>
          <Image src={instagram} alt="Instagram" width={40} height={40}/>
        </div>
        </div>
        </div>
          <div className="footerLog"></div>
        </div>

      </div>
    </div>
  )
}

export default Footer

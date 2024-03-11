import React from 'react'
import FooterLogo from './footerLogo'

function DetailsHero() {
  return (
    <div>
      <div className="detailspageWrapper">
        <div className="villa">
          <FooterLogo />

          <div className="propertyname">
            <i className="fa-solid fa-location-dot"></i>
            <h1 id="villa">Villa Ultra Lucxieu</h1>
          </div>
        </div>
        <div className="heart">
        <i className="fa-regular fa-heart"></i>
        <i className="fa-solid fa-code-merge"></i>
        </div>
      </div>
    </div>
  )
}

export default DetailsHero

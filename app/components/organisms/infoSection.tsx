import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function InfoSection() {


  return (

    <div className="wrapper">
      <div className="dwrapperr" style={{ display: "flex" }}>
        <div className="innerDiv">
          <div id="line"></div>
          <h1 id="headertext">RE/MAX COLLECTION</h1>
          <p id="descriptionInfo">Since its creation in 2011, RE/MAX Collection Portugal has consistently maintained its position as the number one specialist real estate company in the luxury segment in Portugal. With an impressive portfolio of around 1,000 properties and a team of 1,000 certified real estate consultants, it has established itself as an industry leader in the luxury real estate segment. Its unwavering dedication to providing a superior level of service and personalized care sets it apart from its competitors. One of the main factors that differentiate RE/MAX Collection Portugal is its recognized experience in Marketing, specializing in the promotion and presentation of properties to potential buyers or investors, nationally and internationally.</p>

          <div className="agenciesDescription">
            <div className="agencies">
              <h1>12</h1>
              <span>Agencies</span>
            </div>
            <div className="agents">
              <h1>+20</h1>
              <span>Real Estate Agents</span>
            </div>
            <div className="sales">
              <h1>+$1,5B</h1>
              <span>Annual Sales</span>
            </div>
            <div className="luxury">
              <h1>180</h1>
              <span>Number of luxury property sold in 2023</span>
            </div>
          </div>
        </div>
        <div className="innerDiv2">
          <h1>hello</h1>
          <Image src="" alt="avatar" width={200} height={200}/>

       
          
        </div>
      </div>
    </div>

  )
}

export default InfoSection

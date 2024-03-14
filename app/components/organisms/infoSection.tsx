import React from 'react';
import Image from 'next/image';
import avatar1 from "../../../public/assets/images/collection_banner_ovf_0.webp";
import Link from 'next/link';
import Luxury from './luxury';

function InfoSection() {
  return (
    <div className="wrapper pt-10 bg-blue text-white">
      <div className="flex items-center justify-center md:mx-auto md:w-3/4 lg:w-2/3">
        <div className="innerDiv">
          <div id="line"></div>
          <h1 id="headertext">D&J COLLECTION</h1>
          <p id="descriptionInfo">Since its creation in 2020, D&J Collection Cameroon has consistently maintained its position as the number one specialist real estate company in the luxury segment in Cameroon. With an impressive portfolio of around 1,000 properties and a team of 1,000 certified real estate consultants, it has established itself as an industry leader in the luxury real estate segment. Its unwavering dedication to providing a superior level of service and personalized care sets it apart from its competitors.</p>

          <div className="agenciesDescription">
            <div className="agencies">
              <strong className="numberFont">12</strong>
              <span>Agencies</span>
            </div>
            <div className="agents">
              <strong className="numberFont">+20</strong>
              <span>Real Estate Agents</span>
            </div>
            <div className="sales subdiv">
              <strong className="numberFont">+$1,5B</strong>
              <span>Annual Sales</span>
            </div>
            <div className="luxury">
              <strong className="numberFont">180</strong>
              <span>Number of luxury <br />properties sold in 2023</span>
            </div>
          </div>
        </div>
        <div className="innerDiv2">
          <Image src={avatar1} alt="avatar" layout="responsive" width={200} height={200} />
        </div>
      </div>
      <Luxury />
    </div>
  );
}

export default InfoSection;
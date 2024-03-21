import React from 'react'
import FooterLogo from './footerLogo'
import Link from 'next/link'
import { FaHeart } from 'react-icons/fa'
import { FaCodeMerge } from 'react-icons/fa6'

function DetailsHero() {
  return (
    <>
      <div className="detailspageWrapper text-black border-b-2 border-gray-400">

        <div className="villa">
          <FooterLogo />
        </div>

        <div className="heart">
          <Link href='/contactPage'> Contact Us</Link>
          <Link href='/description'>Amenities</Link>
          <Link href='/#'>Get Help</Link>
          <FaHeart />
          <FaCodeMerge />
        </div>

      </div>
    </>
  )
}

export default DetailsHero

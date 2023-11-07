import React from 'react'
import Image from 'next/image'
export default function Footer() {
  return (
    <div className='grid md:grid-cols-3 bg-[#131313] lg:px-28 2xl:px-72 px-10 py-10 text-center justify-center'>
        <div className='md:text-left py-2'>
            <Image src="/logo.svg" width={300} height={300} alt='logo'/>
            <p className='py-4'>Your Freelance Hub for Affordable and Efficient Startup Solutions, Bridging Talent and Business Innovation</p>
            <p>@sidegigsdesignlab.com</p>
        </div>
        <ul className='py-2'>
            <li>Company</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Products</li>
        </ul>
        <div className='md:text-left py-2'>
            <h3>Contact Us</h3>
            <p>We typically respond to inquiries within 24 hours during business days.</p>
            <p>sidegigsdesignlab@gmail.com</p>
        </div>
    </div>
  )
}

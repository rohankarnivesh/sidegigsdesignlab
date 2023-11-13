import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Who() {
  return (
    <div className="bg-[#f0f0f0] leading-loose text-black py-16 flex flex-col justify-center" id='who'>
        <h2 className='text-center text-2xl font-semibold'>WHO WE ARE</h2>
        <h2 className='text-center text-3xl py-10 px-16 lg:text-5xl font-semibold 2xl:px-80'>We&apos;re a remote tribe of creatives, transforming startups into digital wonders, one project at a time</h2>
        <div className='text-center mt-12'>
            <Link href="/project" className='font-semibold text-xl p-4 bg-[#CEF62E]'>Get Free Consultation <Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z'%3E%3C/path%3E%3C/svg%3E" width={24}height={24} className='inline' alt=""/></Link>
        </div>
    </div>
  )
}

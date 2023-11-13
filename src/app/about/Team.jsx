import React from 'react'
import Image from 'next/image'
import Imgcard from './Imgcard'

export default function Team() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
        <h1 className='md:text-4xl pb-10 text-2xl font-semibold'>Meet Side gig&apos;s Dream Team
             <Image src="https://res.cloudinary.com/dwevgksvg/image/upload/v1699891874/sidegigs/qvuni60kwqbn3u2yzkzz.svg" width={52} height={52} alt='' className='inline'/>
            </h1>
      <Imgcard />
    </div>
  )
}

import React from 'react'
import Image from 'next/image'
export default function Card({position, type, icon}) {
  return (
      <div className='grid grid-cols-2 md:grid-cols-3 justify-start lg:justify-between items-center py-5 hover:cursor-pointer'>
        <h1 className='md:text-2xl font-semibold px-4 p-5'>{position}</h1>
        <p className='text-sm pl-2'>{type}</p>
        <div className='md:flex hidden justify-end'>
          <Image src={icon} width={24} height={24} alt='' className='inline object-center'/>
        </div>
    </div>
  )
}

import React from 'react'
import Image from 'next/image'
export default function ServiceCard({iconUrl, title, demo}) {
  return (
      <div className='grid justify-center text-[#f0f0f0] font-medium'>
          <div className="bg-[#131313] lg:w-64 w-72 2xl:w-full h-60 md:h-64 text-left px-6 border rounded-2xl py-12">
              <Image src={iconUrl} width={58} height={58} alt="service-card"/>
              <h3 className='text-xl lg:text-2xl mt-6'>{title}</h3>
          </div>
          <div className=' cursor-pointer'>
              <h2 className='px-10 bg-[#131313] hover:bg-[#CEF62E] transition-all ease-in-out hover:text-black border rounded-lg text-lg py-2 mt-4'>
                {demo}
               <Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z'%3E%3C/path%3E%3C/svg%3E" 
               width={24} 
               height={24} 
               alt='' 
               className='inline' /></h2>
          </div>
    </div>
  )
}

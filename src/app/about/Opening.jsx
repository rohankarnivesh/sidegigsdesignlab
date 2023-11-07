"use client";
import React, {useRef } from 'react'
import Card from './Card';


const openingData=[
    {
        id:1,
        position:"Front End Developer",
        type:"Remote - Part time",
        icon:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z'%3E%3C/path%3E%3C/svg%3E"
    },
    {
        id:2,
        position:"Back End Developer",
        type:"Remote - Part time",
        icon:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z'%3E%3C/path%3E%3C/svg%3E"
    },
    {
        id:3,
        position:"Video Editor",
        type:"Remote - Part time",
        icon:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z'%3E%3C/path%3E%3C/svg%3E"
    },
    {
        id:4,
        position:"Business Development Associate",
        type:"Remote - Part time",
        icon:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z'%3E%3C/path%3E%3C/svg%3E"
    },
    {
        id:5,
        position:"SEO Specialist",
        type:"Remote - Part time",
        icon:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z'%3E%3C/path%3E%3C/svg%3E"
    },
]
export default function Opening() {
    const ref = useRef(null);
  return (
    <div ref={ref} className='px-4 md:px-96 flex flex-col bg-[#f0f0f0] text-[#131313]'>
         {openingData.map((opening, index) => (
                  <div
                      key={index}
                      className="lg:px-0 px-4 flex flex-col w-full"
                  >
                    <hr />
                    <Card
                        key={opening.id}
                        position={opening.position}
                        type={opening.type}
                        icon={opening.icon}   
                    />
                  </div>
                ))}

    </div>
  )
}

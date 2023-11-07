import React from 'react'
import Image from 'next/image'

export default function Product() {
  return (
    <div className='px-4 lg:px-28 2xl:px-96 pt-10 text-center flex flex-col h-[80vh] justify-center bg-[#131313] text-[#f0f0f0]'>
          <h1 className='text-xl md:text-4xl xl:text-5xl py-4'>Exciting News! 🌟 Our Team Is Cooking Up Something
              Extraordinary! Stay Tuned To Our Product Section For An
              Exclusive Sneak Peek Into Our Upcoming Marvel. <br />
              <span className='text-[#CEF62E] md:text-5xl font-medium text-2xl'>Get Ready To Be Amazed!</span></h1>
        <div className='flex justify-center py-6'>
            <Image src="/eye.gif" width={100} height={100} alt='' className=''/>
            <Image src="/eye.gif" width={100} height={100} alt='' className=''/>
        </div>
    </div>
  )
}

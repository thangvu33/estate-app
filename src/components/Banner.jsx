import React from 'react'
import  Search  from '../components/Search'
import Image from '../assets/img/house-banner.png'

function Banner() {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center px-4 lg:px-0 flex-1'>
            <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
              <span className='text-violet-700'>Rent</span> Your Dream House With Us
            </h1>
            <p className='max-w-[480px] mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Cum placeat consequatur, asperiores eligendi alias ratione 
                ipsa recusandae tempora non magnam!
            </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
            <img src={Image} alt="" />
        </div>
      </div>
      <Search />
    </section>
  )
}

export default Banner

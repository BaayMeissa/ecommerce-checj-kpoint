import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div className=''>
            {/* <img src={assets.logo} alt="" className='mb-5 w-32'/> */}
            <h1 className='mb-10 text-3xl'>Njambur Tech Zone</h1>
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, dolorum perspiciatis! 
                Nisi maxime fuga eos. Praesentium nihil soluta qui ea quasi, labore laboriosam quaerat quas quisquam sint facilis ex similique.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>HOME</li>
                <li>ABOUT US</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>
                GET IN TOUCH
            </p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>77 440 96 48</li>
                <li>meissambaye09@gmail.com</li>
            </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ BaayMeissa - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer

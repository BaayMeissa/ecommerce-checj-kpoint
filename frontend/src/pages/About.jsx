import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
    </div>

    <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col gap-6 justify-center md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem unde distinctio, a accusamus cumque laudantium. Dolorum ipsam esse magnam minus est! Saepe placeat enim hic mollitia quidem quibusdam impedit odit?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tenetur magni, facilis accusamus exercitationem, dolorum repellendus rerum quo, quisquam inventore saepe quia itaque atque dicta? Ipsam labore autem exercitationem deserunt?</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo perspiciatis laudantium aperiam, odit omnis perferendis nemo aut, quasi nisi, voluptatem culpa modi cumque quidem voluptatibus commodi quam ullam aliquam tempora!</p>
        </div>
    </div>

    <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US ?'}/>
    </div>

    <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Asurance</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quidem enim repellendus sint architecto similique sed fugit. Libero nostrum accusamus, voluptatibus accusantium inventore minima? Totam, quibusdam! Explicabo, cum nihil. Obcaecati.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quidem enim repellendus sint architecto similique sed fugit. Libero nostrum accusamus, voluptatibus accusantium inventore minima? Totam, quibusdam! Explicabo, cum nihil. Obcaecati.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional customer service</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quidem enim repellendus sint architecto similique sed fugit. Libero nostrum accusamus, voluptatibus accusantium inventore minima? Totam, quibusdam! Explicabo, cum nihil. Obcaecati.</p>
        </div>
    </div>

    <NewsletterBox/>

    </div>
  )
}

export default About

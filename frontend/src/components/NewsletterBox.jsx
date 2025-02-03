import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler=(e)=>{
        e.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now</p>
      <p className='text-gray-400 mt-3'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vero aliquid rerum laborum? Accusamus beatae eligendi repudiandae nemo 
        laboriosam tempore rerum blanditiis illo quaerat eaque a ad voluptatibus, fugiat quae.</p>
        <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' onSubmit={onSubmitHandler}>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
            <button className='bg-black text-white texy-xs px-10 py-4' type="submit">SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox

import React from 'react'

function SectionTitle({title,})
 {
  return (
    <div  className='flex gap-10 py-5 items-center'>
      <h1 className=' text-3xl  text-[#ef3939]  ' >{title}</h1>
      <div className='bg-tertiary w-60 h-[2px]'></div>
    </div>
  )
}

export default SectionTitle

import React from 'react'
import { useSelector } from 'react-redux';

function Intro() {
  const { portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstname, lastname, welcometext, description, caption } = intro;
  return (
    <div className='h-[90vh] bg-primary  flex flex-col items-start 
     gap-4 mt-4'>
      <h1 className=' text-black text-2xl  sm:text-1xl font-semibold'>  {welcometext || "uu"}</h1>
      <h1 className=' text-secondry text-8xl  sm:text-3xl font-semibold'> {firstname || "yy"} {lastname || ""}  </h1>
      <h1 className=' text-secondry text-5xl  sm:text-3xl'> {caption || ""} </h1>
      <p1 className=' text-black w-2/3'> {description || ""} </p1>
     
     <div className=" flex pt-2"> <button className='  bg-slate-900 border-2 border-tertiary text-green-700 px-5 py-2 rounded-xl font-semibold'>Get start</button></div>
    

    </div>
  )
}

export default Intro

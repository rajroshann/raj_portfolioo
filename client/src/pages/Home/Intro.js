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
      <h1 className='  text-cyan-950 text-4xl  sm:text-3xl font-semibold'> {firstname || "yy"} {lastname || ""}  </h1>
      <h1 className='  text-cyan-800 text-5xl  sm:text-3xl'> {caption || ""} </h1>
      <p1 className=' text-black w-2/3 text-xl '> {description || ""} </p1>


      <div className=" w-full flex justify-center"> <div className=" flex    justify-center "> <button className='  bg-slate-500  text-cyan-950 px-10 py-2 rounded-xl font-semibold shadow-2xl text-3xl'>Get start</button></div>
      </div>

    </div>

    
  )
}

export default Intro

import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';


function Experiences() {
  const {portfolioData} = useSelector((state)  => state.root);
  const {experience} = portfolioData;
  
  const [selectedItemIndex, setselectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title='Experience' />

      <div className="flex py-10 gap-20 sm:flex-col">

        <div className="flex flex-col gap-5 border-l-2 border-[#f2c043ee] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full ">
          {/* //period */}
          {experience.map((experience, index) => (
            <div onClick={() => {
              setselectedItemIndex(index);
            }
            }

              className='cursor-pointer'
            >
              <h1 className={`text-2xl px-9
              ${selectedItemIndex === index
                  ? 'text-tertiary font-semibold border-l-4 border-tertiary -ml-[2px] bg-[#4f2ec556]  py-3 sm:w-40'
                  : 'text-white font-semibold'}
                 `}>{experience.period}
              </h1>

            </div>

          ))}



        </div>
        <div className="flex flex-col gap-6">
          {/* content */}
          <h1 className='text-secondry text-3xl font-semibold'>{experience[selectedItemIndex].title}</h1>
          <h1 className='text-green-500 text-2xl font-semibold'>{experience[selectedItemIndex].company}</h1>

          <p className='text-green-800 font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident quasi dignissimos, ipsam fugit ratione reprehenderit dolores tenetur voluptate rerum quia?</p>

        </div>

      </div>

    </div>
  )
}

export default Experiences

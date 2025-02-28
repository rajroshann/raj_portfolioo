import React from 'react'
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';
import { courses } from '../../resource/courses';

function Courses() {
    const [selectedItemIndex, setselectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);
    const { course } = portfolioData;
    return (
        <div>
            <SectionTitle title="COURSES" />

            <div className="flex   py-10 gap-16 justify-around  sm:flex-col">

                <div className="flex flex-col border-l-2 border-blue-500 gap-7 w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full ">
                    {/* period */}

                    {course.map((courses, index) => (
                        <div onClick={() => {
                            setselectedItemIndex(index);
                        }
                        }

                            className='cursor-pointer'
                        >
                            <h1 className={`text-2xl px-9
                            ${selectedItemIndex === index
                                    ? 'text-tertiary font-semibold border-l-4 border-tertiary -ml-[2px] bg-[#348ab57d] py-3 sm:w-auto'
                                    : 'text-white font-semibold'}
                                    `}>{courses.title}
                            </h1>

                        </div>

                    ))}

                </div>


                <div className="flex flex-col gap-6">
                    {/* content */}
                    <h1 className='text-orange-400 text-5xl font-semibold'>{course[selectedItemIndex].title}</h1>
                    <p className='text-green-800 font-bold'> {course[selectedItemIndex].description}</p>
                    <a href={course[selectedItemIndex].link} className=' bg-purple-300 rounded-full font-semibold text-center text-red-500 shadow-3xl p-2'> visit {course[selectedItemIndex].title}</a>

                </div>

                <div className="flex justify-center items-start w-80     sm:flex-col">
                    <img src={course[selectedItemIndex].image} alt="roshan" className='w-auto h-auto ' />


                </div>
               



            </div>

        </div>
    )
}

export default Courses

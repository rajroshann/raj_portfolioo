import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function About() {
    const { loading, portfolioData } = useSelector((state) => state.root);
    const { about } = portfolioData;
    const { lottieURL, des1, des2, skills, } = about;
    return (
        <div className='mt-16'>
            <SectionTitle title='About' />

            <div className="flex w-full items-center sm:flex-col">
                <div className="h-[70vh] w-1/2 sm:w-full">
                    <dotlottie-player
                        src={lottieURL || ""}
                        background="transparent"
                        speed="2"
                        // direction="1"
                        playMode="normal"
                        autoplay>

                    </dotlottie-player>
                </div>
                <div className="flex flex-col  gap-5 w-1/2 sm:w-full text-white">
                    <p>
                        {des1 || ""}
                    </p>
                    <p>
                        {des2 || ""}
                    </p>
                </div>

            </div>
            <div className='py-8'>
                <h1 className=" text-tertiary text-3xl"> Here are few technologies I have been working recently</h1>
                <div className="flex flex-wrap gap-10 mt-5 ">
                    {skills.map((skills, index) => (
                        <div className=" text-tertiary border border-tertiary px-9 py-3 font-semibold">
                            <h1>{skills}</h1>
                        </div>
                    )

                    )}
                </div>





            </div>
        </div>


    )
}

export default About

import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function Contact() {
    const { portfolioData } = useSelector((state) => state.root);
    const { contact } = portfolioData;
    return (
        <div>
            <SectionTitle title="Contact_Admine" />
            <div className="flex items-center justify-between  sm:flex-col">


                <div className="flex flex-col gap-2">
                   
                    {Object.keys(contact).map((key) => (
                        <p1 className='text-purple-900 font-bold ml-4 text-xl'>
                            <span>{key}</span> :  <span>{contact[key]}</span>


                        </p1>
                    ))}
                   
                </div>

                <div className="h-[400px]">
                    <dotlottie-player src="https://lottie.host/9e9527f8-bdfb-4810-94a4-dfb398752a80/2SVTyr5zVc.json"
                        background="transparent"
                        speed="1"

                        loop
                        autoplay>

                    </dotlottie-player>

                </div>

            </div>

        </div>
    )
}

export default Contact

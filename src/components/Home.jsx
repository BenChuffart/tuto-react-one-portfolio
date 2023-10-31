import React from 'react'
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll"


const Home = () => {
  return (
    <div 
        name="home" 
        className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
    >
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a full stack Developper
                    </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus congue nibh commodo tincidunt. Phasellus ac neque iaculis, molestie turpis tempor, viverra libero. Sed convallis neque ex, ac lacinia urna facilisis eu. Praesent non sapien vel libero dignissim accumsan. Quisque urna nibh, bibendum id eros sed, fermentum faucibus purus. Maecenas et eros rhoncus, porttitor lacus vitae, aliquet mi. Praesent porttitor fermentum magna eget sagittis. Sed malesuada ultrices nulla a sagittis. Fusce venenatis neque ut dui lobortis tristique. Aliquam volutpat erat odio, ac tristique ligula accumsan vitae. Phasellus in dui est. In nec mattis mauris.
                </p>

                <div>
                    <Link 
                        to="portfolio"
                        smooth
                        duration={500}
                        className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
                    >
                        Portefolio 
                        <span 
                            className='group-hover:rotate-90 duration-300'
                        >
                            <MdOutlineKeyboardArrowRight 
                                size={25} 
                                className='ml-1'
                            />
                        </span>
                    </Link>
                </div>
            </div>
            
            <div>
                <img 
                    src={HeroImage} 
                    alt="benjamin chuffart full-stack developper"
                    className='rounded-2xl mx-auto w-2/3 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home
import '../App.css';
import React from 'react';
import hero from "../hero.jpg";  
import TypeWriterEffect from 'react-typewriter-effect';

function Hero(){
    return(
        <section class="bg-two pt-24 pb-10 font-fonty">
            <div className='flex flex-col space-y-10 px-14 lg:flex-row items-center py-12 lg:justify-around'>
            <div className='text-three text-left'>
            <h1 className='text-lg pb-1'>Hello this is</h1>
            <h1 className='text-4xl lg:text-6xl pb-3 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-three via-five to-four'>Mayank Kumar Sharma</h1>
            <p className='font-fonty text-4xl space-y-5'>
                <TypeWriterEffect
                    text = "I'm an aspiring "
                    startDelay={1500}
                    cursorColor="#4FA29E"
                    typeSpeed={50}
                />    
                <TypeWriterEffect
                startDelay={2000}
            cursorColor="#4FA29E"
            multiText={[
            'Web Developer',
            'Graphics Designer',
            'App Developer',
            ]}
                multiTextDelay={1000}
                typeSpeed={50}
                multiTextLoop
                />
            </p>
            </div>
            <img src={hero} className='max-w-sm md:max-w-md lg:max-w-lg shadow-lg animate-pulse duration-100 rounded-lg shadow-five' alt='hero' />            
            </div>
            
        </section>
    );
}

export default Hero;
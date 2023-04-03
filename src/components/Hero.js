import '../App.css';
import React from 'react';
import hero from "../hero.jpg";


function Hero(){
    return(
        <section class="bg-two font-fonty pt-24">
    <div class="flex flex-col justify-evenly md:grid h-screen max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 className='text-xl text-three'>Hello this is</h1>
            <h1 class="max-w-2xl mb-4 text-4xl text-three font-extrabold lg:text-5xl">Mayank Kumar Sharma</h1>
            <p class="max-w-2xl mb-6 font-light text-three lg:mb-8 md:text-lg lg:text-xl">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            <a href="/" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-center text-three rounded-lg focus:ring-4 focus:ring-primary-300">
                Get started
                <svg class="w-5 h-5 ml-2 mt-0.5 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="/about" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-three border border-gray-300 rounded-lg hover:bg-three hover:text-two">
                Contact
            </a> 
        </div>
        <div class="lg:mt-0 pt-20 mb-28 lg:mb-0 lg:col-span-5 lg:flex">
            <img src={hero} className='lg:max-w-3xl rounded-lg animate-pulse m-auto lg:overflow-hidden shadow-lg shadow-five' alt="hero" />
        </div>                
    </div>
</section>
    );
}

export default Hero;
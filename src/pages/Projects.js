import React from 'react';
import { VscVmActive } from 'react-icons/vsc';
import { TbFunction } from 'react-icons/tb';
import { BsFileCodeFill } from 'react-icons/bs';

export default function Projects() {
  return (
    <div class="bg-two pt-24 pb-10 font-fonty">
    <div class=" mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-semibold text-three md:text-5xl lg:text-6xl">Projects</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">Welcome to the Projects Page</p>
    </div>
    <hr className='h-px w-3/4 m-auto border-0 bg-five' />
    <div className='flex flex-col items-center py-10 space-y-20'>
      <div class="max-w-fit rounded p-5 bg-three text-center lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
          <VscVmActive className='m-auto mt-5' size={60} />
          <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Responsive Website</div>
          <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div>
      </div>
      <div class="max-w-fit rounded p-5 bg-three text-center lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
          <TbFunction className='m-auto mt-5' size={60} />
          <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Full Functional Website</div>
          <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div>
      </div>
      <div class="max-w-fit rounded p-5 bg-three text-center lg:hover:scale-105 overflow-hidden shadow-lg shadow-five">
          <BsFileCodeFill className='m-auto mt-5' size={60} />
          <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Atri Framework</div>
          <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div>
      </div>
    </div>
    </div>
  )
}
import React from 'react'
import Hero from "../components/Hero"
import SectionOne from '../components/SectionOne'

function Home() {
  return (
    <div> 
        <Hero />
        <hr className='h-px w-3/4 m-auto border-0 bg-five' />
        <SectionOne />
        
    </div>
  )
}

export default Home
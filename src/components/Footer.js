import React from 'react'

function Footer() {
  return (
    
<footer class=" bg-one font-fonty">
    <div class="flex flex-row m-auto space-x-3 justify-between md:p-6 p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-three">© 2023 <a href="./" class="hover:underline">Mynk™</a>. <br className='md:hidden' /> All Rights Reserved.
    </span>
    <ul class="flex items-center text-sm text-three">
        <li>
            <a href="/" class="mr-4 hover:text-four md:mr-6 ">Home</a>
        </li>
        <li>
            <a href="/skills" class="mr-4 hover:text-four md:mr-6 ">Skills</a>
        </li>
        <li>
            <a href="/projects" class="mr-4 hover:text-four md:mr-6">Projects</a>
        </li>
        <li>
            <a href="/academics" class="mr-4 hover:text-four md:mr-6">Academics</a>
        </li>
        <li>
            <a href="/about" class="hover:text-four md:mr-6">About</a>
        </li>
    </ul>
    </div>
</footer>

  )
}

export default Footer
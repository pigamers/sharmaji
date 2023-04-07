import React from 'react';
import {FaLinkedin,FaInstagram,FaYoutube} from "react-icons/fa";
import {FiMail} from "react-icons/fi";

function Footer() {
  return (
    
<footer class=" bg-one font-fonty">
    <div class="flex flex-row m-auto space-x-3 justify-between md:p-6 p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-three">© 2023 <a href="./" class="hover:underline">Mynk™</a>. <br className='md:hidden' /> All Rights Reserved.
    </span>
    <ul class="flex items-center space-x-3 text-sm text-three">
        <li>
            <FaLinkedin className='mr-4 hover:text-four md:mr-6' size={30}/>
        </li>
        <li>
            <FaInstagram className='mr-4 hover:text-four md:mr-6' size={30}/>
        </li>
        <li>
            <FaYoutube className='mr-4 hover:text-four md:mr-6' size={30} />
        </li>
        <li>
            <FiMail className='mr-4 hover:text-four md:mr-6' size={30} />
        </li>
    </ul>
    </div>
</footer>

  )
}

export default Footer
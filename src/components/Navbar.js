import '../App.css';
import {React,useState} from 'react';
import Button from './Button';
import logo from "../logo.png";
import {FiSun} from 'react-icons/fi';

const Navbar = (props) => {
  let Links =[
    {name:"HOME",href:"/"},
    {name:"SKILLS",href:"/skills"},
    {name:"PROJECTS", href:"/projects"},
    {name:"ACADEMICS", href:"/academics"},
    {name:"ABOUT", href:"/about"},
  ];
  let [open,setOpen]=useState(false);

  // const [darkMode, setDarkMode] = useState(false);
return (
  <>
  <div className='shadow-md w-full fixed z-50 top-0 left-0'>
    <div className='md:flex items-center justify-between bg-one py-3 md:px-10 px-5 dark:bg-three'>
    <div className='font-fonty text-2xl cursor-pointer flex text-three hover:text-four'>
      <span className='text-3xl mr-1 pt-2 flex'>
      <a href="/"><img src={logo} alt={"logoo"} /></a>
      <div className='hidden md:block self-center px-3'>MYNK</div>
      </span>
    </div>
    
    <div onClick={()=>setOpen(!open)} className='text-5xl content-center absolute right-8 top-6 cursor-pointer md:hidden'>
    <ion-icon style={{color:"#C5C6C7"}} name={open ? 'close':'menu'}></ion-icon>
    </div>

    <ul className={`md:flex py-5 bg-one font-fonty md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
      {
        Links.map((href)=>(
          <li key={href.name} className='md:ml-8 text-xl md:my-0 my-7 px-2'>
            <a href={href.href} className='text-three hover:text-four duration-500'>{href.name}</a>
          </li>
        ))
      }
      <div className='pb-4 pl-3 md:pb-1'>
      <FiSun size={35} className='text-three hover:text-four'/>
      </div>
      <Button>
        Download CV
      </Button>
    </ul>
    </div>
    {props.children}
  </div>
  </>
)
}


export default Navbar;
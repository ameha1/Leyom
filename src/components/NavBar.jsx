
import { useState } from 'react';
import {close, logo, menu} from '../assets';
import { navLinks } from '../constants';


const NavBar = () => {
  
  const [toggle, setToggle] = useState(false);

  return (

    
    <nav className='w-full flex py-6 justify-between items-center navbar'>

        <img src={logo} alt="hoobank" className='w-[200px] h-[120px] ml-[5px]'/>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">

        {navLinks.map( (nav,index) => (

            <li key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-5':'mr-10'} text-white`}>

            <a href={`#${nav.id}`}>
                {nav.title}
            </a>

            </li>
        ))}

        </ul>

        {/* navbar for smaller size screens  */}

        <div className='sm:hidden flex flex-1 justify-end items-center'>

          <img src={toggle ? close : menu} 
               alt='menu'
               className='w-[28px] h-[28px] object-contain'
               onClick={() => setToggle((prev) => !prev)} 
          />

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient 
               absolute top-[16%] right-0 mx-4 my-2 min-w-w[140px] 
               rounded-x1 sidebar`}>

          <ul className="list-none sm:flex flex-col justify-end items-center flex-1">

          {navLinks.map( (nav,index) => (

              <li key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] 
              ${index === navLinks.length - 1 ? 'mr-5':'mb-4'} text-white`}
              >

              <a href={`#${nav.id}`}>
                  {nav.title}
              </a>

              </li>
          ))}

          </ul>

          </div>


        </div>

    

    </nav>

  )
}

export default NavBar

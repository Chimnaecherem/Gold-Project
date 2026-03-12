
import { useState } from 'react'

import Location from "../assets/lo bk.png"
import Clock from "../assets/clock bk.png"
import Call from "../assets/call bk.png"
import logo from "../assets/gold light.png"
import hamburger from "../assets/hamburger.png"

function Nav() {
  const [open, setOpen] = useState(false);
  let handleOpen = () => {
    setOpen(!open)
  }
  // console.log(open)
  return (
    <div>
      <div className='fixed top-0 left-0 w-full z-50  bg-white'>
        

        {/* address */}
        <div className='h-9 bg-yellow-500 text-white font-bold flex flex-cols-3 justify-between p-6 pt-2'>
          <div className='flex space-x-2 p-'>
            <img src={Location} alt="" className='h-6' />
            <p>Address: Agerakvo 38, 860 Copenhagen, Denmark</p>
          </div>
          {/* time */}
          <div className='flex space-x-2'>
            <img src={Clock} alt="" className='h-5' />
            <p> MON-FRI 9:00AM - 9:00PM</p>
          </div>
          {/* call */}
          <div className='flex space-x-2'>
            <img src={Call} alt="" className='h-5' />
            <p>08085117768</p>
          </div>

        </div>

        {/* 2nd Nav */}


        {/* for desktop */}
        <div className='h-20  p-2 flex flex-cols-2 justify-between items-center'>

          <div className='flex space-x-3'>
            <img src={logo} alt="" className='h-9 ' />
            <p className='text-2xl text-yellow-500 font-bold'>Gold-Light Energy</p>
          </div>

          <div>
            <img src={hamburger} alt="hamburger" className='h-6 md:hidden' />
          </div>

          <div className='hidden md:flex items-center space-x-6'>
            <button className='font-bold hover:text-yellow-500'> <a href="">Home</a></button>
            <button className='font-bold hover:text-yellow-500'> <a href="">About</a></button>
            <button className='font-bold hover:text-yellow-500'> <a href="">Service</a></button>
            <button className='font-bold hover:text-yellow-500'> <a href="">Project</a></button>
            <button className='font-bold hover:text-yellow-500'> <a href="">Contact</a></button>

            <div className='relative'>
              <button onClick={handleOpen} className='font-bold hover:text-yellow-500'> Page</button>
              {
                open &&
                <div className='absolute bg-gray-400 py-2 px-1 w-36 rounded-md'>
                  <ul className='divide-y divide-black'>
                    <li>
                      <button onClick={handleOpen}>❌</button>
                    </li>
                    <li>
                      <button>
                        <a href="../">Profile</a>
                      </button>
                    </li>

                    <li>
                      <button>
                        <a href="../">News</a>
                      </button>
                    </li>

                    <li>
                      <button>
                        <a href="../">Updates</a>
                      </button>
                    </li>

                    <li>
                      <button>
                        <a href="../">Sponsors</a>
                      </button>
                    </li>
                  </ul>
                </div>
              }
            </div>





            {/* get a quote */}
            <div className='bg-yellow-500  h-9 items-center flex px-2'>
              <p className='bg-yellow-500 font-bold text-center text-white'>GET A QUOTE --- </p>
            </div>
          </div  >





        </div>
      </div>
    </div>
  )
}

export default Nav
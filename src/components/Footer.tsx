import location from "../assets/location y.png"
import mail from "../assets/mail.png"
import call from "../assets/call bk.png"
import pic1 from "../assets/solar up.jpg"
import pic2 from "../assets/solar battery.jpg"
import pic3 from "../assets/hydro power.jpg"
import pic4 from "../assets/solar up2.jpg"
import pic5 from "../assets/strret s.jpg"
import pic6 from "../assets/solar w.jpg"

function Footer() {
  return (
    <div className='pt-20 px-16 pb-8  mt-20 bg-blue-950 text-gray-500'>
        {/* two coloums */}
<div className='md:grid grid-cols-2'>
{/* first one */}
<div className='grid '>
    {/* two inside */}
    <div className='md:grid grid-cols-2'>
        {/* Address  */}
        <div className='space-y-2 leading-loose'>
<p className='font-bold text-2xl text-white'>Address Gold-Light Energy</p>
{/* location icon */}
<div className='flex space-x-2'>
<img src={location} alt="Location Icon" className='h-5 w-5' />
<p>Berlin, Germany (HG) Address: No. <br />Brandenburgische Str. 77,12713 <br />Berlin, Germany.</p>
</div>
<div className='flex space-x-2'>
<img src={mail} alt="Mail Icon" className='h-6 w-5' />
<p>Contact@goldlight.org</p>
</div>

{/* Address */}
<p className='pt-6 font-bold text-2xl text-white'>Address </p>
{/* location icon */}
<div className='flex space-x-2'>
<img src={location} alt="Location Icon" className='h-6 w-5' />
<p>Agerakvo 38, 860 Copenhagen, <br />Denmark</p>
</div>

<div className='flex space-x-2'>
    <img src={call} alt="" className='h-6 w-5'/>
    <p>+4592457638</p>
</div>

<div className='flex space-x-2'>
<img src={mail} alt="Mail Icon" className='h-6 w-5' />
<p>Contact@goldlight.org</p>
</div>

        </div>

        {/* Quick */}
        <div>
<ul className="pt-2 sm: space-y-3 ">
  <li className="flex items-center gap-2 text-gray-200">
    <svg  className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
    <a href="">About Us</a>
  </li>

  <li className="flex items-center gap-2 text-gray-200">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
    <a href="">Contact Us</a>
  </li>

  <li className="flex items-center gap-2 text-gray-200">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
    <a href="">Our Services</a>
  </li>

  <li className="flex items-center gap-2 text-gray-200">
    <svg  className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
    <a href="">Terms & Condition</a>
  </li>

  <li className="flex items-center gap-2 text-gray-200">
    <svg  className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
   <a href="">Free Quote</a>
  </li>
</ul>
        </div>

    </div>
</div>

{/* the second one */}

<div className='md:grid grid-cols-2 space-x-2'>
    {/* two inside */}
    <div>
        <p className='pt-4  text-center sm:  text-white font-bold text-3xl pb-2'> Project Gallery</p>
    <div className='grid  grid-cols-2 items-center justify-items-center md:grid-cols-3 gap-y-2 pt-4'>
       {/* images */}

       <div className='h-22 w-26 rounded-2xl border overflow-hidden'>
        <img src={pic1} alt="images" className='h-full w-full object-cover object-center rounded-2xl'/>
       </div>

       {/* pics 2 */}
       <div className='h-22 w-26 rounded-2xl border overflow-hidden'>
        <img src={pic2} alt="images" className='h-full w-full object-cover object-center rounded-2xl'/>
       </div>

       {/* pics 3 */}
<div className='h-22 w-26 rounded-2xl border overflow-hidden'>
        <img src={pic3} alt="images" className='h-full w-full object-cover object-center rounded-2xl'/>
       </div>

{/* pics 4 */}
<div className='h-22 w-26 rounded-2xl border overflow-hidden'>
        <img src={pic4} alt="images" className='h-full w-full object-cover object-center rounded-2xl'/>
       </div>

       {/* pics 5 */}
<div className='h-22 w-26 rounded-2xl border overflow-hidden'>
        <img src={pic5} alt="images" className='h-full w-full object-cover object-center rounded-2xl'/>
       </div>

{/* pics 6 */}
       <div className='h-22 w-26 rounded-2xl border overflow-hidden'>
        <img src={pic6} alt="images" className='h-full w-full object-cover object-center rounded-2xl'/>
       </div>
        
</div>
 
    </div>

     {/* News Letter */}
        <div>
<p className='pt-4 text-center sm: text-white font-bold text-2xl'>Newsletter</p>
<p className=' font-bold'>Receive Our Latest News and Updates</p>

<div className='h-12 w-76 bg-white flex relative rounded-2xl'>
    <input type="email" placeholder='Your Email' className='text-black pl-2' />
    <div className='bg-green-700 h-9 w-16 absolute justify-items-center right-3 items-center rounded-xl top-1.5'>
        <p className='text-white text-center pt-1'>SignUp</p>
    </div>
</div>
        </div>
</div>




</div>

    </div>
  )
}

export default Footer
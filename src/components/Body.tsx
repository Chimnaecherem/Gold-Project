import good from "../assets/good blk.png"
import solar from "../assets/solar up.jpg"
import designer from "../assets/designer.jpg"
import lawyer from "../assets/lawyer.png"
import engineer from "../assets/engineer.jpg"

function Body() {
  return (
    <div className='p-6'>

<div className='space-y-4 md:grid grid-cols-2'>
{/* picture and text */}
<div className='justify-items-center'>
<img src={solar} alt="" className='h-[400px] w-[360px]  justify-items-center' />
</div>
{/* text */}
<div className='bg-gray-100 pl-10 pt-4 font-bold'>
<a href="..about">About Us</a>
<p>25+ Years Exprience In Solar & Renewable <br />Energy Industry </p>

<p>Green Gust is an integrated energy company delivering total clen energy <br />solution. We have played a pivotal in the evolution of solar energy in Nigeria <br />Asia since our establisment in 2009, paving the way to a brighter, cleaner tomorrow.</p>


<div className='py-6'>

<div className='flex space-x-2'>
    <div className='h-8 w-8 rounded-full bg-yellow-500 items-center justify-items-center pt-1.5'>
    <img src={good} alt="" className='h-5 w-5' />
    </div>
    <p>Solar PV systems. To date, our portfolio consists of more than 300MW of <br /> commercial gadgets </p>
</div>

<div className='flex space-x-2 pt-3'>
    <div className='h-8 w-8 rounded-full bg-yellow-500 items-center justify-items-center pt-1.5'>
    <img src={good} alt="" className='h-5 w-5' />
    </div>
    <p>Inspecting and Maintaining these assets is not easy, especially in the harsh <br /> Nortg Sea Conditions</p>
</div>

<div className='flex space-x-2 pt-3'>
    <div className='h-8 w-8 rounded-full bg-yellow-500 items-center justify-items-center pt-1.5'>
    <img src={good} alt="" className='h-5 w-5' />
    </div>
    <p>Solar PV systems. To date, our portfolio consists of more than 300MW of <br />commercial gadgets, Inspecting and Maintaining these assets is not easy, <br />especially in the harsh Nortg Sea Conditions </p>
</div>

<div className='pt-7 '>
  <button  className='h-10 w-32 bg-yellow-500 rounded-4xl text-center text-white font-bold hover:bg-red-500 cursor-pointer '>Explore More</button>
</div>
</div>
</div>
</div>


{/* Team members */}
<div className='space-y-12 md:grid grid-cols-3 justify-items-center pt-20'>

  <div className='h-[340px] w-[360px] bg-white shadow-2xl shadow-gray-500/50'>
<img src={designer} alt="Designer" className='h-[280px] w-[340px] rounded-tr-4xl pl-10' />
<p className='font-bold text-2xl pl-10'>Andy Robben</p>
<p className=' pl-10'>Designer</p>
  </div>

 <div className='h-[340px] w-[360px] bg-white shadow-2xl shadow-gray-500/50'>
<img src={lawyer} alt="Lawyer" className='h-[280px] w-[340px] rounded-tr-4xl pl-10' />
<p className='font-bold text-2xl pl-10'>Peter Enonk</p>
<p className=' pl-10'>Lawyer</p>
  </div>

  <div className='h-[340px] w-[360px] bg-white shadow-2xl shadow-gray-500/50'>
<img src={engineer} alt="Engineer" className='h-[280px] w-[340px] rounded-tr-4xl justify-items-center pl-10' />
<p className='font-bold text-2xl pl-10'>Attin Williies</p>
<p className='pl-10'>Engineer</p>
  </div>

</div>



    </div>
  )
}

export default Body
import video from "../assets/wind turbines video.mp4"
import people from "../assets/people 2.png"
import good from "../assets/good blk.png"
import award from "../assets/award bk.png"
import expert from "../assets/expert bk.png"



function Video() {
  return (
    <div className='px-8'>
      {/* for mobile view and slides design */}

      {/* <div className='md:hidden bg-gray-500'>

  
  <div className='swiper-slide pt-12 pl-6 items-center  text-white'>
<p className='font-bold'>Pioneer of solar And <br />renewable energy</p>

<p>We explore new ways to deepen our <br /> contributios to the environmental and social <br />well-being of our communitieswhile deliverling <br />long-term economic value to our stakeholders.</p>
  </div>

<div className='pt-16 pl-6 pb-20'>
  <div className='bg-yellow-600 h-10 w-28 flex items-center justify-center rounded-2xl hover:bg-green-500 '>
  <p className='text-white font-semibold '>Read More</p>
</div>
</div>
</div> */}


      {/* for desktop view */}
      <div className='hidden md:block relative z-0 w-full h-[800px]  '>
        <video src={video} className='w-full h-full  object-cover'loop autoPlay muted> </video>

{/* transparent color */}
<div className="absolute top-0 left-o w-full h-full bg-black/80"></div>

        <div className='absolute inset-0  top-80 items-center fill-amber-400 px-6'>
          <p className='font-bold text-8xl text-yellow-600 '>Gold-Light of solar & <br />renewable energy</p>
          <p className='pt-2 text-3xl text-yellow-300  font-bold '>We explore new ways to deepen our <br /> contribution on environmental and   <br /> socials well-being of our communities  <br /> while delivering long-term economic  <br /> value to our stakeholders.</p>
          <div className='pt-7 '>
            <button className='h-10 w-32 bg-yellow-500 rounded-4xl text-center text-white font-bold hover:bg-red-500 cursor-pointer'>Read More</button>
          </div>
        </div>


        {/* <div>
  <button  className='h-10 w-32 bg-yellow-600 rounded-4xl text-center text-white'>Read More</button>
</div> */}
      </div>

      {/* for mobile slide */}
      <div>

      </div>

      {/* under video */}
      <div className=' space-y-8 pt-6 md:grid grid-cols-4 justify-items-center '>

        <div >
          <div className='flex space-x-2 items-center'>
            <div className='h-12 w-12 rounded-full bg-yellow-400 items-center justify-items-center pt-2.5'>
              <img src={people} alt="people" className='h-6' />
            </div>
            <p className='font-bold'>3453</p>
          </div>
          <p className='font-bold'>Happy Customers</p>
          <p className='text-sm text-gray-600'>Our commitment to our  <br />customers knows no bounds</p>
        </div>

        <div >
          <div className='flex space-x-2 items-center'>
            <div className='h-12 w-12 rounded-full pt-2.5  bg-yellow-500 items-center justify-items-center'>
              <img src={good} alt="people" className='h-6' />
            </div>
            <p className='font-bold'>4234</p>
          </div>
          <p className='font-bold'>Project Done</p>
          <p className='text-sm text-gray-600'>Thus, every transcation we <br /> make is to provide you with a <br />  seamless exprerience of your<br />power independence.</p>
        </div>

        <div >
          <div className='flex space-x-2 items-center'>
            <div className='h-12 w-12 rounded-full pt-2.5  bg-yellow-500 items-center justify-items-center'>
              <img src={award} alt="people" className='h-6' />
            </div>
            <p className='font-bold'>3123</p>
          </div>
          <p className='font-bold'>Award Win</p>
          <p className='text-sm text-gray-600'>Join The Commitment To Net  <br />Zero By 2050 Wit Us</p>
        </div>

        <div >
          <div className='flex space-x-2 items-center'>
            <div className='h-12 w-12 rounded-full pt-2.5  bg-yellow-500 items-center justify-items-center'>
              <img src={expert} alt="people" className='h-6' />

            </div>
            <p className='font-bold'>1831</p>
          </div>
          <p className='font-bold'>Expert Workers</p>
          <p className='text-sm text-gray-600'>Discuss wit us for more  <br />Value-Added Support</p>
        </div>

      </div>


    </div>
  )
}

export default Video
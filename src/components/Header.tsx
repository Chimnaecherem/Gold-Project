function Header() {
  return (
    <div>
      {/* <script>
  const new swiper(".mySwiper", {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      speed: 800,
    });
  </script> */}

      <body className="bg-gray-100 flex justify-center items-center h-screen">

        <div className="w-full max-w-sm">
          <div className="swiper mySwiper rounded-xl overflow-hidden">
            <div className="swiper-wrapper">

              {/* slide 1 */}
              <div className='swiper-slide pt-12 pl-6 items-center  text-white'>
                <p className='font-bold text-3xl pb-3 '>Hydro power potential <br /> export preparation</p>
                <p>this involled assembling intenational 23 persons <br /> team, travelling between turbines by  <br /> boat and living on posidon.</p>

                {/* read more  */}
                <div className='pt-16 pl-6 pb-20'>
                  <div className='bg-yellow-600 h-10 w-28 flex items-center justify-center rounded-2xl hover:bg-green-500'>
                    <p className='text-white font-semibold '>Read More</p>
                  </div>
                </div>
              </div>

              {/* slide 2 */}
              <div className='swiper-slide pt-12 pl-6 items-center  text-white'>
                <p className='font-bold text-3xl pb-3 '>Pioneer of solar And <br />renewable energy</p>

                <p>We explore new ways to deepen our <br /> contributios to the environmental and social <br />well-being of our communitieswhile deliverling <br />long-term economic value to our stakeholders.</p>
                {/* read more  */}
                <div className='pt-16 pl-6 pb-20 '>
                  <div className='bg-yellow-600 h-10 w-28 flex items-center justify-center rounded-2xl hover:bg-green-500'>
                    <p className='text-white font-semibold '>Read More</p>
                  </div>
                </div>
              </div>

              {/* slide 3 */}
              <div className='swiper-slide pt-12 pl-6 items-center  text-white'>
                <p className='font-bold text-3xl pb-3 '>Generating Electricity <br /> from wind farm is more <br />efficient at sea
                </p>
                <p>this involled assembling intenational 23 persons <br /> team, travelling between turbines by  <br /> boat and living on posidon.</p>

                {/* read more  */}
                <div className='pt-16 pl-6 pb-20 '>
                  <div className='bg-yellow-600 h-10 w-28 flex items-center justify-center rounded-2xl hover:bg-green-500'>
                    <p className='text-white font-semibold '>Read More</p>
                  </div>
                </div>
              </div>

              {/* slide 4 */}
              <div className='swiper-slide pt-12 pl-6 items-center  text-white'>
                <p className='font-bold text-3xl pb-3 '>Generating Electricity <br /> from wind farm is more <br />efficient at sea
                </p>
                <p>this involled assembling intenational 23 persons <br /> team, travelling between turbines by  <br /> boat and living on posidon.</p>

                {/* read more  */}
                <div className='pt-16 pl-6 pb-20 '>
                  <div className='bg-yellow-600 h-10 w-28 flex items-center justify-center rounded-2xl hover:bg-green-500'>
                    <p className='text-white font-semibold '>Read More</p>
                  </div>
                </div>
              </div>

              {/* slide 5 */}
              <div className='swiper-slide pt-12 pl-6 items-center  text-white'>
                <p className='font-bold text-3xl pb-3 '>Generating Electricity <br /> from wind farm is more <br />efficient at sea
                </p>
                <p>this involled assembling intenational 23 persons <br /> team, travelling between turbines by  <br /> boat and living on posidon.</p>

                {/* read more  */}
                <div className='pt-16 pl-6 pb-20'>
                  <div className='bg-yellow-600 h-10 w-28 flex items-center justify-center rounded-2xl hover:bg-green-500'>
                    <p className='text-white font-semibold '>Read More</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>



      </body>


      <div className='bg-gray-500'>

        {/* 1st slide */}
        <div className='swiper-slide pt-12 pl-6 items-center  text-white'>
          <p className='font-bold text-3xl pb-3 '>Pioneer of solar And <br />renewable energy</p>

          <p>We explore new ways to deepen our <br /> contributios to the environmental and social <br />well-being of our communitieswhile deliverling <br />long-term economic value to our stakeholders.</p>
        </div>

        <div className='pt-16 pl-6 pb-20'>
          <div className='bg-yellow-600 h-10 w-28 flex items-center justify-center rounded-2xl hover:bg-green-500 '>
            <p className='text-white font-semibold '>Read More</p>
          </div>
        </div>
      </div>

    </div>
  )
}




export default Header
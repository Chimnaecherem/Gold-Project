import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";


export default function Slider() {
  return (
    <div className=" md:hidden w-[375px] px-6">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 1000 }}
        className=" w-[370px] h-[300px]  mb-4 "
      >
        <SwiperSlide className="">
          <div className=" h-full  text-white bg-amber-600">
            <p className='font-bold text-4xl flex items-center justify-center text-center pt-8'>Pioneer of Solar And <br />Renewable Energy</p>

            <p className="pt-6 flex items-center justify-center text-center">We explore new ways to deepen our <br /> contributios to the environmental and social <br />well-being of our communitieswhile deliverling <br />long-term economic value to our stakeholders.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className=" h-full w-full text-white bg-yellow-500">
            <p className='font-bold text-4xl flex items-center justify-center text-center pt-8'>Pioneer of Solar And <br />Renewable Energy</p>

            <p className="pt-6 flex items-center justify-center text-center">We explore new ways to deepen our <br /> contributios to the environmental and social <br />well-being of our communitieswhile deliverling <br />long-term economic value to our stakeholders.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-full">
          <div className=" h-full  text-white bg-yellow-700">
            <p className='font-bold text-4xl flex items-center justify-center text-center pt-8'>Pioneer of Solar And <br />Renewable Energy</p>

            <p className="pt-6 flex items-center justify-center text-center">We explore new ways to deepen our <br /> contributios to the environmental and social <br />well-being of our communitieswhile deliverling <br />long-term economic value to our stakeholders.</p>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  );
}
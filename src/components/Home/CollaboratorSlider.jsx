import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../App.css";
import { companies } from "../../data/Constant"
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const CollaboratorSlider = () => {

  return (
    <div className="text-richblack-50 w-full flex justify-center">
      <div className="my-[50px] h-[170px]  lg:max-w-maxContent flex place-content-center ">
        <Swiper
          slidesPerView={6}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            639: {
              slidesPerView: 3,
            },
            865: {
              slidesPerView: 4
            },
            1537: {
              slidesPerView: 5
            },
            1750: {
              slidesPerView: 6
            },
          }}
          spaceBetween={24}
          loop={true}
          freeMode={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          modules={[Autoplay, Navigation, Pagination]}
          
        >
          {companies.map((colaborator, i) => (
            <SwiperSlide key={i} className="rounded-lg flex place-content-center border bg-[#6235a0] shadow-lg shadow-[#b99ce0]">
              <div className="flex flex-col items-center gap-3 p-3 text-[14px] text-richblack-25">
                <div className="w-full h-36  aspect-square shadow-2xl shadow-[#a36cef] rounded-xl">
                  <img
                    src={colaborator.img}
                    alt="img"
                    className=" object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default CollaboratorSlider;
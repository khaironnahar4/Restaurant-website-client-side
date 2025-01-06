import SectionHeading from "../../../Components/SectionHeading/SectionHeading";
import useCategory from "../../../Hooks/useCategory";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

function ChefRecommended() {
  const [datas] = useCategory("offered");

  return (
    <div>
      <SectionHeading
        subHeading="Should Try"
        heading="chef recommends"
      ></SectionHeading>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
        }}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper swiper grid md:grid-cols-3 grid-cols-1 gap-4"
      >
        {datas.map((data) => (
          <SwiperSlide
            key={data._id}
            className="card bg-base-100 w-full shadow-xl"
          >
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="font-1 font-semibold text-[20px]">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-center">
                <button
                  className="btn bg-gray-300 text-[#BB8506] border-b-4
               border-[#BB8506] rounded-md hover:bg-[#1F2937]
               hover:border-[#BB8506]"
                >
                  Add To Card
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ChefRecommended;

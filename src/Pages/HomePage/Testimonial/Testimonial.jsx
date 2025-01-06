import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Keyboard, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

function Testimonial() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        keyboard={true}
        loop={true}
        autoplay={{
            delay: 3000,
          }}
        modules={[Navigation, Keyboard, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}
           className="flex justify-center items-center"
          >
            <div className="flex justify-center">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
            </div>
            <p></p>
            <p className="pt-6 px-14 text-center">{review.details}</p>
            <p className="text-center text-[36px] text-[#CD9003]">{review.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonial;

import { useEffect, useState } from "react"
import SectionHeading from "../../../Components/SectionHeading/SectionHeading"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/autoplay';

// import required modules
import { Pagination, Autoplay  } from 'swiper/modules';

function OrderOnline() {
    const [offeredData, setOfferedData] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(datas => {
           const requiredDatas = datas.filter(data => data.category === "offered");
           setOfferedData(requiredDatas);
        }
        )
    }, [])
  return (
    <div>
        <SectionHeading subHeading="From 10:00 am to 10:00 pm" heading="Order Online"></SectionHeading>
      <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={
            {delay: 3000,}
        }
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {
            offeredData.map(data => <SwiperSlide key={data._id} className="relative">
                <img src={data.image} alt={data.name} className="w-full object-cover object-center"/>
                <h2 className="text-[24px] font-2 backdrop-brightness-50 -mt-16 text-white text-center">{data.name}</h2>
            </SwiperSlide>)
        }
      </Swiper>
      </div>
    </div>
  )
}

export default OrderOnline
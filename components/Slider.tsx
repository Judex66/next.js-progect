 "use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export default function Slider() {
  return (
    <Swiper className="mySwiper">
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
}

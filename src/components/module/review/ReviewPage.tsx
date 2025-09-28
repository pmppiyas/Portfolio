"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import assets from '@/assets/assets';
import Testimonial from '@/components/module/review/ReviewCard';
import { Navigation, Pagination } from "swiper/modules";
import { CustomHeading } from '../../../../public/Heading';

const { myReviews } = assets;

function ReviewPage() {
  return (
    <div
      id="portfolio"
      className="min-h-fit bg-custom text-background not-[]:py-6 md:py-8 space-y-8"
    >
      {/* Heading */}
      <CustomHeading heading={"Reviews"} />

      {/* Reviews Slider */}
      <div className="w-full  lg:max-w-6xl p-6 lg:px-0 mx-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {myReviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <Testimonial
                name={review.name}
                title={review.title}
                description={review.description}
                image={review.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ReviewPage;

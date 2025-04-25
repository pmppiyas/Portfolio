"use client";

import React from "react";
import CustomHeading from "@/app/Shared/CustomHeading";
import Testimonial from "./ReviewCard";
import assets from "@/app/Assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

const { myReviews } = assets;

function ReviewPage() {
  return (
    <div className="h-max bg-bg-custom flex flex-col items-center justify-center   lg:pb-18 ">
      {/* Heading */}
      <CustomHeading heading={"Reviews"} />

      {/* Reviews Slider */}
      <div className="w-full  lg:max-w-6xl p-6 lg:px-0">
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
                heading={review.heading}
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

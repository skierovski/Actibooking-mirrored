import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Organizations from "../../../Data/MostPopularOrganizationData";
import "swiper/css";
import OrganizationCard from "./OrganizationCard";
import SectionTitle from "../../DefaultModels/Titles/SectionTitle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./MostPopularOrganization.css";


import { Navigation } from "swiper";
export default function MostPopularOrganization() {
  return (
    <div className="mainComponent">
      <SectionTitle value="Top organization" />
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        cssMode={true}
        navigation={true}
        pagination={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {Organizations.map((O) => (
          <SwiperSlide key={O.id}>
            <OrganizationCard Organizations={O} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

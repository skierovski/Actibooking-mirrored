import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide} from "swiper/react";
import CategorySlideCardData from "../../../Data/CategorySlideCardData";
// Import Swiper styles
import "swiper/css";
import CategoryCard from "./CategoryCard";
import SectionTitle from "../../DefaultModels/Titles/SectionTitle";
import LastCategoryCard from "./LastCategoryCard";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./OrganizationsCategorySlider.css";
// import required modules

import { Navigation } from "swiper";
export default function CategorySlideCard() {
  const CategorySlides = <CategorySlideCardData />;
  const Categories = CategorySlides.type;
  return (
    <div>
      <SectionTitle value="Popular courses categories" />
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
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {Categories.map((Categories) => (
          <SwiperSlide>
            <CategoryCard key={Categories.CategoryId} Categories={Categories} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <LastCategoryCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

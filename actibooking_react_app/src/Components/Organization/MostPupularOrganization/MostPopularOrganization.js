/* import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MostPopularOrganizationData from "../../../Data/MostPopularOrganizationData";
import styles from "./MostPopularOrganization.module.css"
import SliderCard from "../OrganizationsCard/SliderCard";
import NextArrow from "./Arrows/NextArrow";
import PrevArrow from "./Arrows/PrevArrow";


export default function MostPopularOrganization() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 4,
    speed: 500,
    dots: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };

  return (
    <div className={styles.OrganizationsSlider}>
      <p>Our Recomended Organizations</p>
        <div className={styles.slaiderbox}>
        <Slider {...settings}>
          {MostPopularOrganizationData.map((o) => (
          <SliderCard key={o.id} logoUrl={o.logoUrl} name={o.name} adress={o.adresses[0]}/>
        ))}
        </Slider>
        </div>
      </div>
  );
} */

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Organizations from "../../../Data/MostPopularOrganizationData";
// Import Swiper styles
import "swiper/css";
import OrganizationCard from "./OrganizationCard";
import SectionTitle from "../../DefaultModels/Titles/SectionTitle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./MostPopularOrganization.css";

// import required modules
import { Navigation } from "swiper";
export default function MostPopularOrganization() {
  return (
    <div>
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
          <SwiperSlide>
            <OrganizationCard key={O.id} Organizations={O} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

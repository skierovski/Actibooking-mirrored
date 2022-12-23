import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import { Navigation } from "swiper";
import "./MostPopularOrganization.css";
import React, { useContext } from "react";
import OrganizationCard from "./OrganizationCard";
import { Swiper, SwiperSlide } from "swiper/react";
import CookiesContext from "../../../Context/cookies-context";
import GetDataHandler from "../../FetchMethods/GetDataHandler";
import SectionTitle from "../../DefaultModels/Titles/SectionTitle";
import LoadingScreen from "../../DefaultModels/LoadingScreen/LoadingScreen";

export default function MostPopularOrganization() {
  const cookies_ctx = useContext(CookiesContext);
  const [data, setData] = useState();
  let decodedToken;
  let token = cookies_ctx.GetCookie("token");

  if (token != null) {
    decodedToken = cookies_ctx.DecodeToken(token);
  }

  const GetData = () => {
    if (cookies_ctx.GetCookie("token") != null && decodedToken.City != null) {
      GetDataHandler(
        `https://localhost:7127/api/Organizations/top10/${decodedToken.City}`,
        setData
      );
    } else {
      GetDataHandler(
        `https://localhost:7127/api/Organizations/top10`,
        setData
      );
    }
  };

  return (
    <>
      {data && (
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
            {data.map((O) => (
              <SwiperSlide key={O.id}>
                <OrganizationCard Organizations={O} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      {!data && <LoadingScreen onLoad={GetData()}/>}
    </>
  );
}

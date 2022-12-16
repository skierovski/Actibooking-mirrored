import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Organizations from "../../../Data/MostPopularOrganizationData";
import "swiper/css";
import OrganizationCard from "./OrganizationCard";
import SectionTitle from "../../DefaultModels/Titles/SectionTitle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./MostPopularOrganization.css";
import { useCookies } from "react-cookie";
import GetDataHandler from "../../FetchMethods/GetDataHandler";
import jwtDecode from "jwt-decode";
import { useState } from "react";

import { Navigation } from "swiper";
export default function MostPopularOrganization() {
  const [cookies, setCookies] = useCookies();
  let decodedToken = null;
  if (cookies["token"] != null) {
    decodedToken = jwtDecode(cookies["token"]);
  }
  const [data, setData] = useState();

  const GetData = () => {
    if (cookies["token"] != null) {
      var href = `https://localhost:7127/api/Organizations/top10/${decodedToken.City}`;
      console.log(href);
      console.log(decodedToken);
      GetDataHandler(
        `https://localhost:7127/api/Organizations/top10/${decodedToken.City}`,
        ResponseHandler
      );
    } else {
      GetDataHandler(
        `https://localhost:7127/api/Organizations/top10`,
        ResponseHandler
      );
    }
  };

  const ResponseHandler = (props) => {
    console.log(props);
    setData(props);
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
      {!data && <div onLoad={GetData()}>Not working</div>}
    </>
  );
}

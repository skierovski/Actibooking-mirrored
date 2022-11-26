import React, { useEffect } from "react";
import "./ScrollMotion.css";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../DefaultModels/Titles/SectionTitle";
const ScrollMotion = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <SectionTitle value="How to use" />
      <div className="motion-container">
        <div className="motion-box">
          <div
            className="img-motion"
            data-aos="fade-right"
            style={{ backgroundImage: `url(CategoryImg/5.jpeg)` }}
          ></div>
          <div className="text-motion" data-aos="fade-left">
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. Why do we use it?
          </div>
        </div>
      </div>
      <div className="motion-container">
        <div className="motion-box">
          <div className="text-motion" data-aos="zoom-in">
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. Why do we use it?
          </div>
          <div
            className="img-motion"
            data-aos="fade-left"
            style={{ backgroundImage: `url(CategoryImg/2.jpeg)` }}
          ></div>
        </div>
      </div>
      <div className="motion-container">
        <div className="motion-box">
          <div
            className="img-motion"
            data-aos="fade-right"
            style={{ backgroundImage: `url(CategoryImg/2.jpeg)` }}
          ></div>
          <div className="text-motion" data-aos="fade-left">
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. Why do we use it?
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollMotion;

import React, { useEffect } from "react";
import "./ScrollMotion.css";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../DefaultModels/Titles/SectionTitle";
const ScrollMotion = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className="mainContainer">
      <SectionTitle value="What distinguishes us?" />
      <div className="motion-container">
        <div className="motion-box">
          <div className="img-motion" data-aos="fade-right">
            <img
              className="img-motion-style"
              src={`./Img/hourglass.png`}
              alt="Hourglass"
            ></img>
          </div>
          <div className="text-motion" data-aos="fade-left">
            <SectionTitle value="One place" />
            <p className="text-motion-style">
              One search machine of extracurricular activities for both children
              and adults
            </p>
            <p className="text-motion-style">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <p className="text-motion-style">
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <p className="text-motion-style">
              ever since the 1500s, when an unknown printer took a galley of
              type
            </p>
            <p className="text-motion-style">
              and scrambled it to make a type specimen book. It has survived not
            </p>
            <p className="text-motion-style">
              {" "}
              only five centuries, but also the leap into electronic
              typesetting,
            </p>
            <p className="text-motion-style">
              remaining essentially unchanged. It was popularised in the 1960s
            </p>
            <p className="text-motion-style">
              with the release of Letraset sheets containing Lorem Ipsum
              passages,
            </p>
          </div>
        </div>
      </div>
      <div className="motion-container">
        <div className="motion-box">
          <div className="text-motion" data-aos="fade-right">
            <SectionTitle value="Comparable" />
            <p className="text-motion-style">
              Standard descriptions allowing easy comparison
            </p>
            <p className="text-motion-style">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <p className="text-motion-style">
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <p className="text-motion-style">
              ever since the 1500s, when an unknown printer took a galley of
              type
            </p>
            <p className="text-motion-style">
              and scrambled it to make a type specimen book. It has survived not
            </p>
            <p className="text-motion-style">
              {" "}
              only five centuries, but also the leap into electronic
              typesetting,
            </p>
            <p className="text-motion-style">
              remaining essentially unchanged. It was popularised in the 1960s
            </p>
            <p className="text-motion-style">
              with the release of Letraset sheets containing Lorem Ipsum
              passages,
            </p>
          </div>
          <div className="img-motion" data-aos="fade-left">
            <img
              className="img-motion-style"
              src={`./Img/scale.png`}
              alt="Scale"
            ></img>
          </div>
        </div>
      </div>
      <div className="motion-container">
        <div className="motion-box">
          <div className="img-motion" data-aos="fade-right">
            <img
              className="img-motion-style"
              src={`./Img/iceberg.png`}
              alt="Iceberg"
            ></img>
          </div>
          <div className="text-motion" data-aos="fade-left">
            <SectionTitle value="Transparent" />
            <p className="text-motion-style">no hidden cost simple rules</p>
            <p className="text-motion-style">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <p className="text-motion-style">
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <p className="text-motion-style">
              ever since the 1500s, when an unknown printer took a galley of
              type
            </p>
            <p className="text-motion-style">
              and scrambled it to make a type specimen book. It has survived not
            </p>
            <p className="text-motion-style">
              {" "}
              only five centuries, but also the leap into electronic
              typesetting,
            </p>
            <p className="text-motion-style">
              remaining essentially unchanged. It was popularised in the 1960s
            </p>
            <p className="text-motion-style">
              with the release of Letraset sheets containing Lorem Ipsum
              passages,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollMotion;

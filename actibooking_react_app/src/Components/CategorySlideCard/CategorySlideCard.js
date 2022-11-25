import React from "react";
import "./CategorySlideCard.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import CategoryToShow from "./Data";
import Card from "./CategoryCard";
import SectionTitle from "../SectionTitle/SectionTitle";

/* npm install react-icon --save */

const leftSlide = () => {
  var slider = document.getElementById("categoryslidercard");
  slider.scrollLeft = slider.scrollLeft - 269;
  console.log(slider.scrollLeft);
};

const rightSlide = () => {
  var slider = document.getElementById("categoryslidercard");
  slider.scrollLeft = slider.scrollLeft + 269;
  if (slider.scrollLeft > 1077) {
    slider.scrollLeft = 1345;
  }
  console.log(slider.scrollLeft);
};

const CategorySlideCard = (props) => {
  const CategorySlides = <CategoryToShow />;
  const Categories = CategorySlides.type;
  return (
    <div>
      <SectionTitle value="Popular courses categories" />
      <div className="main-categoryslidercard-conteiner">
        <MdChevronLeft
          size={40}
          className="left-categoryslidercard-button"
          onClick={leftSlide}
        />
        <div id="categoryslidercard">
          {Categories.map((Categories, index) => {
            return <Card key={index} Categories={Categories} />;
          })}
        </div>
        <MdChevronRight
          size={40}
          className="right-categoryslidercard-button"
          onClick={rightSlide}
        />
      </div>
    </div>
  );
};

export default CategorySlideCard;

import React from "react";
import "./CategorySlideCard.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import CategoryToShow from "./Data";
import Card from "./CategoryCard";

/* npm install react-icon --save */

const leftSlide = () => {
  var slider = document.getElementById("categoryslidercard");
  slider.scrollLeft = slider.scrollLeft - 269;
};

const rightSlide = () => {
  var slider = document.getElementById("categoryslidercard");
  slider.scrollLeft = slider.scrollLeft + 269;
};

const CategorySlideCard = (props) => {
  const CategorySlides = <CategoryToShow />;
  const Categories = CategorySlides.type;
  return (
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
  );
};

export default CategorySlideCard;

import "./OrganizationsCategorySlider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import CategorySlideCardData from "../../../Data/CategorySlideCardData";
import CategoryCard from "./CategoryCard";
import SectionTitle from "../../DefaultModels/Titles/SectionTitle";
import LastCategoryCard from "./LastCategoryCard";

/* npm install react-icon --save */

const leftSlide = () => {
  let slider = document.getElementById("categoryslidercard");
  slider.scrollLeft = slider.scrollLeft - 269;
  console.log(slider.scrollLeft);
};

const rightSlide = () => {
  var slider = document.getElementById("categoryslidercard");
  slider.scrollLeft = slider.scrollLeft + 269;
  if (slider.scrollLeft > 1346) {
    slider.scrollLeft = 1614;
  }
  console.log(slider.scrollLeft);
};

const CategorySlideCard = () => {
  const CategorySlides = <CategorySlideCardData />;
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
            return <CategoryCard key={index} Categories={Categories} />;
          })}
          <LastCategoryCard />
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

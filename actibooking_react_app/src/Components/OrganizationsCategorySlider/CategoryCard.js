import Button from "../DefaultModels/Buttons/Button";

const CategoryCard = (props) => {
  return (
    <div className="category-card">
      <img
        src={`${props.Categories.ImageURL}`}
        alt="Nature"
        class="category-card-image"
      ></img>
      <div className="category-card-name">
        {props.Categories.CategoryName}
        <Button
          value="View courses"
          href={`Organizations/${props.Categories.CategoryId}`}
        />
      </div>
    </div>
  );
};

export default CategoryCard;

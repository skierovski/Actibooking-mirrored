import Button from "../../DefaultModels/Buttons/Button";

const CategoryCard = (props) => {
  return (
    <div className="category-card">
      <div
        className="category-card-image"
        style={{ backgroundImage: `url(${props.Categories.ImageURL})` }}
      ></div>
      <div className="category-card-name">
        {props.Categories.CategoryName}
        <Button value="ViewMore" href={`Organizations/${props.Categories.CategoryId}`} />
      </div>
    </div>
  );
};

export default CategoryCard;

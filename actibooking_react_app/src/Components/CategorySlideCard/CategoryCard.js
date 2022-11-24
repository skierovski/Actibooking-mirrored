import CardButton from "./CardButton";

const Card = (props) => {
  return (
    <div className="category-card">
      <div
        className="category-card-image"
        style={{ backgroundImage: `url(${props.Categories.ImageURL})` }}
      ></div>
      <div className="category-card-name">
        {props.Categories.CategoryName}
        <CardButton />
      </div>
    </div>
  );
};

export default Card;

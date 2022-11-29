import Button from "../../DefaultModels/Buttons/Button";
const LastCategoryCard = () => {
  return (
    <div className="category-card">
      <img
        src={`./CategoryImg/green.jpeg`}
        alt="Nature"
        class="category-card-image"
      ></img>
      <div className="category-card-image-div">
        <p className="last-card-title">
          No
          <br /> interesting
          <br /> category
        </p>
      </div>
      <div className="category-card-name">
        Well, see
        <Button value="More Categories" href={`Categories/`} />
      </div>
    </div>
  );
};

export default LastCategoryCard;

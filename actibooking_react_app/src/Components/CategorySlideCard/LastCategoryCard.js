import Button from "../DefaultModels/Button";

const LastCard = (props) => {
  return (
    <div className="category-card">
      <div className="category-card-image">
        <p className="last-card-title">
          No
          <br /> interesting
          <br /> category
        </p>
      </div>
      <div className="category-card-name">
        Well, see
        <Button
          value="More Categories"
          href={`Categories/`}
          containerStyle="last-card-button"
        />
      </div>
    </div>
  );
};

export default LastCard;

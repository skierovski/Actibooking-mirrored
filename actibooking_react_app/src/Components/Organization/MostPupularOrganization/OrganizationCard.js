import Button from "../../DefaultModels/Buttons/Button";
import "./MostPopularOrganization.css";
const OrganizationCard = (props) => {
  return (
    <div className="organization-card">
      <img
        src={`${props.Organizations.logoUrl}`}
        alt="Nature"
        class="organization-card-image"
      ></img>
      <div className="organization-card-name">
        <p>{props.Organizations.name}</p>
        <p className="organization-addresses">
          {props.Organizations.addresses.city}
        </p>
        <p className="organization-addresses">
          {props.Organizations.addresses.street}{" "}
          {props.Organizations.addresses.streetNumber}
        </p>
        <p className="organization-addresses">
          Rating :{props.Organizations.ratings.averageRating}
        </p>
        <Button
          value="View details"
          href={`Organizations/${props.Organizations.id}`}
          containerStyle="button-container-organization"
        />
      </div>
    </div>
  );
};

export default OrganizationCard;

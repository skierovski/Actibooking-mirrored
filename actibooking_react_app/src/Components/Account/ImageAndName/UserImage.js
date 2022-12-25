const UserImage = (props) => {

  return (
          <img
            src={props.src}
            alt="Avatar"
            onClick={props.onClick}
          />
  );
};

export default UserImage;

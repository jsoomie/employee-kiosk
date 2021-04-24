import "../css/Card.css";

const Card = ({ image, name, phone, email, dob }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-body">
        <div>{name}</div>
        <div>{phone}</div>
        <div>{email}</div>
        <div>{dob}</div>
      </div>
    </div>
  );
};

export default Card;

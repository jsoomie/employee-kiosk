import "../css/Card.css";

const Card = ({ image, name, phone, email, dob }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-body">
        <div>
          <strong>Name:</strong> {name}
        </div>
        <div>
          <strong>Number:</strong> {phone}
        </div>
        <div>
          <strong>Email:</strong> {email}
        </div>
        <div>
          <strong>DOB:</strong> {dob}
        </div>
      </div>
    </div>
  );
};

export default Card;

import "../css/Card.css";

const Card = ({ image, firstName, lastName, phone, email, dob }) => {
  const dateFormat = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="card">
      <img
        src={image}
        alt={`Pic of ${firstName} ${lastName}`}
        width="200px"
        height="200px"
      />
      <div className="card-body">
        <div>
          <strong>
            <h2>
              {lastName}, {firstName}
            </h2>
          </strong>
        </div>
        <div>
          <strong>Number:</strong> {phone}
        </div>
        <div>
          <strong>Email:</strong> {email}
        </div>
        <div>
          <strong>DOB:</strong> {dateFormat(dob)}
        </div>
      </div>
    </div>
  );
};

export default Card;

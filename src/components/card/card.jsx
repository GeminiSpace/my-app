import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ monster }) => {
  const { name, email, id } = monster;
  return (
    <div className="card-container">
      <Link className="link" to={`/monsters/${id}`}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </Link>
    </div>
  );
};

export default Card;

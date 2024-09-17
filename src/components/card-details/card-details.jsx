import { useParams } from "react-router-dom";
import "./card-details.css";

const UserDetails = ({ monsters }) => {
  const { id } = useParams();
  const monster = monsters.find((monster) => monster.id === parseInt(id));

  if (!monster) return <h1>Monster Not Found</h1>;
  return (
    <div className="card-details">
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        alt={`monster ${monster.name}`}
      />
      <h1>{monster.name}</h1>
      <p>Email: {monster.email}</p>
      <p>Username: {monster.username}</p>
      <p>Phone: {monster.phone}</p>
      <p>Website: {monster.website}</p>
      <p>Company: {monster.company.name}</p>
      <p>Address: {monster.address.street}</p>
      <p>{monster.address.suite}</p>
      <p>{monster.address.city}</p>
      <p>{monster.company.zipcode}</p>
    </div>
  );
};

export default UserDetails;

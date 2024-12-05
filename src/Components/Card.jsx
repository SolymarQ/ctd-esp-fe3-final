import { Link } from "react-router-dom";
import { useDentistState } from "../Components/utils/global.context";


const Card = ({ name, username, id }) => {
  const { setFavs } = useDentistState();
  const addFav = () => {
    setFavs((favs) => {
      if(favs.some((fav) => fav.id === id)){
        return favs;
      }
      return [...favs, { name, username, id}]
    });
  }

  return (
    <div className="card">
        <Link to={`/dentist/${id}`}>
          <img src="/public/images/doctor.jpg" alt="Doctor" />
          <h3>{name}</h3>
          <p>{username}</p>
        </Link>
        <br />
        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;

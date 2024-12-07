import { Link } from "react-router-dom";
import { useDentistState } from "../Components/utils/global.context";


const Card = ({ name, username, id }) => {
  const { dispatch, state } = useDentistState();
  const findFav = state.favs.some((fav) => id === fav.id)
  const toggleFav = () => {
    dispatch({type: findFav ? "DELETE_FAVORITE" : "ADD_FAVORITE", payload: {name, username, id}})
  };

  return (
    <div className="card">
        <Link to={`/dentist/${id}`}>
          <img src="/images/doctor.jpg" alt="Doctor"/>
          <h3>{name}</h3>
          <p>{username}</p>
        </Link>
        <br />
        <button onClick={toggleFav} className="favButton">{findFav ? "🌟" : "⭐"}</button>
    </div>
  );
};

export default Card;

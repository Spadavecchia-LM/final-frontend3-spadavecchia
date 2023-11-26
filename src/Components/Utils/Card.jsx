import React, { useContext } from "react";
import Avatar from "../../Assets/avatar.webp";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/Context";
import Toastify from "toastify-js";

const Card = ({ user }) => {
  const { id, name, username } = user;

  const { state, dispatch } = useContext(GlobalContext);

  const addToFav = () => {
    if (!isInFavs(user.id)) {
      dispatch({ type: "ADD_FAV", payload: user });
      localStorage.setItem("user", JSON.stringify([...state.favs, user]));
      displayToast("se agrego a favoritos");
    } else {
      alert("ya lo agregaste en favoritos!");
    }
  };
  const isInFavs = (id) => {
    return state.favs.some((user) => user.id == id);
  };
  const displayToast = (mensaje) => {
    Toastify({
      text: mensaje,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
        width: "300px",
      },
      gravity: "bottom",
      position: "center",
      duration: 1000,
    }).showToast();
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <img src={Avatar} alt="foto de perfil" width={120} />
      </Link>
      <h3>{name}</h3>
      <p>
        {username} - <Link to={`/dentist/${id}`}>Ver perfil</Link>
      </p>

      <div>
        {isInFavs(user.id) ? (
          <button disabled style={{ color: "red" }}>
            ♥
          </button>
        ) : (
          <button onClick={addToFav}>añadir a favoritos</button>
        )}
      </div>
    </div>
  );
};

export default Card;

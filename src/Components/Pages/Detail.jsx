import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context/Context";
import fotoPerfil from "../../Assets/fotoPerfil.avif";
import { Link } from "react-router-dom";
import Toastify from "toastify-js";

const Detail = () => {
  const { id } = useParams();

  const { state, dispatch } = useContext(GlobalContext);

  const user = state.userList.find((us) => us.id == id);

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
    <div className="detail">
      <img src={fotoPerfil} alt="foto de dentista" />
      <div>
        <h1>Datos de contacto</h1>
        <ul>
          <li>Nombre: {user.name}</li>
          <li>Nombre de usuario: {user.username}</li>
          <li>Telefono: {user.phone}</li>
          <li>Sitio Web: {user.website}</li>
          <li>Email: {user.email}</li>
          <li>Calle: {user.address.street}</li>
          <li>Ciudad:{user.address.city}</li>
          <li>Codigo Postal: {user.address.zipcode}</li>
        </ul>
      </div>
      <div className="detailBtnGroup">
        {!isInFavs(user.id) && (
          <button onClick={addToFav}>Añadir a favoritos</button>
        )}
        <Link to={"/"}>
          <button>Ver mas dentistas</button>
        </Link>
      </div>
    </div>
  );
};

export default Detail;

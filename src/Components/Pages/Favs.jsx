import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/Context";
import { FaRegTrashAlt } from "react-icons/fa";

const Favs = () => {
  const favoritos = JSON.parse(localStorage.getItem("user"));

  const { state, dispatch } = useContext(GlobalContext);

  const eliminar = (id) => {
    const nuevosFavoritos = favoritos.filter((fav) => fav.id !== id);
    localStorage.setItem("user", JSON.stringify(nuevosFavoritos));
    dispatch({ type: "ELIMINAR_FAV", payload: id });
  };
  console.log(state.favs);

  return (
    <>
      {favoritos == null || favoritos.length == 0 ? (
        <div className="emptyFavs">
          <p>No hay dentistas en tus favoritos</p>
          <Link to={`/`}>
            <button>Volver a Home</button>
          </Link>
        </div>
      ) : (
        <div className="favTable">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Usuario</th>
                <th>Email</th>
                <th>Telefono</th>
                <th>Sitio Web</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {favoritos.map((fav) => {
                return (
                  <tr key={fav.id}>
                    <td>{fav.id}</td>
                    <td>{fav.name}</td>
                    <td>{fav.username}</td>
                    <td>{fav.email}</td>
                    <td>{fav.phone}</td>
                    <td>
                      <Link to={`/dentist/${fav.id}`}>{fav.website}</Link>
                    </td>
                    <td>
                      <button onClick={() => eliminar(fav.id)}>
                        <FaRegTrashAlt />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default React.memo(Favs);

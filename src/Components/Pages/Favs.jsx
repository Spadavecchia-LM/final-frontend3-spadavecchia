import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../Context/Context'

const Favs = () => {

  const favoritos = JSON.parse(localStorage.getItem("user"))


  return (
    <>
    {favoritos == null ? 
    <div>
      <p>No hay dentistas en tus favoritos</p>
      <Link to={`/`}><button>Volver a Home</button></Link>

    </div> : 
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Sitio Web</th>
          </tr>
        </thead>
        <tbody>
        {favoritos.map(fav => {
        return(
          <tr key={fav.id}>
              <td>{fav.id}</td>
              <td>{fav.name}</td>
              <td>{fav.username}</td>
              <td>{fav.email}</td>
              <td>{fav.phone}</td>
              <td><Link to={`/dentist/${fav.id}`}>{fav.website}</Link></td>
  
          </tr>
        )
      })}
  
        </tbody>
      </table>
  
    }
    </>
  )
}

export default React.memo(Favs)
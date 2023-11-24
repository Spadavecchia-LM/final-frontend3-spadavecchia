import React, { useContext } from 'react'
import Avatar from "../../Assets/avatar.webp"
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../Context/Context'

const Card = ({user}) => {

  const {id,name, username} = user

  const {state, dispatch} = useContext(GlobalContext)

  const addToFav = () => {

    if(!isInFavs(user.id)){
      dispatch({type:"ADD_FAV", payload: user})
      localStorage.setItem("user", JSON.stringify([...state.favs, user]))  
    }
    else{
      alert("ya lo agregaste en favoritos!")
    }
  }
  const isInFavs = (id) => {
    return state.favs.some(user => user.id == id )
  }

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
      <img src={Avatar} alt="foto de perfil" width={120}/>
      </Link>
      <h3>{name}</h3>
      <p>{username} - <Link to={`/dentist/${id}`}>Ver perfil</Link></p>
      
      <div>
        {isInFavs(user.id) ? <button disabled style={{color:"red"}}>♥</button> : <button onClick={addToFav}>añadir a favoritos</button>}
      </div>
    </div>
  )
}

export default Card
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../Context/Context'
import { WiDaySunny } from "react-icons/wi";
import { WiMoonWaningCrescent3 } from "react-icons/wi";

const NavBar = () => {
    
  const {state, dispatch} = useContext(GlobalContext)

  console.log(state)


  return (
    <div className="navBar">
            <ul>
            <Link to={`/`}><li>Home</li></Link>
            <Link to={`/contact`}><li>Contacto</li></Link>
            <Link to={`/favs`}><li>Favoritos</li></Link>
            </ul>
            <div>

            <button onClick={() => dispatch({type:"TOGGLE_MODE", payload: !state.darkMode})}>{!state.darkMode ? <WiDaySunny/> : <WiMoonWaningCrescent3 />}</button>
            </div>

    </div>
  )
}

export default React.memo(NavBar)
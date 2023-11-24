import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/Context'
import Card from '../Utils/Card'


const Home = () => {

const {state} = useContext(GlobalContext)



  return (
  <div className="cardsContainer">
    <div className="hero">CLINICA SPADAVECCHIA</div>
  {state.userList.map(user => {
    return(
      <div key={user.id}>
          <Card user={user}/>
      </div>
    )
  })}
  </div>
  )
}

export default React.memo(Home)
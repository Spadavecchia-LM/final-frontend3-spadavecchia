import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../Context/Context'

const Detail = () => {

  const {id} = useParams()

  const {state} = useContext(GlobalContext)

  
  const user = state.userList.find(us => us.id == id)
  

  
  
  return (
    <div>
    <h1>{user.name}</h1>
    </div>
  )
}

export default Detail
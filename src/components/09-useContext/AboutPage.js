import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const AboutPage = () => {
  const { user,setUser } = useContext(UserContext);
  const handleClick=()=>{
    setUser({})
  }
    return (
        <div>
      <h1>ABOUT PAGE</h1>
      <hr />
      <pre>
        {JSON.stringify(user,null,4)}
      </pre>
      <button className="btn btn-outline-dark" type="button" onClick={handleClick}>LogOut</button>
    </div>
            
        
    )
}

import React from 'react'
import Posts from './Posts/Posts'
import { useSelector } from "react-redux";


const Home = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="post">
        {user ? 
        <>
      <h1>Home</h1>
      <Posts/>
          </>
         : 
          <>
        <h1>ACA VA UN COMPONENTE DE BIENVENIDA</h1>
          </>
        }

    </div>
  )
}

export default Home
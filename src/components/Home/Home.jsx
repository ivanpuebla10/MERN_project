import React from 'react'
import Posts from './Posts/Posts'
import Welcome from '../Welcome/Welcome'
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="post">
        {user ? 
        <>
      <Posts/>
          </>
         : 
      <>
      <Welcome />       
      </>
        }

    </div>
  )
}

export default Home
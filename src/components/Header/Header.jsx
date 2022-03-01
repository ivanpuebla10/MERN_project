import "./Header.scss";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/signin");
  };
  console.log(user)
  return (
    <div className="header">
      
      <>       
       {user ? 
        <>
        <span><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" height="40px" width="40px"></img></span>
          <span><Link to="/">Home</Link></span>
          <span><Link to="/profile" >{user.user.username.toUpperCase()}</Link> </span>
          <span><Link to="/" onClick={onLogout}>Logout</Link></span>
          </>
         : 
          <>
      <span><img src="https://logowik.com/content/uploads/images/linkedin-new4645.jpg" width="180px"  height="100px"></img></span>
      <span><Link to="/signup">Unirse ahora</Link></span>
      <span><Link to="/signin"><button>Iniciar sesión</button></Link></span>
          </>
        }
      
      </>
      {user?.user.role === 'admin' ? <span><Link to="/admin">Admin</Link></span>:''}
    </div>
    
  );
};

export default Header;

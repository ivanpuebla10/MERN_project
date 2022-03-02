import "./Header.scss";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import logo from "../../images/icon.png";
import { HomeOutlined } from "@ant-design/icons";



const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    navigate("/signin");
  };
  return (
    <div className="header">
      
      <>       
       {user ? 
        <>
          <span><Link to="/"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" height="40px" width="40px"></img></Link></span>
          <span><Link to="/"><HomeOutlined style={{ fontSize: '30px'}} /></Link></span>
          <span><Link to="/profile" >{user.user.username.toUpperCase()}</Link> </span>
          <span><Link to="/" onClick={onLogout}>Logout</Link></span>
          </>
         : 
          <>
      <span className="logo"><Link to="/"><img src={logo}></img></Link></span>
      <div>
      <span className="signup"><Link to="/signup">Unirse ahora</Link></span>
      <span><Link to="/signin"><button>Iniciar sesión</button></Link></span>
      </div>
          </>
        }
      
      </>
      {user?.user.role === 'admin' ? <span><Link to="/admin">Admin</Link></span>:''}
    </div>
    
  );
};

export default Header;

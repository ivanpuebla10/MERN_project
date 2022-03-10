import "./Header.scss";
import {React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import logo from "../../images/icon.png";
import { HomeFilled, MessageFilled, BellFilled, ContactsFilled, ShoppingFilled, SearchOutlined } from "@ant-design/icons";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [text, setText] = useState("");

  const onLogout = () => {
    dispatch(logout());
    navigate("/signin");
  };
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      navigate('/search/'+ text)
    }
  };

  return (
    <div className="header">
      <>       
       {user ? 
        <>
          <span className="mini_logo"><Link to="/"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" height="35px" width="35px"></img></Link></span>
          <span>
          {/* <span><Link to="/"><SearchOutlined style={{ fontSize: '20px', background: '#EEF3F8', height: '100%'}}/></Link></span> */}
          <input onKeyUp={handleChange} placeholder="Buscar post..." name="text" className="search_bar"/>
          </span>
          <span><Link to="/"><HomeFilled style={{ fontSize: '22px'}} /></Link></span>
          <span><Link to="/"> <ContactsFilled style={{ fontSize: '22px'}}/></Link></span>
          <span><Link to="/"> <ShoppingFilled style={{ fontSize: '22px'}}/></Link></span>
          <span><Link to="/"> <MessageFilled style={{ fontSize: '22px'}}/></Link></span>
          <span><Link to="/"> <BellFilled style={{ fontSize: '22px'}}/></Link></span>
          <span><Link to="/profile" ><img className="profile-picture" src="https://media-exp1.licdn.com/dms/image/C5112AQHJ0-bLpEHpZQ/article-inline_image-shrink_1000_1488/0/1544212376133?e=1648684800&v=beta&t=o_YQaPYUOEACsahYSepY2D-SCfY_HmsxDZ4ROWrCtfc"></img></Link> </span>
          <span><Link to="/welcome" onClick={onLogout}>Cerrar sesión</Link></span>
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

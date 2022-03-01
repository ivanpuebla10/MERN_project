import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../../features/auth/authSlice";
import { notification } from "antd";
import "antd/dist/antd.css";
import "./Login.scss";
import { Link } from "react-router-dom";


const Login = () => {
const [formData, setFormData] = useState({ email: "", password: ""});
  const { email, password } = formData;
  const navigate = useNavigate();
  const { isError, isSuccess, message } = useSelector((state) => state.auth);
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) {
      notification.error({  message: "Error", description: message, });
    }
    if (isSuccess) {
      notification.success({  message: "Success", description: message?.message,  });
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    }
    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <div className="general-container">
      <div className="welcome-container">
        
      </div>
    <div className="form_container">
    <form id = "login_form" onSubmit={onSubmit}>
      <h1>Iniciar sesión</h1>
      <p>Mantente al día de tu mundo profesional</p>
        <input type="email" name="email" value={email} id="email" placeholder="Email"  onChange={onChange}/>
        <input type="password" name="password" value={password} id="password" placeholder="Contraseña" onChange={onChange}/>
        <a href="">¿Has olvidado tu contraseña?</a>
        <button type="submit">Iniciar sesión</button>
        <p>¿Estás empezando a usar LinkedIn?<Link to="/signup">Unirse ahora</Link></p>
    </form>
    </div>
    </div>
  )
}
export default Login

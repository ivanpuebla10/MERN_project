import "./Register.scss";
import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { register, reset } from "../../features/auth/authSlice";
import { notification } from "antd";
import "antd/dist/antd.css";

const Register = () => {
    const [formData, setFormData] = useState({ username: "",email: "",password: "",password2: "", });
    const { username, email, password, password2 } = formData;
    const dispatch = useDispatch()
    const navigate = useNavigate();
        const { isError, isSuccess, message } = useSelector( (state) => state.auth )
    useEffect(() => {
      if (isError) {
        notification.error({ message: "Error",description: message.msg });
      }
      if (isSuccess) {
          notification.success({  message: "Success",  description:message?.message});
          setTimeout(() => {
            navigate("/login");
        }, 1000);
        }
        dispatch(reset())
    }, [isError, isSuccess, message,  navigate,dispatch]);
  
    const onChange = (e)=>{
        setFormData((prevState)=> ({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
          return notification.error({
            message: "Error",
            description: "Passwords do not match",
          });
        } else {
            dispatch(register(formData));
        }
      };
  return (
    <div className="form_container">
      <h1>Saca el máximo partido a tu vida profesional</h1>
    <form id = "register_form" onSubmit={onSubmit}>
        <input type="text" name="username" value={username} placeholder="Username" id="firstname" onChange={onChange} />
        <input type="email" name="email" value={email} placeholder="Email" id="email" onChange={onChange}/>
        <input type="password" name="password" value={password} placeholder="Password" id="password" onChange={onChange}/>
        <input type="password" name="password2" value={password2} placeholder="Repeat Password" id="password2" onChange={onChange}/>
        <button type="submit" className="submit-button">Continuar</button>
        <button className="back-button">Volver</button>
    </form>
    </div>
  )
}

export default Register 
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {login} from '../../features/auth/authSlice'
import "./Login.scss";

const Login = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    const {email,password} = formData
    const onChange = (e)=>{
        setFormData((prevState)=> ({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }
    const dispatch = useDispatch()
   
    const onSubmit = (e) => {
        e.preventDefault()
        console.log('formData',formData)
        dispatch(login(formData))
    }
  return (
    <div className="form_container">
    <form id = "login_form" onSubmit={onSubmit}>
        <input type="email" name="email" value={email} id="email" placeholder="Email"  onChange={onChange}/>
        <input type="password" name="password" value={password} id="password" placeholder="Password" onChange={onChange}/>
        <button type="submit">Login</button>
        <a href="">Forgot your password?</a>
    </form>
    </div>
  )
}
export default Login

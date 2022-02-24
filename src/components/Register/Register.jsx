// import React, { useState } from "react";
import "./Register.scss";
import { useSelector, useDispatch } from 'react-redux'
import {register} from '../../features/auth/authSlice'
import { useNavigate } from "react-router-dom";


// import { useNavigate } from "react-router-dom";


// const Register = () => {
// //   let navigate = useNavigate();
//   const [data, setData] = useState({
//     firstname: "",
//     lastname:"",
//     username:"",
//     birth_date: "",
//     email: "",
//     password:""
//   });
//   const handleInputChange = (event) => {
//     setData({
//       ...data,
//       [event.target.name]: event.target.value,
//     });
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("sending data..." + data.firstname + " " + data.lastname + " " +data.username+ " " +data.birth_date + " " + data.email + " " +data.password);
//     // setTimeout(() => {
//     //     navigate("/");
//     //   }, 1000);
      
//     // let title = data.title;
//     // let section = data.section;
//     // let subcategory = data.subcategory;
//     // let abstract = data.abstract;

//     // let dataBase = JSON.parse(localStorage.getItem('myform')) || [];

//     // const information = {
//     //   title,
//     //   section,
//     //   subcategory,
//     //   abstract   
//     //  }

//     //  dataBase.push(information)


//     // localStorage.setItem('myform', JSON.stringify(dataBase));
//   };

//   return (
//     <div className="form_container">
//     <form id = "register_form" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="First Name"
//         onChange={handleInputChange}
//         name="firstname"
//         id="firstname"
//       />
//       <input
//         type="text"
//         placeholder="Last Name"
//         onChange={handleInputChange}
//         name="lastname"
//         id="lastname"
//       />
//       <input
//         type="text"
//         placeholder="Username"
//         onChange={handleInputChange}
//         name="username"
//         id="username"
//       />
//       <input
//         type="text"
//         placeholder="Date of birth"
//         onChange={handleInputChange}
//         name="birth_date"
//         id="birth_date"
//       />
//       <input
//         type="text"
//         placeholder="Email"
//         onChange={handleInputChange}
//         name="email"
//         id="email"
//       />
//         <input
//         type="text"
//         placeholder="Password"
//         onChange={handleInputChange}
//         name="password"
//         id="password"
//       />
//       <button type="submit">Create account</button>
//     </form>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react'

const Register = () => {
    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:''
    })
    const {name,email,password} = formData

    const dispatch = useDispatch()
   
    const user= useSelector(state => state.auth)

    const onChange = (e)=>{
        setFormData((prevState)=> ({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log('formData',formData)
        dispatch(register(formData))
        setTimeout(() => {
            navigate("/");
          }, 1000);
    }
  return (
    <div className="form_container">
    <form id = "register_form" onSubmit={onSubmit}>
        <input type="text" name="username" value={name} placeholder="Username" id="firstname" onChange={onChange} />
        <input type="email" name="email" value={email} placeholder="Email" id="email" onChange={onChange}/>
        <input type="password" name="password" value={password} placeholder="Password" id="password" onChange={onChange}/>
        <button type="submit">Create account</button>
    </form>
    </div>
  )
}

export default Register
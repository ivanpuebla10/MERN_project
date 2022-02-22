import React, { useState } from "react";
import "./Login.scss";
// import { useNavigate } from "react-router-dom";


const Register = () => {
//   let navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password:""
  });
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("sending data..." + data.email + " " +data.password);
    // setTimeout(() => {
    //     navigate("/");
    //   }, 1000);
      
    // let title = data.title;
    // let section = data.section;
    // let subcategory = data.subcategory;
    // let abstract = data.abstract;

    // let dataBase = JSON.parse(localStorage.getItem('myform')) || [];

    // const information = {
    //   title,
    //   section,
    //   subcategory,
    //   abstract   
    //  }

    //  dataBase.push(information)


    // localStorage.setItem('myform', JSON.stringify(dataBase));
  };

  return (
    <div className="form_container">
    <form id = "login_form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        onChange={handleInputChange}
        name="email"
        id="email"
      />
        <input
        type="text"
        placeholder="Password"
        onChange={handleInputChange}
        name="password"
        id="password"
      />
      <button type="submit">Login</button>
      <a href="">Forgot your password?</a>
    </form>
    </div>
  );
};

export default Register;
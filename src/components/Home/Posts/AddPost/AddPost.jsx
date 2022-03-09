import "./AddPost.scss";
import { create, reset } from "../../../../features/posts/postsSlice";
import "antd/dist/antd.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

const AddPost = () => {
  const [formData, setFormData] = useState({ title: "",body: ""});
  const { title, body } = formData;
  const { isError, isSuccess, message } = useSelector( (state) => state.posts )
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() =>  {
    if (isError) {
      notification.error({ message: "Error",description: message });
    }
    if (isSuccess) {
        notification.success({  message: "Success",  description:message?.message});
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
        dispatch(create(formData));
      setFormData({ title: "",body: ""})
    }

  return (
    <div className="create_container"> 
    <form id = "create_form" onSubmit={onSubmit}>
    <h1>Crear post</h1>
        <input type="text" name="title" value={title} placeholder="Title" id="title" onChange={onChange} />
        <input type="text" name="body" value={body} placeholder="Body" id="body" onChange={onChange}/>
        <span className="buttons_container">
        <button type="submit" className="submit-postbutton">Post</button>
        <button className="back-postbutton">Cancelar</button>
        </span>
    </form>
    </div>
  )
}

export default AddPost 
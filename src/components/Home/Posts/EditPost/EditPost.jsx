import { editPost, getById, reset } from "../../../../features/posts/postsSlice";
import "antd/dist/antd.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const { post, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch()
  const { _id } = useParams();
  const [formData, setFormData] = useState({ title: post.title ,body: post.body , _id});
  const { title, body } = formData;
  const navigate = useNavigate();


  useEffect(() =>   {
    getById(_id)
  },[]);


  if (isLoading) {
    return (
      <h1>
        cargando
      </h1>
    );
  }
  const onChange = (e)=>{
    setFormData((prevState)=> ({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
}

const onSubmit = (e) => {
  e.preventDefault();
        dispatch(editPost(formData));
      setFormData({ title: "",body: ""})
      setTimeout(() => {
        navigate("/profile");
      }, 2000);    
    }

  return (
    <div className="create_container"> 
    <form id = "create_form" onSubmit={onSubmit}>
    <h1>Editar post</h1>
        <input type="text" name="title" value={title} placeholder="Title" id="title" onChange={onChange} />
        <input type="text" name="body" value={body} placeholder="Body" id="body" onChange={onChange}/>
        <span className="buttons_container">
        <button type="submit" className="submit-postbutton">Ok</button>
        <button className="back-postbutton">Cancelar</button>
        </span>
    </form>
    </div>
  )
}

export default EditPost 
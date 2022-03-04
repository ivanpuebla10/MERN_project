import React, { useEffect } from 'react'
import Post from './Post/Post'
import AddPost from '../Posts/AddPost/AddPost'
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../../features/posts/postsSlice';
import { reset } from '../../../features/auth/authSlice';


const Posts = () => {
  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(getAll());
  }, []);
  return (
    <>
        <AddPost/>
        <Post/>   
    </>
  )
}

export default Posts
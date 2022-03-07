import React, { useEffect } from 'react'
import Post from './Post/Post'
import AddPost from '../Posts/AddPost/AddPost'
import { useDispatch } from 'react-redux';
import { getAll } from '../../../features/posts/postsSlice';


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
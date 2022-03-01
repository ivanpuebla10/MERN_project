import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, reset, deletePost } from "../../../features/posts/postsSlice";

const Post = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(getAll());
    await dispatch(reset());
  }, []);

  if (isLoading) {
    return <h1>Cargando posts...</h1>;
  }

  const post = posts.map((post) => {
    return (
      <div className="post" key={post._id}>
          <p>{post.title}</p>
          <button onClick={() => dispatch(deletePost(post._id))}>Eliminar</button>
      </div>
    );
  });
  return <div>{post}</div>;
};

export default Post;
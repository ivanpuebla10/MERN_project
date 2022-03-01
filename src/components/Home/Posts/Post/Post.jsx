import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, reset } from "../../../../features/posts/postsSlice";
import { Link } from "react-router-dom";
import { Spin } from "antd";

const Post = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(getAll());
    await dispatch(reset());
  }, []);
  if (isLoading) {
    return (
      <h1>
        <Spin />
      </h1>
    );
  }
  const post = posts.map((post) => {
    return (
      <div className="post" key={post._id}>
        <Link to={"/post/" + post._id}>
          <p>{post.title}</p>
        </Link>
      </div>
    );
  });
  return <div>{post}</div>;
};
export default Post;
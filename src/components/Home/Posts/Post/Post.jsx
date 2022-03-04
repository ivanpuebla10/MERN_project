import "./Post.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, reset, like, deslike } from "../../../../features/posts/postsSlice";
import { Link } from "react-router-dom";
import { Spin } from "antd";
import "antd/dist/antd.css";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";

const Post = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
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
  const post = posts?.map((post) => {
    const isAlreadyLiked = post.likes?.includes(user?.user?._id);
    return (
      <div className="post-container" key={post._id}>
        <div className="post">
        <Link to={"/post/" + post._id}>
        <p>{post.title}</p>
        <p>{post.body}</p>
        </Link>
        {isAlreadyLiked ? (
          <>
          <span>
          <span className="like">Likes: {post.likes?.length} </span>
          <LikeFilled onClick={  isAlreadyLiked  ? () => dispatch(deslike(post._id))  : () => dispatch(like(post._id))  } />
          </span>
          </>
        ) : (
          <>
          <span className="like">Likes: {post.likes?.length} </span>
          <LikeOutlined onClick={  isAlreadyLiked  ? () => dispatch(deslike(post._id))  : () => dispatch(like(post._id))  } />
        </>
        )}
      </div>
      </div>
    );
  });
  return <>{post}</>;
};
export default Post;
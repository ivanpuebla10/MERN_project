import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { deslike, getById, like } from "../../../../features/posts/postsSlice";
import "antd/dist/antd.css";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const PostDetail = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getById(_id));
  }, []);

  const isAlreadyLiked = post.likes?.includes(user?.user?._id);
  return (
    <div>
      <h1>PostDetail</h1>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <span>Likes:{post.likes?.length}</span>
      {isAlreadyLiked ? (
          <HeartFilled  onClick={  isAlreadyLiked  ? () => dispatch(deslike(post._id)) : () => dispatch(like(post._id))  } />
        ) : (
          <HeartOutlined onClick={  isAlreadyLiked  ? () => dispatch(deslike(post._id)) : () => dispatch(like(post._id))  } />
        )}

    </div>
  );
};

export default PostDetail;
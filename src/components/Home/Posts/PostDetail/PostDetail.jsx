import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { deslike, getById, insertComment, like, reset } from "../../../../features/posts/postsSlice";
import "antd/dist/antd.css";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";
import { Spin } from "antd";

const PostDetail = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { post, isLoading } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({ comment: '' ,postId:_id });
  const { comment } = formData;


  useEffect(async () => {
    await dispatch(getById(_id));
    await dispatch(reset())
  }, []);

  const onChange = (e)=>{
    setFormData((prevState)=> ({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
}

const onSubmit = (e) => {
  e.preventDefault();
        dispatch(insertComment(formData));
        setFormData({ comment : "",postId:post._id})
    }

  if (isLoading) {
    return <h1><Spin /></h1>;
  }

  const isAlreadyLiked = post?.likes?.includes(user.user._id);
  const isLiked = post?.likes?.length;

  return (
    <div>
      <p>{post?.title}</p>
      <p>{post?.body}</p>

      {isLiked > 0 ? (
            <span>
              <span className="like">Likes: {post.likes?.length} </span>
              {isAlreadyLiked ? (
                <>
                  <span>
                    <LikeFilled
                      onClick={
                        isAlreadyLiked
                          ? () => dispatch(deslike(post._id))
                          : () => dispatch(like(post._id))
                      }
                    />
                  </span>
                </>
              ) : (
                <>
                  <span>
                    <LikeOutlined
                      onClick={
                        isAlreadyLiked
                          ? () => dispatch(deslike(post._id))
                          : () => dispatch(like(post._id))
                      }
                    />
                  </span>
                </>
              )}
            </span>
          ) : (
            <>
              {isAlreadyLiked ? (
                <>
                  <span>
                    <LikeFilled
                      onClick={
                        isAlreadyLiked
                          ? () => dispatch(deslike(post._id))
                          : () => dispatch(like(post._id))
                      }
                    />
                  </span>
                </>
              ) : (
                <>
                  <span>
                    <LikeOutlined
                      onClick={
                        isAlreadyLiked
                          ? () => dispatch(deslike(post._id))
                          : () => dispatch(like(post._id))
                      }
                    />
                  </span>
                </>
              )}
            </>
          )}

      <p>{post.comments?.length} comentarios</p>
      <p>{post.comments?.map(comment => <>
      <p>{comment.comment?.userId?.username}</p>
      <p>{comment.comment}</p></>)}</p>

        <form id="comment_form" onSubmit={onSubmit}>
        <input type="text" name="comment"  value = {comment} placeholder="Insertar commentario" onChange={onChange} />
        <button type="submit" className="submit-postbutton">Comentar</button>
        </form>
    </div>
  );
};

export default PostDetail;
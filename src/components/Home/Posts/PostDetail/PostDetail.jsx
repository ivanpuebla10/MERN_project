import "./PostDetail.scss";
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
  console.log(post)

  return (
    <div className="post-detail-container">
    <div className="post-detail">
      <span className="user-reference">
            <img className="profile-picture" src="https://media-exp1.licdn.com/dms/image/C5112AQHJ0-bLpEHpZQ/article-inline_image-shrink_1000_1488/0/1544212376133?e=1648684800&v=beta&t=o_YQaPYUOEACsahYSepY2D-SCfY_HmsxDZ4ROWrCtfc"></img>
            <p id="user">{post?.userId?.username}</p>
            </span>
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
      <div >{post.comments?.map(comment => <div className="comment-box">
        <span>
      <img className="comment-pic-mini" src="https://media-exp1.licdn.com/dms/image/C5112AQHJ0-bLpEHpZQ/article-inline_image-shrink_1000_1488/0/1544212376133?e=1648684800&v=beta&t=o_YQaPYUOEACsahYSepY2D-SCfY_HmsxDZ4ROWrCtfc"></img>
      <p className="comment-p" id="comment-user">{comment?.userId?.username}</p>
      </span>
      <p className="comment-p">{comment.comment}</p></div>)}</div>

        <form id="comment_form" onSubmit={onSubmit}>
        <span>
        <img className="comment-pic" src="https://media-exp1.licdn.com/dms/image/C5112AQHJ0-bLpEHpZQ/article-inline_image-shrink_1000_1488/0/1544212376133?e=1648684800&v=beta&t=o_YQaPYUOEACsahYSepY2D-SCfY_HmsxDZ4ROWrCtfc"></img>
        <input type="text" name="comment"  className="comment-input" value = {comment} placeholder="Añadir un comentario" onChange={onChange} />
        </span>
        <button type="submit" className="submit-postbutton">Comentar</button>
        </form>
    </div>
    </div>
  );
};

export default PostDetail;
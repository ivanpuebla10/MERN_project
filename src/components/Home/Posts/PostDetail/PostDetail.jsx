import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { deslike, getById, like } from "../../../../features/posts/postsSlice";
import "antd/dist/antd.css";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";

const PostDetail = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { post, isLoading } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getById(_id));
  }, []);


  if (isLoading) {
    return <h1>Cargando post...</h1>;
  }

  const isAlreadyLiked = post.likes?.includes(user?.user?._id);
  const isLiked = post.likes.length;

  return (
    <div>
      <h1>PostDetail</h1>
      <p>{post.title}</p>
      <p>{post.body}</p>
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
    </div>
  );
};

export default PostDetail;
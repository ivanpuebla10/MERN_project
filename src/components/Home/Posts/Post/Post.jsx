import "./Post.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getAll,
  reset,
  like,
  deslike,
} from "../../../../features/posts/postsSlice";
import { Link } from "react-router-dom";
import { Spin } from "antd";
import "antd/dist/antd.css";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";

const Post = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <h1>
        <Spin />
      </h1>
    );
  }
  const post = posts?.map((post) => {
    const isAlreadyLiked = post.likes?.includes(user?.user?._id);
    const isLiked = post.likes.length;

    return (
      <div id="post-container" key={post._id}>
        <div className="post">
          <Link to={"/post/" + post._id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </Link>
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
      </div>
    );
  });
  return <>{post}</>;
};
export default Post;

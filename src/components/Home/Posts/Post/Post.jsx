import "./Post.scss";
import { useDispatch, useSelector } from "react-redux";
import {
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
          <Link to={"/post/" + post._id}>
            <span className="user-reference">
            <img className="profile-picture" src="https://media-exp1.licdn.com/dms/image/C5112AQHJ0-bLpEHpZQ/article-inline_image-shrink_1000_1488/0/1544212376133?e=1648684800&v=beta&t=o_YQaPYUOEACsahYSepY2D-SCfY_HmsxDZ4ROWrCtfc"></img>
            <p id="user">{post.userId.username}</p>
            </span>
            <p id="title">{post.title}</p>
            <p id="body">{post.body}</p>
          </Link>
          <span className="interactions">
          {isLiked > 0 ? (
            <span >
              <span>Likes: {post.likes?.length} </span>
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
          <span>{post.comments.length} comentarios</span>
          </span>
      </div>
    );
  });
  return <>{post}</>;
};
export default Post;

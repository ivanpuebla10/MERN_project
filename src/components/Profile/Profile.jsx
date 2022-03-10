import "./Profile.scss";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import { like, deslike, deletePost, reset } from "../../features/posts/postsSlice";
import { Link } from "react-router-dom";
import { getUserInfo } from "../../features/auth/authSlice";
import { useEffect } from "react";

const url =
  "https://media-exp1.licdn.com/dms/image/C5112AQHJ0-bLpEHpZQ/article-inline_image-shrink_1000_1488/0/1544212376133?e=1648684800&v=beta&t=o_YQaPYUOEACsahYSepY2D-SCfY_HmsxDZ4ROWrCtfc";
const banner =
  "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(getUserInfo());
  }, []);

  const post = user.user.postIds.map((post) => {
    const isAlreadyLiked = post.likes?.includes(user?.user?._id);
    const isLiked = post.likes.length;

    const onLike = async (_id) => {
      await dispatch(like(_id));
      await dispatch(getUserInfo(_id));
    };
    const onUnLike = async (_id) => {
      await dispatch(deslike(_id));
      await dispatch(getUserInfo(_id));
    };

    const deleteProfilePost = async (_id) => {
      await dispatch(deletePost(_id));
      await dispatch(getUserInfo(_id));
    };

    return (
      <div className="post-container" key={post._id}>
        <div className="post">
          <Link to={"/post/" + post._id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <Link to={"/post/" + post._id}><p>{post.comments.length} comentarios</p></Link>
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
                          ? () => (onUnLike(post._id))
                          : () => (onLike(post._id))
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
                          ? () => (onUnLike(post._id))
                          : () => (onLike(post._id))
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
                          ? () => (onUnLike(post._id))
                          : () => (onLike(post._id))
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
                          ? () => (onUnLike(post._id))
                          : () => (onLike(post._id))
                      }
                    />
                  </span>
                </>
              )}
            </>
          )}
          <button onClick={() => deleteProfilePost(post._id)}>Eliminar</button>
          <Link to={"/editPost/" + post._id}><button>Editar</button></Link>
        </div>
      </div>
    );
  });

  return (
    <div className="profile">
      {/* <div className="pics_container">
        <img src={banner} className="banner-pic"></img>
        <img src={url} className="profile-pic"></img>
      </div> */}
      <div className="profile-container">
        <div className="info-container">
          <h3>Profile</h3>
          <p>{user.user.username}</p>
          <p>{user.user.email}</p>
        </div>
        <>
          <>{post}</>
          {/* <img src={url} className="post-pic"></img> */}
        </>
      </div>
    </div>
  );
};

export default Profile;

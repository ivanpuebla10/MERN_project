import "./Profile.scss";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";
import "antd/dist/antd.css";
import {  useSelector, useDispatch } from "react-redux";
import { like, deslike } from "../../features/posts/postsSlice"
import { Link } from "react-router-dom";


const url =
  "https://media-exp1.licdn.com/dms/image/C5112AQHJ0-bLpEHpZQ/article-inline_image-shrink_1000_1488/0/1544212376133?e=1648684800&v=beta&t=o_YQaPYUOEACsahYSepY2D-SCfY_HmsxDZ4ROWrCtfc";
const banner =
  "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  // console.log(user)
  const dispatch = useDispatch();
  const post = user.user.postIds.map((post) => {
  const isAlreadyLiked = post.likes?.includes(user?.user?._id);
    // console.log(post)
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
          <LikeOutlined onClick={  isAlreadyLiked  ? () => dispatch(deslike(post._id))  : () => dispatch(like(post._id))  } />
        )}
      </div>
      </div>
    )
  })

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
        <div className="posts-profile-container">
          <h4>Posts</h4>
          <>{post}</>
          {/* <img src={url} className="post-pic"></img> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;

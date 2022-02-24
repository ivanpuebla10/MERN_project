import "./Profile.scss";
const url =
  "https://media-exp1.licdn.com/dms/image/C4D03AQE5Qy64sOXApw/profile-displayphoto-shrink_800_800/0/1600971625021?e=1650499200&v=beta&t=XkANpq0aMwXDriB4D6c4QavKhfRgtd91P0A31qUSWPo";
const banner =
  "https://media.istockphoto.com/photos/tropical-beach-background-picture-id1145474071?k=20&m=1145474071&s=170667a&w=0&h=lHXlJ-EOTn94Y5o6mjpwQvVzfXJDfik-M-P1houbRnQ=";
const Profile = () => {
  return (
    <div className="profile">
      <div className="pics_container">
        <img src={banner} className="banner-pic"></img>
        <img src={url} className="profile-pic"></img>
      </div>
      <div className="profile-container">
        <div className="info-container">
          <h3>First and Lastname</h3>
          <date>date of birth</date>
          <p>City</p>
          <p>About me</p>
        </div>
        <div className="posts-profile-container">
          <h4>Post Title</h4>
          <p>Post Body</p>
          <img src={url} className="post-pic"></img>
          <a href="">Link to Postview(comments)</a>
          <a href="">Likes number</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;

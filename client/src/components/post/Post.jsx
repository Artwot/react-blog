import { Link } from "react-router-dom";
import "./post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={post.photo} alt="Article" />}
      <div className="postInfo">
        {/* Post's categories */}
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        {/* Link to post's single page */}
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">1 hr ago</span>
        {/* {new Date(post.createdAt).toDateString()} */}
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;

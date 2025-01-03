import { Link } from "react-router-dom";
import PostData from "../PostData/PostData";
import "./PostCard.css";

const PostCard = ({ id, title, date, summary, category, arrTags }) => {
  return (
    <div className="post-card">
      <Link to={id} className="post-card__link">
        <h1 className="post-card__title">{title}</h1>
      </Link>
      <PostData date={date} category={category} arrTags={arrTags} />

      <Link to={id} className="post-card__link">
        <div className="post-card__summary">{summary}</div>
      </Link>
    </div>
  );
};

export default PostCard;

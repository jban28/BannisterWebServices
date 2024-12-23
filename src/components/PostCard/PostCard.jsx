import { Link } from "react-router-dom";
import "./PostCard.css";

const PostCard = ({ id, title, date, summary, category, arrTags }) => {
  const openPost = () => {

  }

  return (
    <div className="post-card">
      <Link to={id} className="post-card__link"><h1 className="post-card__title">{title}</h1></Link>
      <div className="post-card__category post-card__details">{category ?? "Uncategorized"}</div>
      <div className="post-card__date post-card__details">
        <time>
          <i className="post-card__icon fa-regular fa-calendar"></i>
          {date}
        </time>
      </div>
      
      <div className="post-card__tag-list post-card__details">
        <i className="post-card__icon fa-solid fa-tag"></i>
        {arrTags &&
          arrTags.map((tag, index) => (
            <span key={tag} className="post-card__tag">
              {tag}
              {index != arrTags.length - 1 ? ", " : ""}
            </span>
          ))}
      </div>

      <Link to={id} className="post-card__link">
        <div className="post-card__summary">{summary}</div>
      </Link>
      
    </div>
  );
};

export default PostCard;

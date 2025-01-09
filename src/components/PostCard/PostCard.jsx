import { Link } from "react-router-dom";
import PostData from "../PostData/PostData";
import styles from "./PostCard.module.css";

const PostCard = ({ id, title, date, summary, category, arrTags }) => {
  return (
    <div className={styles.card}>
      <Link to={id} className={styles.link}>
        <h1 className={styles.title}>{title}</h1>
      </Link>
      <PostData date={date} category={category} arrTags={arrTags} />

      <Link to={id} className={styles.link}>
        <div className={styles.summary}>{summary}</div>
      </Link>
    </div>
  );
};

export default PostCard;

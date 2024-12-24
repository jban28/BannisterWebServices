import "./PostData.css";

const PostData = ({ date, category, arrTags }) => {
  return (
    <div className="post-data">
      <div className="post-data__category post-data__details">
        {category ?? "Uncategorized"}
      </div>
      <div className="post-data__date post-data__details">
        <time datetime={date}>
          <i className="post-data__icon fa-regular fa-calendar"></i>
          {date}
        </time>
      </div>

      <div className="post-data__tag-list post-data__details">
        <i className="post-data__icon fa-solid fa-tag"></i>
        {arrTags &&
          arrTags.map((tag, index) => (
            <span key={tag} className="post-data__tag">
              {tag}
              {index != arrTags.length - 1 ? ", " : ""}
            </span>
          ))}
      </div>
    </div>
  );
};

export default PostData;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import TextLoader from "../../components/TextLoader/TextLoader.jsx";
import "./PostData.css";

const PostData = ({ date, category, arrTags }) => {
  return (
    <div className="post-data">
      <div className="post-data__category post-data__details">
        {category || <TextLoader />}
      </div>
      <div className="post-data__date post-data__details">
        <time dateTime={date}>
          <FontAwesomeIcon className="post-data__icon" icon={faCalendar} />
          {date || <TextLoader />}
        </time>
      </div>

      <div className="post-data__tag-list post-data__details">
        <FontAwesomeIcon className="post-data__icon" icon={faTag} />
        {(arrTags &&
          arrTags.map((tag, index) => (
            <span key={tag} className="post-data__tag">
              {tag}
              {index != arrTags.length - 1 ? ", " : ""}
            </span>
          ))) || <TextLoader />}
      </div>
    </div>
  );
};

export default PostData;

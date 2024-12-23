import { generateClient } from "aws-amplify/data";
import Navigation from "../../components/Navigation/Navigation.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import PostCard from "../../components/PostCard/PostCard.jsx";
import "./BlogHome.css";

const client = generateClient();
const summaryExample = `A summary of a blog post is a short decription of what the content is, or if that is not available then it is the first few characters of the content`;

const BlogHome = () => {
  return (
    <>
      <Navigation />
      <div className="blog-home__intro">
        <div className="blog-home__max-width">
          <h1>Welcome to the BWS Blog!</h1>
          <p>
            It is very easy to find information about web and software
            development, and answers to simple questions are rarely more than a
            quick Google search away. However, most questions are not simple,
            and require information from multiple sources to build a complete
            answer.
          </p>
        </div>
      </div>
      <div className="blog-home__post-list">
        <div className="blog-home__max-width">
          <PostCard
            id="someID"
            title="example"
            date="23 December 2024"
            summary={summaryExample}
            arrTags={["tag 1", "tag 2"]}
            category="Uncategorized"
          />
          <PostCard
            id="someOtherID"
            title="another example"
            date="23 December 2024"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogHome;

import { generateClient } from "aws-amplify/data";
import { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import PostCard from "../../components/PostCard/PostCard.jsx";
import "./BlogHome.css";

const client = generateClient();

const getPosts = async function () {
  const { data: posts, errors } = await client.models.blogPost.list();
  return posts;
};

const BlogHome = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((posts) => {
      console.log(posts);
      setPosts(posts);
    });
  }, []);
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
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              date={post.lastRevised}
              summary={post.summary}
              arrTags={post.tags}
              category={post.category}
            />
          ))}
          <PostCard
            id="someID"
            title="example"
            date="23 December 2024"
            summary="An example post summary"
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

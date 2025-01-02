import { generateClient } from "aws-amplify/data";
import { useState, useEffect } from "react";
import PostCard from "../../components/PostCard/PostCard.jsx";
import BlogFilter from "../../components/BlogFilter/BlogFilter.jsx";
import "./BlogHome.css";

const client = generateClient();

const getPosts = async function (filterObj) {
  console.log(filterObj);
  const { data: posts, errors } = await client.models.blogPost.list({
    filter: filterObj,
  });
  return posts;
};

const BlogHome = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState({
    deepDive: {
      name: "Deep Dive",
      desc: "an in depth look at a particular topic",
      checked: false,
    },
    quickLearn: {
      name: "Quick Learn",
      desc: "a quick look at a specific aspec of something",
      checked: false,
    },
  });

  useEffect(() => {
    const categoryQuery = Object.values(categories)
      .filter((category) => category.checked)
      .map(
        (category) => category.checked && { category: { eq: category.name } },
      );

    const filter = {
      or: categoryQuery,
    };

    getPosts(filter).then((posts) => {
      setPosts(posts);
    });
  }, [categories]);
  return (
    <>
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
      <div className="blog-home__filter">
        <BlogFilter
          className="blog-home__max-width"
          categories={categories}
          setCategories={setCategories}
        />
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
    </>
  );
};

export default BlogHome;

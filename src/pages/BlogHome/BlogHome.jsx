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
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState({
    deepDive: {
      name: "Deep Dive",
      desc: "Detailed considerations of complex topics, including a lot of background information that might rarely be needed in everyday use.",
      checked: false,
    },
    summary: {
      name: "Summary",
      desc: "Overview articles describing the main takeaway information about a particular topic.",
      checked: false,
    },
    quickLearn: {
      name: "Quick Learn",
      desc: "A quick look at a specific topic, usually written to help me remember something I have looked up to solve a particular problem",
      checked: false,
    },
  });

  useEffect(() => {
    setIsLoaded(false);
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
      setIsLoaded(true);
    });
  }, [categories]);
  return (
    <>
      <div className="blog-home__intro">
        <div className="blog-home__max-width">
          <h1>Welcome to the BWS Blog!</h1>
          <p className="blog-home__intro-text">
            I set this blog up intially whilst experimenting with Wordpress
            (though it is now set up with a serverless backend to reduce hosting
            costs). It still exists mainly for me to learn how to set up a
            website backend, and I don't really expect anyone to actually read
            it. However, maybe you will find something useful or interesting
            here. Or maybe you will see a mistake I have made and contact me so
            I can learn from you. The posts I write are designed to serve as my
            own reference notes, as I find that if I want to learn something
            properly then there is no substitute for writing it down in my own
            words.
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
          {isLoaded &&
            posts.length > 0 &&
            posts.map((post) => (
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
          {isLoaded && posts.length == 0 && <div>No posts found</div>}
          {!isLoaded && <div>Loading posts...</div>}
        </div>
      </div>
    </>
  );
};

export default BlogHome;

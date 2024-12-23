import { generateClient } from "aws-amplify/data";
import { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";
import "./BlogPost.css";

const client = generateClient();

const BlogPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.models.blogPost.observeQuery().subscribe({
      next: (data) => setPosts([...data.items]),
    });
  }, []);

  return (
    <>
      <Navigation />

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </>
  );
};

export default BlogPost;

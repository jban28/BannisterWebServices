import { generateClient } from "aws-amplify/data";
import { useState, useEffect } from "react";
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
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.content}</li>
      ))}
    </ul>
  )
  
};

export default BlogPost;

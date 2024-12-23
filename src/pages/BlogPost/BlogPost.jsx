import { generateClient } from "aws-amplify/data";
import { useState, useEffect } from "react";

const client = generateClient();

const BlogPost = ({ className = "", style = {} }) => {
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

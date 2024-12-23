import { generateClient, post } from "aws-amplify/data";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Markdown from "react-markdown";
import Navigation from "../../components/Navigation/Navigation.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import PostData from "../../components/PostData/PostData.jsx";
import "./BlogPost.css";

const client = generateClient();

const getPost = async function (postId) {
  return await client.models.blogPost.get( { id: postId } );
}

const BlogPost = () => {
  const [postData, setPostData] = useState({});
  
  const location = useLocation();

  useEffect(() => {
    const postId = location.pathname.split('/').pop()
    
    getPost(postId)
    .then((data) => {
      console.log(data)
      setPostData(data)
    })
  }, [location])

  return (
    <>
      <Navigation />
      <article className="blog-post__post">
        <h1 className="blog-post__title">{postData.title}</h1>
        <PostData date={postData.date} category={postData.category} arrTags={postData.tags} />
        <Markdown className="blog-post__content">{postData.content}</Markdown>
      </article>
      <Footer />
    </>
  );
};

export default BlogPost;

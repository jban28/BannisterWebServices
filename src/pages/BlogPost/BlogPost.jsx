import { generateClient, post } from "aws-amplify/data";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import Navigation from "../../components/Navigation/Navigation.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import PostData from "../../components/PostData/PostData.jsx";
import "./BlogPost.css";

const client = generateClient();

const getPost = async function (postId) {
  const {data: postData, errors} = await client.models.blogPost.get({ id: postId });
  if (!postData) {
    throw "No data retrieved"
  }
  return postData
};

const BlogPost = () => {
  const [postData, setPostData] = useState({});
  const [noPost, setNoPost] = useState(false);

  const routeParams = useParams();

  useEffect(() => {
    const postId = routeParams.postId;
    getPost(postId)
    .then((postData) => {
      setPostData(postData);
      setNoPost(false);
    })
    .catch((err) => {
      setNoPost(true);
    });
  }, [location]);

  return (
    <>
      <Navigation />
      {!noPost ? 
      <article className="blog-post__post">
        <h1 className="blog-post__title">{postData.title}</h1>
        <PostData
          date={postData.lastRevised}
          category={postData.category}
          arrTags={postData.tags}
        />
        <Markdown className="blog-post__content">{postData.content}</Markdown>
      </article>
      : <div className="blog-post__error">Post not found</div>}
      <Footer />
      
    </>
  );
};

export default BlogPost;

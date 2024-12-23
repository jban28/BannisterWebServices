import { generateClient } from "aws-amplify/data";
import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import Navigation from "../../components/Navigation/Navigation.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import PostData from "../../components/PostData/PostData.jsx";
import "./BlogPost.css";

const client = generateClient();

const BlogPost = () => {
  const [date, category, arrTags] = ["date", "category", ["tag 1", "tag 2"]];
  const content = "# Heading";

  return (
    <>
      <Navigation />
      <article className="blog-post__post">
        <h1 className="blog-post__title">Title</h1>
        <PostData date={date} category={category} arrTags={arrTags} />
        <Markdown className="blog-post__content">{content}</Markdown>
      </article>
      <Footer />
    </>
  );
};

export default BlogPost;

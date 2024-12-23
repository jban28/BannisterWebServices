import { generateClient } from "aws-amplify/data";
import Navigation from "../../components/Navigation/Navigation.jsx";
import "./BlogHome.css";

const client = generateClient();

const BlogHome = () => {
  return (
    <>
        <Navigation  />
    </>
  )
};

export default BlogHome;
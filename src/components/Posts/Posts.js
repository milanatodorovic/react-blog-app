import Post from "./Post";
import "./Main.css";
import LandingPage from "../LandingPage/LandingPage";
import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <>
      <div>
        <LandingPage />
        <h1 className="posts-h1">
          Find 100+ best
          <br />
          posts right here!
        </h1>

        {posts.map((data) => (
          <Post
            key={data.id}
            title={data.title}
            data={data.body}
            id={data.id}
            date={data.date}
            reactions={data.reactions}
            author={data.author}
            email={data.email}
          />
        ))}
      </div>
    </>
  );
};

export default Posts;

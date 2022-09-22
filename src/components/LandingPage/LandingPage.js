import react from "react";
import "../LandingPage/landingPage.css";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <>
      <div className="wrapper">
        {/*  <nav>
          <Link to="/posts" className="a">
            Home
          </Link>
          <Link to="/newpost" className="a">
            New Post
          </Link>
      </nav>*/}
        <div className="textLP">
          <h1>
            Share your <br />
            <span>knowledge.</span>
          </h1>
          <p>The best IT blog with 10 000+ worldwide users.</p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

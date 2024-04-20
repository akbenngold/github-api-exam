import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      {" "}
      <h2>
        Wecome. This website is simply to display list of Ojima's github repos.
        <br />
        Click the button below to explore
      </h2>
      <Link to="/repos" className="button">
        Explore
      </Link>
    </div>
  );
}

export default Home;

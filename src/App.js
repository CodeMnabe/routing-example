import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import Photos from "./components/Photos";
// import Posts from "./components/Posts";
import Spinner from "./components/Spinner";
import slowLoad from "./slowLoad";
import loadable, { lazy } from "@loadable/component";
const Photos = lazy(() => slowLoad(import("./components/Photos"), 1600));
const Posts = loadable(() => slowLoad(import("./components/Posts"), 800));

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <Link to="/">
            <div className="btn">Home</div>
          </Link>
          <Link to="/photos">
            <div className="btn">Photos</div>
          </Link>
          <Link to="/posts">
            <div className="btn">Posts</div>
          </Link>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <h1>This is Home!</h1>
            </Route>
            <Route path="/photos">
              <Suspense fallback={<Spinner />}>
                <Photos />
              </Suspense>
            </Route>
            <Route path="/posts">
              <Posts />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

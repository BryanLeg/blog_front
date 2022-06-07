import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./MainPage";
import SinglePost from "./SinglePost";
import CreatePost from "./CreatePost";

function App() {
  return (
    <Router>
      <nav>
        <div className="navlogo">Blog</div>
        <Link className="navlinks" to="/">
          Main Page
        </Link>
        <Link className="navlinks" to="/create-post">
          Create post
        </Link>
      </nav>
      <Routes>
        <Route index element={<MainPage />}></Route>
        <Route path="/create-post" element={<CreatePost />}></Route>
        <Route path="/post/:id" element={<SinglePost />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

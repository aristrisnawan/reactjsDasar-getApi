import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <div className="app">
      <div className="brand">My Webiste</div>
      <nav className="nav">
        <Link to="/" className="lnk">Home</Link>
        <Link to="profile" className="lnk">Profile</Link>
        <Link to="blog" className="lnk">Blog</Link>
        <Link to="contact" className="lnk">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetail />} />
      </Routes>
    </div>
  );
}

export default App;

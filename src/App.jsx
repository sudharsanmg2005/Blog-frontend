import React, { useState } from "react";
import BlogList from "./components/BlogList";
import CreateBlog from "./components/CreateBlog";
import NewRegister from "./components/NewRegister";
import Header from "./components/Header";
import Login from "./components/Login";
import "./App.css";

const App = () => {
  const [view, setView] = useState("list"); 
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [blogs, setBlogs] = useState([]);

  return (
    <>
      <header
        style={{
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 100,
        }}
      >
        <Header />
      </header>

      <div className="app" style={{ marginTop: "120px" }}>
        {!isAuthenticated ? (
          <div className="login-container">
            <Login setIsAuthenticated={setIsAuthenticated} />
          </div>
        ) : (
          <>
            <header className="app-header">
              <h1>My Blog Website</h1>
              <nav className="nav-bar">
                <button
                  className={`nav-button ${view === "list" ? "active" : ""}`}
                  onClick={() => setView("list")}
                >
                  View Blogs
                </button>
                <button
                  className={`nav-button ${view === "create" ? "active" : ""}`}
                  onClick={() => setView("create")}
                >
                  Create Blog
                </button>
              </nav>
            </header>

            <main className="app-main">
              {view === "list" ? (
                <BlogList blogs={blogs} />
              ) : view === "create" ? (
                <CreateBlog blogs={blogs} setBlogs={setBlogs} setView={setView} />
              ) : (
                <NewRegister />
              )}
            </main>
          </>
        )}
      </div>
    </>
  );
};

export default App;

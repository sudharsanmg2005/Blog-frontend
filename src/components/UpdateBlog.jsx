import React, { useState, useEffect } from "react";
import "./CreateBlog.css";

const UpdateBlog = ({ blogs, setBlogs, setView, currentBlogId }) => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");


  useEffect(() => {
    const blogToEdit = blogs.find((blog) => blog.id === currentBlogId);
    if (blogToEdit) {
      setTitle(blogToEdit.title);
      setSummary(blogToEdit.author);
      setContent(blogToEdit.content);
    }
  }, [currentBlogId, blogs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBlogs = blogs.map((blog) =>
      blog.id === currentBlogId
        ? { ...blog, title, content, author: summary }
        : blog
    );

    setBlogs(updatedBlogs);
    setTitle("");
    setSummary("");
    setContent("");
    setView("list");
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Update Post</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="form-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            id="content"
            className="form-textarea"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="summary" className="form-label">
            Author
          </label>
          <textarea
            id="summary"
            className="form-textarea"
            rows="2"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <button type="submit" className="form-button">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBlog;

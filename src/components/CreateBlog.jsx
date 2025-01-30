import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CreateBlog.css";

const CreateBlog = ({ blogs, setBlogs, setView }) => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const storedBlogs = localStorage.getItem("blogs");
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs));
    }
  }, [setBlogs]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBlog = {
      id: Date.now().toString(),
      title,
      content,
      author: summary,
    };

    try {
    
      const response = await axios.post("http://localhost:3001/api/blogs", newBlog);

      if (response.status === 201) {
        const updatedBlogs = [...blogs, response.data];
        setBlogs(updatedBlogs);
        localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

        setTitle("");
        setSummary("");
        setContent("");
        setView("list");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("Failed to create blog. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Add New Post</h1>
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
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;

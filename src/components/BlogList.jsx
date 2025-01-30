import React, { useState } from "react";
import "./BlogList.css";

const BlogList = ({ blogs }) => {
  const [expandedBlogId, setExpandedBlogId] = useState(null);

  const handleToggle = (id) => {
    setExpandedBlogId(expandedBlogId === id ? null : id);
  };

  return (
    <div className="card">
      <h2>Blog Posts</h2>
      {blogs.length === 0 ? (
        <p className="no-blogs-message">No blogs available. Create one!</p>
      ) : (
        <div className="blogs-wrapper">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <h3 className="blog-title" onClick={() => handleToggle(blog.id)}>
                {blog.title}
              </h3>
              {expandedBlogId === blog.id && (
                <div>
                  <p className="blog-content">{blog.content}</p>
                  <small className="blog-author">By {blog.author}</small>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;

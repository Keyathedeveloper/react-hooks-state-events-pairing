import React, { useState } from "react";

function CommentForm({ onSubmit }) {
  const [newComment, setNewComment] = useState("");

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newComment);
    setNewComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Add a comment..."
        value={newComment}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;

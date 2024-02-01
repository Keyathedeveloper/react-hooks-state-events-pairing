import React from "react";
import Comment from "./Comment";

function CommentsList({ comments }) {
  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <Comment key={comment.id} user={comment.user} comment={comment.comment} />
      ))}
    </div>
  );
}

export default CommentsList;

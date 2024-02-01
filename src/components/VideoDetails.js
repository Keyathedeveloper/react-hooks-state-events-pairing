import React from "react";

function VideoDetails({ title, views, upvotes, downvotes, onUpvote, onDownvote }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{`Views: ${views} | Upvotes: ${upvotes} | Downvotes: ${downvotes}`}</p>
      <button onClick={onUpvote}>👍</button>
      <button onClick={onDownvote}>👎</button>
    </div>
  );
}

export default VideoDetails;

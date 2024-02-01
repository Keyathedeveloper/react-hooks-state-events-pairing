import React, {useState} from "react";
import video from "../data/video.js";
import VideoPlayer from "./VideoPlayer.js";
import VideoDetails from "./VideoDetails.js";
import CommentsList from "./CommentsList.js";


function App() {
  // console.log("Here's your data:", video);
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const [showComments, setShowComments] = useState(true);

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  }

  const handleDownvote = () => {
    setDownvotes(downvotes + 1);
  }

  const toggleComments = () => {
    setShowComments(!showComments);
  }

  return (
    <div className="App">
      <VideoPlayer embedUrl={video.embedUrl} />
      <VideoDetails
        title={video.title}
        views={video.views}
        upvotes={upvotes}
        downvotes={downvotes}
        onUpvote={handleUpvote}
        onDownvote={handleDownvote}
      />
      {showComments && (
        <CommentsList comments={video.comments} />
      )}
      <button onClick={toggleComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
    </div>
  );
}

export default App;

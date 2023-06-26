const Comment = ({ comment }) => {
  return (
    <div className="comment-item">
      <p>{comment.text}</p>
    </div>
  );
};

export default Comment;
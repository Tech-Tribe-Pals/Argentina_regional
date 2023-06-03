const Comment = ({ comment }) => {
  console.log(comment);
  return (
    <div className="comment-item">
      <p>{comment.text}</p>
    </div>
  );
};

export default Comment;
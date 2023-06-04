import { useEffect, useState } from "react";
import axios from "axios";
import Comment from "./Comment.jsx";

const Card = ({ post }) => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(post.comments || []);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();

    if (commentText.trim() !== "") {
      try {
        const response = await axios.post(`${import.meta.env.VITE_APP_URL}/api/comments`, {
          postId: post._id,
          text: commentText,
        });
        const newComment = response.data;

        setComments((prevComments) => [...prevComments, newComment]);
        setCommentText("");
      } catch (error) {
        console.error("Error al agregar el comentario", error);
      }
    }
  };

  useEffect(() => {
    setComments(post.comments)
  }, [post])

  return (
    <section>
      <div
        className="card-body"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
      <div className="comment">
        <h3>Comentarios</h3>
        {comments.length !== 0 ? (
          comments.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))
        ) : (
          "Sin comentarios"
        )}
        <form onSubmit={handleCommentSubmit}>
          <textarea
            name="commentText"
            cols="30"
            rows="3"
            value={commentText}
            onChange={(event) => setCommentText(event.target.value)}
          />
          <button type="submit">Comentar</button>
        </form>
      </div>
    </section>
  );
};

export default Card;

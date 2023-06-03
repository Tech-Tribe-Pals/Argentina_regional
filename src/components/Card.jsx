import { useState, useEffect } from "react";
import axios from "axios";
import Comment from "./Comment.jsx";

const Card = ({ post }) => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    if (commentText.trim() !== "") {
      axios
        .post("http://localhost:8080/api/comments", {
          postId: post._id,
          text: commentText,
        })
        .then((response) => {
          setComments([...comments, response.data]);
          setCommentText("");
        })
        .catch((error) => {
          console.error("Error al agregar el comentario", error);
        });
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/posts/${post._id}/comments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los comentarios", error);
      });
  }, [post._id]);

  return (
    <section>
      <div
        className="card-body"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
      <div className="comment">
        <h3>Comentarios</h3>
        {comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
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

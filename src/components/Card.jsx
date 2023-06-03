import { useState, useEffect } from "react";
import axios from "axios";
import Comment from "./Comment.jsx";
import { io } from "socket.io-client";

const Card = ({ post }) => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const socket = io(import.meta.env.VITE_APP_URL, {
    transports: ["websocket", "polling"],
  });

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    if (commentText.trim() !== "") {
      axios
        .post(`${import.meta.env.VITE_APP_URL}/api/comments`, {
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
      .get(`${import.meta.env.VITE_APP_URL}/api/posts/${post._id}/comments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los comentarios", error);
      });

    socket.on("newComment", (comment) => {
      setComments([...comments, comment]);
    });

    return () => {
      socket.disconnect(); // Desconectar la conexión de WebSocket cuando el componente se desmonte
    };
  }, [post._id, comments, socket]);

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
          'Cargando...'
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
import { useEffect, useState } from "react";
import axios from "axios";
import Card from '../components/Card.jsx';

const Forum = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}/api/posts`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las publicaciones", error);
      });
  }, []);

  return (
    <div>
      <h1>Foro de Publicaciones</h1>
      {posts.length !== 0 ? (
        posts.map((post) => (
          <Card key={post._id} post={post} />
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Forum;

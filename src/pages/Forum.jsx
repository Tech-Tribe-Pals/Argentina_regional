import { useEffect, useState } from "react";
import axios from "axios";
import Card from '../components/Card.jsx';

const Forum = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_URL}/api/posts`);
        setPosts(response.data);
      } catch (error) {
        console.error("Error al obtener las publicaciones", error);
      }
    };

    fetchPosts();

    const interval = setInterval(fetchPosts, 5000); // Realizar la solicitud cada 5 segundos

    return () => {
      clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    };
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

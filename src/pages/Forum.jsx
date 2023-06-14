import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card.jsx";
import CardForo from "../components/ComponentesRegiones/cardForo";
import styled from "styled-components";

const ForoStyled = styled.main`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-bottom:20rem;
  aside {
    div {
      position: fixed;
      width: 100%;
      height: 5%;
      background-color: #4e6247;
      top: 11%;
      z-index: 11;
    }

    display: flex;
    flex-direction: column;
    border-left: 4px solid black;
    width: 15%;
    background-color: #4e6247;
  }

  section {
    nav {
      background-color: #4e6247;
      border-bottom-right-radius: 0.7rem;
      border-top-right-radius: 0.7rem;
      width: 90%;
      height: 85px;
      margin-bottom: 2rem;
      z-index: 1;
      border-bottom: 8px solid #374433;
    }

    margin-top: 3rem;
    width: 80%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const Forum = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}/api/posts`
        );
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
    <ForoStyled>
      <aside>
        <div></div>
      </aside>
      <section>
        <nav>ffede</nav>
        <CardForo />
        <CardForo />
        <CardForo />
        {/* <h1>Foro de Publicaciones</h1>
      {posts.length !== 0 ? (
        posts.map((post) => (
          <Card key={post._id} post={post} />
        ))
      ) : (
        <p>Cargando...</p>
      )} */}
      </section>
    </ForoStyled>
  );
};

export default Forum;

import { useEffect, useState } from "react";
import axios from "axios";
import { CardView, Card } from "../components/Cards";
import styled from "styled-components";
import NavBlog from "../components/NavBlog";

const ForoStyled = styled.main`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-bottom:25rem;
  aside {
    display: flex;
    flex-direction: column;
    border-left: 4px solid black;
    width: 200px;
    background-color: #4e6247;
    align-items: center;
    h3 {
      margin: 20px 0;
      color: #FFF;
    }
  }

  section {
      display:flex;
      flex-direction:column;
      align-items:center;

    h1 {align-self:flex-start; margin-left:2rem}

    nav {
      align-self:flex-start;
      background-color: #4e6247;
      border-bottom-right-radius: 0.7rem;
      border-top-right-radius: 0.7rem;
      width: 90%;
      height: 85px;
      margin-bottom: 2rem;
      border-bottom: 8px solid #374433;
    }
    margin-top: 3rem;
    width: 80%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  @media (width < 990px) {
    aside {
      display: none;
    }
    section {
      width: 100%;
      nav {
        height: auto;
        width: auto;
        padding: 15px;
        position: fixed;
        top: 100px;
        flex-direction: column;
      }
    }
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
  }, []);

  return (
    <ForoStyled>
      <aside>
        <h3>Los más vistos</h3>
        {posts.length !== 0 ? (
          posts.map((post) => <CardView key={post._id} post={post} />)
        ) : (
          <p>Cargando...</p>
        )}
      </aside>
      <section>
        <NavBlog />
        <h2>Publicaciones</h2>
        {posts.length !== 0 ? (
          posts.map((post) => <Card key={post._id} post={post} />)
        ) : (
          <p>Cargando...</p>
        )}
      </section>
    </ForoStyled>
  );
};

export default Forum;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const BlogStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #45673e;
  padding-bottom: 3rem;
  section {
    margin-top: 1rem;
    border-radius: 0.5rem;
    padding: 2rem 4rem 5rem;
    border-left: solid #d9d9d9 11px;
    border-bottom: solid #d9d9d9 4px;
    border-right: solid #d9d9d9 2px;
    border-top: solid #d9d9d9 2px;

    .Card {
      height: 40vh;
      object-fit: cover;
      border-radius: 0.3rem;
      align-self: center;
      width: 100%;
    }
    width: 95%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  h2 {
    margin-top: 3rem;
    margin-bottom: 2rem;
    font-size: 2.3rem;
  }

  .card-body {
    width: 100%;
    img {
      margin-top: 2rem;
      margin-bottom: 2rem;
      object-fit: cover;
    }
  }
`;

const Blog = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}/api/posts/${id}`
        );
        setPost(response.data);
      } catch (error) {
        console.error("Error al obtener el post", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Cargando...</div>;
  }

  return (
    <BlogStyle>
      <section>
        <img className="Card" src={post.thumbnail} />
        <h2>{post.title}</h2>
        <div
          className="card-body"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </section>
    </BlogStyle>
  );
};

export default Blog;

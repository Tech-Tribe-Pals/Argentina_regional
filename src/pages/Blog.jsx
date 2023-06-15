import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const BlogStyle = styled.main`
  img {
    max-width: 500px;
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
      <img src={post.thumbnail} />
      <h2>{post.title}</h2>
      <div
        className="card-body"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </BlogStyle>
  );
};

export default Blog;

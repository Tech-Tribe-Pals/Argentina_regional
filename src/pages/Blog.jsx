import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import styled from "styled-components";
import Modal from "../components/Modal";
import postsAPI from "../api/postsAPI";

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
    .adminPanel {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-bottom: 20px;
      align-items: center;
      .btns {
        display: flex;
        gap: 10px;
        a:hover {
          background-color: #4f4;
        }
        button:hover {
          background-color: red;
          cursor: pointer;
        }
        a,
        button {
          border: solid 2px #000;
          border-radius: 5px;
          padding: 5px;
          width: 40px;
          height: 40px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: transparent;
          img {
            height: 20px;
          }
          .pencil {
            height: 30px;
          }
        }
      }
    }
    .breadcrumbs {
      margin-bottom: 20px;
    }
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
  const [modal, setModal] = useState(false);
  const [isView, setView] = useState(false)

  const fetchPost = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_URL}/api/posts/${id}`
      );
      setPost(response.data);
      checkView(response.data)
    } catch (error) {
      console.error("Error al obtener el post", error);
    }
  };

  const checkView = async (thisPost) => {
    if (isView === false) {
      setView(true)
      await postsAPI.editPost(id, { ...thisPost, views: thisPost.views + 1 })
    }
  } 

  useEffect(() => {
    fetchPost();
  }, [id]);

  const deletePost = async () => {
    const post = await postsAPI.deletePost(id)

    if (post) {
      toast.success('La publicación fue borrada con exito.')
    } else {
      toast.error('La publicación no pudo ser borrada.')
    }
  };

  if (!post) {
    return <div>Cargando...</div>;
  }

  return (
    <BlogStyle>
      <section>
        <div className="adminPanel">
          <p>Acciones de administrador</p>
          <div className="btns">
            <Link to={`/post/${id}`}>
              <img className="pencil" src="/Iconos/pencil.svg" />
            </Link>
            <button onClick={() => setModal(!modal)}>
              <img src="/Iconos/bin.svg" />
            </button>
          </div>
        </div>
        <nav className="breadcrumbs">
          <Link to={"/blog"}>Publicaciones</Link> / <span>{post.title}</span>
        </nav>
        <img className="Card" src={post.thumbnail} />
        <h2>{post.title}</h2>
        <div
          className="card-body"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </section>
      <Modal isOpen={modal}>
        ¿Estas seguro que quieres eliminar esta publicación?
        <div className="options">
        <button onClick={deletePost}>Eliminar</button>
        <button onClick={() => setModal(!modal)}>Cancelar</button>
        </div>
      </Modal>
      <ToastContainer autoClose={1500} />
    </BlogStyle>
  );
};

export default Blog;

import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ReactQuill from "react-quill";
import styled from "styled-components";

import "react-toastify/dist/ReactToastify.css";
import "react-quill/dist/quill.snow.css";
import postsAPI from "../api/postsAPI";
import { useParams, useNavigate } from "react-router-dom";
import imgAPI from "../api/imgAPI";
import { UserContext } from "../context/UserContext";

const Post = () => {
  const [content, setContent] = useState("");
  const [titleContent, setTitleContent] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [hover, setHover] = useState(false);

  const { id } = useParams();
  const { isUser } = useContext(UserContext)
  const navigate = useNavigate()

  const checkPost = async () => {
    const post = await postsAPI.findPost(id);

    if (post) {
      setContent(post.content);
      setTitleContent(post.title);
      setCoverImage(post.thumbnail);
    } else {
      toast.error('No se ha encontrado el post al que quieres acceder')
    }
  };

  useEffect(() => {
    if (id) {
      checkPost();
    }
  }, []);

  const handleEditorChange = (value) => {
    setContent(value);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setHover(true);
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;

    if (files.length > 0) {
      const formData = new FormData();
      formData.append("image", files[0]);

      try {
        const image = await imgAPI.uploadImg(formData);
        setCoverImage(image);
      } catch (error) {
        console.error("Error al cargar la imagen a Cloudinary", error);
        toast.error("Error al cargar la imagen");
      }
    }
  };

  const deleteImage = async () => {
    try {
      await imgAPI.deleteImg({ imageUrl: coverImage });
      setCoverImage(null);
      setHover(false);
    } catch (err) {
      toast.error("Error al borrar imagen");
    }
  };

  const handleSave = async () => {
    try {
      const postData = {
        title: titleContent,
        content: content,
        thumbnail: coverImage.imageUrl ? coverImage.imageUrl : coverImage,
      };

      if (id) {
        await postsAPI.editPost(id, postData)
        toast.success("Publicación editada con exito")
        navigate(`/blog/${id}`)
      } else {
        const post = await postsAPI.createPost(postData);
        toast.success("Publicación guardada con éxito");
        navigate(`/blog/${post.id}`)
      }

      setContent("");
      setTitleContent("");
      setCoverImage(null);
    } catch (error) {
      console.error("Error al guardar la publicación", error);
      toast.error("Error al guardar la publicación");
    }
  };

  if (!isUser) {
    return (
      <PostStyle>
      <p>No tienes acceso a esta parte</p>
      </PostStyle>
    )
  }

  return (
    <PostStyle>
      <h1>Editor de publicaciones</h1>
      <h3>Título de la publicación:</h3>
      <input
        type="text"
        onChange={(event) => setTitleContent(event.target.value)}
        value={titleContent}
      />
      <ReactQuill value={content} onChange={handleEditorChange} />
      <Dropzone
        className={coverImage !== null ? "withImg" : hover ? "hover" : ""}
        onDragOver={handleDragOver}
        onDragLeave={() => setHover(false)}
        onDrop={handleDrop}
      >
        {coverImage !== null ? (
          <>
            <button onClick={deleteImage}>
              <img src="/Iconos/bin.svg" />
            </button>
            <img src={coverImage.imageUrl ? coverImage.imageUrl : coverImage} />
          </>
        ) : (
          <p>
            {hover
              ? "Ahora suelte la imagen"
              : "Arrastre la imagen de portada aca"}
          </p>
        )}
      </Dropzone>
      <button className="Boton" onClick={handleSave}>
        Listo <img src="/Iconos/checkBtn.svg" alt="btn" />
      </button>
      <ToastContainer autoClose={1500} />
    </PostStyle>
  );
};

export default Post;

const PostStyle = styled.main`
  width: 90%;
  margin: 0 auto;
  .hover {
    border: dotted 4px #49f;
    overflow: hidden;
  }
  .withImg {
    position: relative;
    overflow: hidden;
    border: solid 2px transparent;
    img {
      width: 100%;
      object-fit: cover;
    }
    button {
      top: 10px;
      right: 10px;
      position: absolute;
      background-color: white;
      border: none;
      border-radius: 5px;
      padding: 5px;
      :hover {background-color: #DD3E3E;
        img {filter:invert(100%);}
        cursor: pointer;
      }
      img {
        width: 20px;
      }
    }
  }
  h1 {
    margin: 20px 0;
  }
  h3 {
    margin-bottom: 20px;
  }
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 20px;
  }
  .Boton {
    z-index: 2;
    color: whitesmoke;
    font-weight: bold;
    font-size: medium;
    background-color: #658564;
    border-radius: 17px;
    border-bottom: 9px solid #50684f;
    border-top: none;
    border-left: none;
    border-right: none;
    display: flex;
    width: 100px;
    height: 45px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: fixed;
    right: 1%;
    bottom: 1%;
    transition: all 0.1s ease-in-out;
    img {
      margin-left: 2px;
      height: 50%;
      width: 25%;
      filter: invert(100%);
    }

    :active {
      border-bottom: 0px;
      transform: translateY(2%) scale(0.9);
      transition: all 0.1s ease-in-out;
    }
  }
`;

const Dropzone = styled.div`
  width: 100%;
  height: 150px;
  border: dotted 2px #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

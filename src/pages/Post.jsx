import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Dropzone from "react-dropzone";
import ReactQuill from "react-quill";
import styled from "styled-components";

import "react-toastify/dist/ReactToastify.css";
import "react-quill/dist/quill.snow.css";
import postsAPI from "../api/postsAPI";

const Post = () => {
  const [content, setContent] = useState("");
  const [titleContent, setTitleContent] = useState("");
  const [coverImage, setCoverImage] = useState(null);

  const handleEditorChange = (value) => {
    setContent(value);
  };

  const handleImageUpload = async (files) => {
    const formData = new FormData();
    formData.append("image", files[0]);

    try {
      const image = await postsAPI.uploadImg(formData)
      setCoverImage(image);
    } catch (error) {
      console.error("Error al cargar la imagen a Cloudinary", error);
      toast.error("Error al cargar la imagen");
    }
  };

  const handleSave = async () => {
    try {
      const postData = {
        title: titleContent,
        content: content,
        thumbnail: coverImage.imageUrl,
      };

      await postsAPI.createPost(postData)
      toast.success("Publicación guardada con éxito");

      setContent("");
      setTitleContent("");
      setCoverImage(null);
    } catch (error) {
      console.error("Error al guardar la publicación", error);
      toast.error("Error al guardar la publicación");
    }
  };

  return (
    <PostStyle>
      <h1>Editor de publicaciones</h1>
      <h3>Título de la publicación:</h3>
      <input
        type="text"
        onChange={(event) => setTitleContent(event.target.value)}
      />
      <ReactQuill value={content} onChange={handleEditorChange} />
      <Dropzone onDrop={handleImageUpload}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {coverImage === null ? (
              <p>
                Arrastra y suelta una imagen aquí o haz clic para seleccionar
                una
              </p>
            ) : (
              <img src={coverImage.imageUrl} />
            )}
          </div>
        )}
      </Dropzone>
      <button className="Boton" onClick={handleSave}>
        Listo <img src="./checkBtn.svg" alt="btn" />
      </button>
      <ToastContainer autoClose={1500} />
    </PostStyle>
  );
};

export default Post;

const PostStyle = styled.main`
  input {
    width: 100%;
    padding: 8px;
    margin: 10px 0;
  }
  height: auto;
  position: relative;
  .Boton {
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

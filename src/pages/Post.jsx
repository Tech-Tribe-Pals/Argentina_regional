import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Quill from 'quill';
import ImageUploader from 'quill-image-uploader';

import styled from 'styled-components';


const PostStyle = styled.main `


  height: auto;
  position:relative;
  .Boton {color: whitesmoke;
  font-weight:bold;
  font-size:medium;
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
  cursor:pointer;
  position:fixed;
  right:1%;
  bottom:1%;
  transition:all 0.1s ease-in-out;
  img {
    margin-left: 2px;
    height: 50%;
    width: 25%;
    filter:invert(100%);
  }

  :active {
    border-bottom: 0px;
    transform: translateY(2%) scale(0.9);
    transition:all 0.1s ease-in-out;
  }}
  

`






// Componente para el editor de publicaciones
const Post = () => {
  const [editorContent, setEditorContent] = useState('');
  const reactQuillRef = useRef(null);
  const editorContainerRef = useRef(null);

  useEffect(() => {
    if (reactQuillRef.current && editorContainerRef.current) {
      const quill = reactQuillRef.current.getEditor();
      const editorContainer = editorContainerRef.current;

      quill.on('editor-change', (eventName, ...args) => {
        if (eventName === 'text-change') {
          const [delta] = args;
          quill.clipboard.convert(delta);
          const html = editorContainer.innerHTML;
          setEditorContent(html);
        }
      });
    }
  }, []);





  const handleSave = () => {
    const editorContent = reactQuillRef.current.getEditor().root.innerHTML;

    axios
      .post(`${import.meta.env.VITE_APP_URL}/api/posts`, { content: editorContent })
      .then((response) => {
        console.log(response.data);
        toast.success('Publicación guardada con éxito');
      })
      .catch((error) => {
        console.error('Error al guardar la publicación', error);
        toast.error('Error al guardar la publicación');
      });

      setEditorContent('');
  };

  // Configurar el módulo ImageUploader
  Quill.register('modules/imageUploader', ImageUploader);

  return (
    <PostStyle>
      <div>
        <h1>Editor de publicaciones</h1>
        <ReactQuill
          ref={reactQuillRef}
          value={editorContent}
          onChange={setEditorContent}
          modules={{
            toolbar: [
              [{ header: [1, 2, 3, false] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
              ],
              ['link'],
              [{ script: 'sub' }, { script: 'super' }],
              [{ color: [] }, { background: [] }],
              ['image'],
              ['clean'],
            ],
            clipboard: {
              matchVisual: false,
            },
            imageUploader: {
              upload: (file) => {
                const formData = new FormData();
                formData.append('image', file);

                return axios
                  .post(`${import.meta.env.VITE_APP_URL}/api/posts/upload`, formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                    },
                  })
                  .then((response) => {
                    const imageUrl = response.data.imageUrl;
                    return imageUrl;
                  })
                  .catch((error) => {
                    console.error('Error al subir la imagen', error);
                    throw error;
                  });
              },
            },
          }}
          formats={[
            'header',
            'bold',
            'italic',
            'underline',
            'strike',
            'blockquote',
            'list',
            'bullet',
            'indent',
            'script',
            'color',
            'background',
            'link',
            'image',
          ]}
          placeholder="Escribe tu publicación aquí..."
        />
      
        <button className='Boton' onClick={handleSave}>Listo <img src="./CheckBtn.svg" alt="" srcset="" /></button>
    
      </div>
      <div ref={editorContainerRef} />
      <section dangerouslySetInnerHTML={{ __html: editorContent }}></section>
      <ToastContainer autoClose={1500} />
    </PostStyle>
  );
};

export default Post;
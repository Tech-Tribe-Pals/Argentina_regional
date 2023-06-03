import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Quill from 'quill';
import ImageUploader from 'quill-image-uploader';

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
          const content = quill.clipboard.convert(delta);
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
  
  

  const imageHandler = () => {
    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();

      formData.append('image', file);

      try {
        const response = await axios.post(`${import.meta.env.VITE_APP_URL}/api/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const imageUrl = response.data.imageUrl;

        // Insertar la imagen en el editor
        const quill = reactQuillRef.current.getEditor();
        const range = quill.getSelection();
        quill.insertEmbed(range.index, 'image', imageUrl);
      } catch (error) {
        console.error('Error al subir la imagen', error);
      }
    };
  };

  // Configurar el módulo ImageUploader
  Quill.register('modules/imageUploader', ImageUploader);

  return (
    <main>
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
                  .post(`${import.meta.env.URL}/api/upload`, formData, {
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
        <button onClick={handleSave}>Guardar</button>
      </div>
      <div ref={editorContainerRef} />
      <section dangerouslySetInnerHTML={{ __html: editorContent }}></section>
      <ToastContainer autoClose={1500} />
    </main>
  );
};

export default Post;

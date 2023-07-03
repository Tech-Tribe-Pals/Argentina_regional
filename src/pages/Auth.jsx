import { useContext, useState } from "react";
import authAPI from "../api/authAPI";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import { UserContext } from "../context/UserContext";

const AuthStyle = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
  input {
    margin: 10px 0;
    padding: 5px;
    border-radius: 5px;
    border: solid 1px #000;
  }
  button {
    margin-top: 5px;
    padding: 8px;
    border: none;
    border-radius: 5px;
  }
`;

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");

  const { isUser, setUser } = useContext(UserContext);

  const handleSubmit = async () => {
    const data = {
      username: username,
      password: password,
    };

    

    const user = await authAPI.login(data);
    if (user.token) {
      toast.success(user.message);
      localStorage.setItem("token", user.token);
      setUser(true);
    } else if (username === '' || password === '') {
      toast.error('Usuario o contraseña vacíos')
    } else {
      toast.error(user.error);
    }
  };

  const handleLogout = async () => {
    setUser(false)
    localStorage.removeItem("token");
    toast.success("Sesión cerrada con exito");
  }

  return (
    <AuthStyle>
      {isUser ? (
        <section>
        <h3>Bienvenido Jorge!</h3>
        <button onClick={handleLogout}>Cerrar Sesión</button>
        </section>
      ) : (
        <>
          <div className="formControl">
            <p>Nombre de usuario:</p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="formControl">
            <p>Contraseña:</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <button onClick={handleSubmit}>Iniciar Sesión</button>
        </>
      )}
      <ToastContainer autoClose={1500} />
    </AuthStyle>
  );
};

export default Auth;

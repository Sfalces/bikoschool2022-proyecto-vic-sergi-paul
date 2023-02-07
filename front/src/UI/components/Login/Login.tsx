import "./Login.css";
import { useState, useContext } from "react";
import { apiUserRepository } from "../../../core/infrastructure/apiUserRepository";
import { UserContext } from "../../../core/infrastructure/userContext";
import { User } from "../../../core/domain/user";
import { Logout } from "../Logout/Logout";

export const Logueate = () => {
  const [login, setlogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);

  const toggleLogin = () => {
    setlogin(!login);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = await apiUserRepository.login(username, password);
    if (token === undefined) {
      alert("No esta bien las creedenciales");
      return;
    }

    const newUser: User = { username: username, token: token};

    setUser(newUser);
    setPassword("");
    setUsername("");
    toggleLogin();
  };
  if (user !== undefined) {
    return <Logout/>;
  }
  return (
    <div className="login_container">
      <div className="login">
        <div className="icono" role="icono">
          <svg
            className="cara"
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.20002 25.3L0.400024 24.5C0.900024 23.3 2.50002 22.6 4.20002 21.8C5.90002 21 8.00002 20.1 8.00002 19V17.5C7.40002 17 6.40002 15.9 6.20002 14.3C5.70002 13.8 4.90002 12.9 4.90002 11.7C4.90002 11 5.20002 10.4 5.40002 10C5.20002 9.2 5.00002 7.7 5.00002 6.5C5.00002 2.6 7.70002 0 12 0C13.2 0 14.7 0.3 15.5 1.2C17.4 1.6 19 3.8 19 6.5C19 8.2 18.7 9.6 18.5 10.3C18.7 10.6 18.9 11.1 18.9 11.7C18.9 13 18.2 13.9 17.6 14.3C17.4 15.9 16.5 16.9 15.9 17.4V19C15.9 19.9 17.7 20.6 19.3 21.2C21.2 21.9 23.2 22.7 23.9 24.3L22 25C21.7 24.2 20.1 23.6 18.6 23.1C16.4 22.3 13.9 21.4 13.9 19.1V16.5L14.4 16.2C14.4 16.2 15.6 15.4 15.6 13.8V13.1L16.2 12.8C16.3 12.8 16.8 12.5 16.8 11.7C16.8 11.5 16.6 11.2 16.5 11.1L16.1 10.7L16.3 10.2C16.3 10.2 16.8 8.6 16.8 6.6C16.8 4.7 15.7 3.3 14.8 3.3H14.2L13.9 2.8C13.9 2.4 13.2 2 12 2C8.90002 2 7.00002 3.7 7.00002 6.5C7.00002 7.8 7.50002 10 7.50002 10L7.60003 10.5L7.20002 11C7.10002 11 6.90002 11.3 6.90002 11.7C6.90002 12.2 7.50002 12.8 7.80002 13L8.20002 13.3V13.8C8.20002 15.3 9.50002 16.1 9.50002 16.2L10 16.5V19.1C10 21.5 7.40002 22.7 5.00002 23.7C3.90002 24.1 2.40002 24.8 2.20002 25.3Z"
              fill="white"
            />
          </svg>
          <svg
            className="circulo"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 34C7.6 34 0 26.4 0 17C0 7.6 7.6 0 17 0C26.4 0 34 7.6 34 17C34 26.4 26.3 34 17 34ZM17 2C8.7 2 2 8.7 2 17C2 25.3 8.7 32 17 32C25.3 32 32 25.3 32 17C32 8.7 25.2 2 17 2Z"
              fill="white"
            />
          </svg>
        </div>
        <button
          className="login-button"
          aria-label="logueate"
          onClick={toggleLogin}
        >
          Logueate{" "}
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.72866 12.1128L0.0621101 0.963485L13.051 0.764737L6.72866 12.1128Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className={`login_listado ${login ? "isActive" : ""}`}>
        <form className="login-desplegable" onSubmit={handleLogin}>
          <div className="input-form">
            <input
              type="text"
              className="user"
              placeholder="Usuario"
              value={username}
              name="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-form">
            <input
              type="password"
              className="user"
              placeholder="Contraseña"
              value={password}
              name="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-form">
            <button className="entrar">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

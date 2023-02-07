import "./Logout.css";
import { useState, useContext } from "react";
import { UserContext } from "../../../core/infrastructure/userContext";

export const Logout = () => {
  const [login, setlogin] = useState(false);
  
  const { user } = useContext(UserContext);

  const toggleLogout = () => {
    setlogin(!login);
  };
  
  const nickname = user?.username

  console.log(user?.token.image)
  
  return (
    <div className="login_container">
      <div className="login">
        <div className="icono" role="icono">
            <img className="profile_image" src={user?.token.image} alt=""></img>
        </div>
        <button
          className="logout-button"
          aria-label="logueate"
          onClick={toggleLogout}
        >
          
          {nickname && nickname.length < 10
          ? `${nickname}`
          : `${nickname?.substring(0, 9)}...`}
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
        <form className="login-desplegable">
          <div className="input-form">
            <button className="deslogearse">DESLOGEARSE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

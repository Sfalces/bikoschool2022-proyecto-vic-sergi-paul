import { PageLogo } from "../Logos/PageLogo/PageLogo";
import { Link } from "react-router-dom";
import { Logueate } from "../Login/Login";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/home">
        <PageLogo />
      </Link>
      <Logueate />
    </div>
  );
};

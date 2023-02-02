import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Component.css';
import { isExpired, decodeToken } from "react-jwt";
import axios from "axios";

const Navbar = (props) => {
  const [, setIsLoggedIn] = useState(false);
  let navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const [search, setSearch] = useState("");

  const logOut = () => {
    const token = decodeToken(localStorage.getItem("token"));

    axios({
      method: "delete",
      url: `https://at.usermd.net/api/user/logout/${token.userId}`,
      data: { userId: token.userId },
    })
      .then((response) => {
        localStorage.removeItem("token");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const isNotLog = isExpired(localStorage.getItem("token"));

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id="nav-color">
      <div className="container-fluid">
        <Link className="navbar-brand" id="logo-name" to="/">Film Base</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/"></Link>
            </li>

          </ul>
          <form className="d-flex">
           <input className="form-control me-2" id="search-bar" type="search" placeholder="Wyszukiwarka" aria-label="search" 
             value={search} onChange={(e) => setSearch(e.target.value)} /> <button type="submit" className="button-movies" onClick={(e) => props.search(search, e)}>Szukaj</button>
          </form>
          {isNotLog && (
          <li className="nav-item">
            <Link className="nav-link" id="login" to='/login' onClick={handleLogin}>Zaloguj się</Link>
            <Link className="nav-link" id="register" to='/register'>Zarejestruj się</Link>
          </li>
          )}
        </div>
        </div>
       {!isNotLog && (
          <li className="nav-item">
            <Link className="nav-link" onClick={logOut} style={{color:"white"}}>
              Wyloguj
            </Link>
            <Link className="nav-link" to="/add" style={{color:"white"}}> Dodaj film</Link> 
            </li>
        )} 


    </nav>
  );
};

export default Navbar;

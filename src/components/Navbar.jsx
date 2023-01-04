import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Component.css';

const Navbar= () =>{

  return (
<nav class="navbar navbar-expand-lg bg-body-tertiary" id="nav-color">
  <div class="container-fluid">
    <Link class="navbar-brand" id="logo-name" to="/" >Film Base</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/"></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" id="nav-view" aria-current="page" to="/add">Dodaj film</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" id="search-bar" type="search" placeholder="Wyszukiwarka" aria-label="search" />
      </form>
      <li class="nav-item">
        <Link class="nav-link" id="login" to='/login'>Zaloguj się</Link>
        <Link class="nav-link" id="register" to='/register'>Zarejestruj się</Link>
      </li>
    </div>
  </div>
</nav>

  );
}
export default Navbar;
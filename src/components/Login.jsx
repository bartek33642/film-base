import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Login = () => {
    return(
        <>
        <Navbar />
<section class="vh-100 bg-image"
  style={{backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}} >
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style={{borderRadius: "15px"}}>
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Zaloguj się</h2>

              <form>

                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" class="form-control form-control-lg" />
                  <label class="form-label" htmlFor="form3Example3cg">Email</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
                  <label class="form-label" htmlFor="form3Example4cg">Hasło</label>
                </div>

                <p class="small mb-5 pb-lg-2"><a class="text-black-50" href="#!" style={{fontSize: '16px', textDecoration: 'none'}}>Zapomniałeś hasła?</a></p>


                <div class="d-flex justify-content-center">
                  <button type="button"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" style={{backgroundColor: '#6c757d', border: 'none'}}>Zaloguj</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">Nie masz konta? 
                <Link to='/register' class="fw-bold text-body"><u> Zarejestruj się</u></Link></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    );
}

export default Login;
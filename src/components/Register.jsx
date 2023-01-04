import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Register = () => {
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
              <h2 class="text-uppercase text-center mb-5">Stwórz konto</h2>

              <form>

              <div class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                  <label class="form-label" htmlFor="form3Example1cg">Login</label>
                </div>
                
                <div class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                  <label class="form-label" htmlFor="form3Example1cg">Nazwa</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" class="form-control form-control-lg" />
                  <label class="form-label" htmlFor="form3Example3cg">Email</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
                  <label class="form-label" htmlFor="form3Example4cg">Hasło</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
                  <label class="form-label" htmlFor="form3Example4cdg">Powtórz hasło</label>
                </div>

                <div class="form-check d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" htmlFor="form2Example3g">
                    Zgadzam się z warunkami <a href="#!" class="text-body"><u>Warunki aplikacji</u></a>
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                  <button type="button"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" style={{backgroundColor: '#6c757d', border: 'none'}}>Zarejestruj</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">Masz już konto?  
                <Link to='/login' class="fw-bold text-body"><u>Zaloguj się</u></Link></p>

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

export default Register;
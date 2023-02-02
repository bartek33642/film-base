import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {

  const [Name, SetName] = useState("");
  const [Password, SetPassword] = useState("");
  const [Email, SetEmail] = useState("");
  const [isSuccess, setSuccess] = useState(null);
  const [message, setMessage] = useState("");

  let navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://at.usermd.net/api/user/create",
      data: { name: Name, email: Email, password: Password },
    })
      .then((response) => navigate("/"))
      .catch((error) => {
        setSuccess(false);
        setMessage("Wystąpił błąd podczas rejestracji, podany e-mail już istnieje w bazie");
        });
        };
  

    return(
        <>
        <Navbar />

        <section class="vh-100 bg-image" id= "backgroundView">
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style={{borderRadius: "15px"}}>
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Stwórz konto</h2>

              <form>

              <div class="form-outline mb-4">
                  <input type="login" id="form3Example1cg" class="form-control form-control-lg" value={Name} onChange={(e) => SetName(e.target.value)} required/>
                  <label class="form-label" htmlFor="form3Example1cg">Login</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" class="form-control form-control-lg" valule={Email} onChange={(e) => SetEmail(e.target.value)} required/>
                  <label class="form-label" htmlFor="form3Example3cg">Email</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cg" class="form-control form-control-lg" value={Password} onChange={(e) => SetPassword(e.target.value)} required/>
                  <label class="form-label" htmlFor="form3Example4cg">Hasło</label>
                </div>      

                <div class="form-check d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" required/>
                  <label class="form-check-label" htmlFor="form2Example3g">
                    Zgadzam się z warunkami <a href="#!" class="text-body"><u>Warunki aplikacji</u></a>
                  </label>
                </div>
                <p>Pamietaj aby wypełnić wszystkie pola</p>

                <div class="d-flex justify-content-center">
                  <button type="button"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={register} style={{backgroundColor: '#6c757d', border: 'none'}}>Zarejestruj</button>
                </div>
                {isSuccess === false && <div className="alert alert-danger">{message}</div>}
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

  };
export default Register;
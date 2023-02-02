import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [Name, SetName] = useState("");
  const [Password, SetPassword] = useState("");
  const [error, setError] = useState(false);

  let navigate =  useNavigate();
  const register = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://at.usermd.net/api/user/auth",
      data: { login: Name, password: Password },
    })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };
  
    return(
        <>
        <Navbar />
<section className="vh-100 bg-image" id="backgroundView">
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: "15px"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Zaloguj się</h2>

              

                <div className="form-outline mb-4">
                  <input type="login" id="form3Example3cg" name="login" className="form-control form-control-lg" value={Name} onChange={(e) => SetName(e.target.value)}/>
                  <label className="form-label" htmlFor="form3Example3cg">Email / Login</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cg" name="password" className="form-control form-control-lg" value={Password} onChange={(e) => SetPassword(e.target.value)}/>
                  <label className="form-label" htmlFor="form3Example4cg">Hasło</label>
                </div>

                <p className="small mb-5 pb-lg-2"><a className="text-black-50" href="#!" style={{fontSize: '16px', textDecoration: 'none'}}>Zapomniałeś hasła?</a></p>
                <div className="d-flex justify-content-center">
                  <button type="button" 
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" style={{backgroundColor: '#6c757d', border: 'none'}} onClick={register}>Zaloguj</button>
                </div>
                     {error && (
                        <div className="alert alert-danger" role="alert">
                          Błąd podczas logowania: nieprawidłowy login lub hasło
                        </div>
                      )}
                <p className="text-center text-muted mt-5 mb-0">Nie masz konta? 
                <Link to='/register' className="fw-bold text-body"><u> Zarejestruj się</u></Link></p>


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
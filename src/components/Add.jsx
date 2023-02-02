import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from 'axios';

const Add = () => {
  const [movieData, setMovieData] = useState({
    id: "",
    title: "",
    image: "",
    content: ""
  });

  const[successMessage, setSuccessMessage] = useState('');
  const[errorMessage, setErrorMessage] = useState('');


  const handleChange = e => {
    setMovieData({...movieData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('https://at.usermd.net/api/movies', movieData)
      .then(res => {
        setSuccessMessage("Dodano poprawnie film")
      })
      .catch(err => {
        setErrorMessage("Wystąpił błąd, spróbuj ponownie dodać film");
      });
    };


  
    return(
        <>
            <Navbar />
            <section className="vh-100 bg-image" id= "backgroundView" >
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: "15px"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Dodaj film</h2>

              <form onSubmit={handleSubmit}>

              <div className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" name="title" value={movieData.title} onChange={handleChange} required/>
                  <label className="form-label" htmlFor="form3Example1cg">Tytuł</label>
                </div>

                <div className="form-outline">
                    <textarea className="form-control" id="textAreaExample" rows="4" name="content" value={movieData.content} onChange={handleChange} required></textarea>
                    <label className="form-label" for="textAreaExample">Opis filmu</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example4cdg" className="form-control form-control-lg" name="image" value={movieData.image} onChange={handleChange} required/>
                  <label className="form-label" htmlFor="form3Example4cdg">Link do zdjęcia</label>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="submit"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" style={{backgroundColor: '#6c757d', border: 'none'}}>Dodaj</button>
                </div>

                <br/>
                        {successMessage && (
                          <div className="alert alert-success" role="alert">
                           {successMessage}

                          </div>
                        )}
                        {errorMessage && (
                          <div className="alert alert-danger" role="alert">
                            {errorMessage}
                          </div>
          )}

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

export default Add;
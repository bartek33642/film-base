import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

const Details = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const getMoviesData = () => {
      axios({
        method: "get",
        url: `https://at.usermd.net/api/movies/${id}`,
      })
        .then((response) => setMovies(response.data))
        .catch((error) => console.log(error));
    };
  
    const [Movies, setMovies] = useState({});
    useEffect(() => {
      getMoviesData();
    }, []);

    const deleteMovies = () => {
        axios({
            method: "delete",
            url: `https://at.usermd.net/api/movie/${id}`
        })
        .then((response) => navigate("/"))
        .catch((error) => console.log(error));
    }
    return (
        <div className="details-view">
            <Navbar />
            <div className='movie-section'>
                <div className="card mb-3" style={{ width: "100%" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={Movies.image} className="img-fluid rounded-start" alt="poster" style={{ width: "100%" }} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{Movies.title}</h5>
                                <p className="card-text">{Movies.content}</p>
                                <div>
                                    <button type='button' className="button-movies" onClick={deleteMovies}>Usuń film</button><br/><br/>
                                    <button type='button' className="button-movies"><Link to={"/"} className="button-movies-text">Wróć do strony głównej</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
);
};

export default Details;



import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Movies = ({imgPath, title, description, casts, genre, grade, year, star}) => {

  return (

 <div className='movie-section'>
    <div className="card mb-3" >
        <div className="row g-0">
            <div className="col-md-4">
                <img src={imgPath} className="img-fluid rounded-start" alt="poster" />
            </div>
    <div className="col-md-8">
      <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text"><small class="text-muted"><img src={star} id="starRate" alt='star'/>  {grade}</small></p>
            <p className="card-text">{description}</p> 
            <p className="card-text"><small class="text-muted"><b>Obsada:</b> {casts}</small></p>
            <p className="card-text"><small class="text-muted"><b>Gatunek:</b> {genre}</small></p>
            <p className="card-text"><small class="text-muted"><b>Rok:</b> {year}</small></p>
            <div> 
              <button type='button' className="button-movies"><Link to='/moviedetails' className="button-movies-text">Szczegóły filmu</Link></button>
            </div>
      </div>
    </div>
  </div>
</div>
</div> 
  )
}

export default Movies;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Movies = ({id, image, title, content}) => {

  return (
 <div className='movie-section'>
    <div className="card mb-3" style={{width:"100%"}}>
        <div className="row g-0" >
            <div className="col-md-4">
                <img src={image} className="img-fluid rounded-start" alt="poster" style={{width:"100%"}}/>
            </div>
    <div className="col-md-8">
      <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content.length > 255 ? content.substring(0,255) + " ...": content}</p> 
            <div> 
              <button type='button' className="button-movies">
                <Link to={`moviedetail/${id}`} className="button-movies-text">Szczegóły filmu</Link>
              </button>
            </div>
      </div>
    </div>
  </div>
</div>
</div> 

  )
}

export default Movies;
import './App.css';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';

function App() {

    const [data, setData] = useState([]);

    const search = (value, e) => {
      e.preventDefault();
      console.log(value);
      fetch('https://at.usermd.net/api/movies')
      .then(response => response.json())
      .then(data => {
        const filter = data.filter(Film => Film.title.toLowerCase().includes(value.toLowerCase()));
        setData(filter);
      });
    }
  
    useEffect(() => {
      fetch('https://at.usermd.net/api/movies')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

  return (
    <div className='content'>
      <>
      <Navbar search={search} />

      {data.map(item => 
        <Movies id={item.id}
          title={item.title}
          image={item.image}
          content={item.content} />
      )}

      <Footer />
      </>
      </div>
  );
}

export default App;

import React from 'react';
import './index.css';
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Details from './components/Details';
import Add from './components/Add';
import NotFound from './components/NotFound';
import { isExpired } from 'react-jwt';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
           <Routes>
              <Route path="/" element={<App/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="register" element={<Register/>}/>
              <Route path="add" element={
                isExpired(localStorage.getItem("token")) ? (
                <Navigate replace to='/' /> 
                ) : ( <Add/>)
              
              }/>
              <Route path={"/moviedetail/:id"} element={<Details/>}/>
              <Route path='*' element={<NotFound />}/>
          </Routes>
       </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

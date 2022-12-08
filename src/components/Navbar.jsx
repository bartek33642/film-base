import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar-section'>
      <div className='input-group'> 
        <input type="text" className='form-navbar' placeholder='Wyszukiwarka'/>
        <button type='button' className='loginBtn'>Zaloguj się</button>
        <button type='button' className='registerBtn'>Zarejestruj się</button>
    </div>
    </div>

  )
}

export default Navbar;
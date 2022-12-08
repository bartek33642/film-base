import React from 'react';

let date =  new Date().getFullYear();

const Footer = () => {
  return (
    <div className='footer'>
      <p className='p-footer'>©{date} Bartłomiej Cich</p>
    </div>
  )
}

export default Footer;
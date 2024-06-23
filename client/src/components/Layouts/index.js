import React from 'react';
import Logo from '../../assests/logo.png';

function AuthLayouts({ children }) {
  return (
    <>
      <header className='d-flex justify-content-center align-items-center py-3 h-20 shadow px-4 bg-white'>
        <div>
          <img 
            src={Logo}
            alt='logo'
            width={100}
            height={100}
          />
        </div>
      </header>
      <main className='d-flex justify-content-center align-items-center vh-100'>
        {children}
      </main>
    </>
  );
}

export default AuthLayouts;

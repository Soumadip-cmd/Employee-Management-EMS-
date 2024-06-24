import React from 'react';
import Logo from './../../assests/logo.png';

function AuthLayouts({ children }) {
  return (
    <>
      <header className='flex justify-center items-center py-3 h-20 shadow-md px-4 bg-white'>
        <div>
          <img 
            src={Logo}
            alt='logo'
            width={80}
            height={20}
          />
        </div>
      </header>
      <main className='flex justify-center items-center h-full'>
        {children}
      </main>
    </>
  );
}

export default AuthLayouts;

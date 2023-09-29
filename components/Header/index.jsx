import React from 'react';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <header className=' grid place-items-start items-center grid-cols-2 m-5 rounded-2xl p-4 bg-black'>
      <div className='flex items-center justify-center gap-3'>
        <h1 className='text-2xl text-opacity-90 '>
          <a href='/'>colmenaDev</a>
        </h1>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;

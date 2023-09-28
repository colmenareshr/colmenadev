import React from 'react';

const Header = () => {
  return (
    <div className='bg-[#161b22]'>
      <header className='grid justify-items-center p-6'>
        <div className=''>
          <img 
          className='rounded-full'
          src='https://github.com/colmenareshr.png' 
          alt='Humberto Colmenares de colmenaDev' 
          height={100}
          width={100}
          />
        </div>
        <nav>
          <ul class="flex items-center space-x-4">
            <li><p style={{color:'white'}}>@colmenaDev</p></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

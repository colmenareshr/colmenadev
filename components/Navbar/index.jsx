import React from 'react';

const Navbar = () => {
  const menuItems = [
    {
      id: 1,
      title: 'Home',
      url: '/',
    },
    {
      id: 2,
      title: 'Experiencia',
      url: '/experiencia',
    },
    {
      id: 3,
      title: 'Portafolio',
      url: '/portafolio',
    },
    {
      id: 4,
      title: 'Skills',
      url: '/skills',
    },
    {
      id: 5,
      title: 'Sobre mí',
      url: '/sobre-mi',
    },
    {
      id: 7,
      title: 'Contacto',
      url: '/contacto',
    },
  ];
  return (
    <div className='container'>
      <nav>
        <ul className='flex gap-4 text-gray font-semibold'>
          {menuItems.map((item) => (
            <li
              className='hover:text-gray/70 hover:bg-gradient-to-tr transition-all duration-75'
              key={item.id}
            >
              <a href={`#${item.title}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

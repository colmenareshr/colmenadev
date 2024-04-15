import { CiMenuFries } from 'react-icons/ci';

const Navbar = () => {
  return (
    <nav className='max-w-full mx-auto px-8 py-4'>
      <div className='flex items-center justify-between flex-wrap'>
        <div>
          <span className='text-2xl text-yellow-400 font-extrabold'>
            ColmenaDev
          </span>
        </div>
        <div>
          <CiMenuFries size={40} color='#FFD163' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

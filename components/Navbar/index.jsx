'use client';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const Navbar = () => {
  return (
    <nav className='max-w-full mx-auto px-16 py-4 bg-slate-800 shadow-lg'>
      <div className='flex items-center justify-between flex-wrap'>
        <div>
          <Link href={'/'}>
            <span className='text-2xl text-yellow-400 font-extrabold md:text-4xl'>
              ColmenaDev
            </span>
          </Link>
        </div>
        <div>
          <CiMenuFries size={40} color='#FFD163' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

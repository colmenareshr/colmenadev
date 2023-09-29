import Image from 'next/image';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
const HeroSection = () => {
  return (
    <section className='h-auto grid grid-cols-[900px_minmax(500px,_1fr)] gap-4 items-start justify-center p-4'>
      <div className=' bg-black rounded-2xl p-6'>
        <h1 className='text-7xl font-black py-4'>Frontend Deveoper</h1>
        <p className='mx-w-[900px]'>
          Soy frontend developer, especializado en WordPress. En 2016 realicé
          una transición de carrera y mudarme para el mundo digital. Así fue
          como pasé de ser docente de música a trabajar como Freelancer en al
          área del desarrollo web.
        </p>
        <ul className='flex gap-3 p-3'>
          <li>
            <a
              href='https://www.linkedin.com/in/humbertocolmenares'
              target='_blank'
              rel='noreferrer'
            >
              <BsLinkedin size={30} className='text-orange' />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/colmenareshr'
              target='_blank'
              rel='noreferrer'
            >
              <BsGithub size={30} className='text-orange' />
            </a>
          </li>
          <li>
            <a
              href='https://instagram.com/colmenadev'
              target='_blank'
              rel='
            noreferrer'
            >
              <BsInstagram size={30} className='text-orange' />
            </a>
          </li>
        </ul>
      </div>
      <div className='bg-purple rounded-2xl'>
        <Image
          className='object-cover rounded-2xl'
          src={'https://github.com/colmenareshr.png'}
          alt='Humberto Colmenares'
          width={600}
          height={400}
        />
      </div>
      <div className=' bg-orange rounded-2xl p-4'>
        <span className='relative flex h-3 w-3'>
          <span class='animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75'></span>
          <span class='relative inline-flex rounded-full h-3 w-3 bg-sky-500'></span>
        </span>
        <p>Aún estoy en construcción</p>
      </div>
    </section>
  );
};

export default HeroSection;

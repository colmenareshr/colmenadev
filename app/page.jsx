import SocialProfile from '@/components/SocialProfile';
import { FaSignature } from 'react-icons/fa';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <section className='container mx-auto flex flex-col space-y-3 p-8'>
        <h1 className='text-balance text-left'>Humberto Colmenares </h1>
        <h2 className='text-lg text-slate-200'>
          Desarrollador Frontend y especialista en Wordpress
        </h2>
        <p>
          Te ayudo a desarrollar aplicaciones y sitios web modernos, SEO
          optimizados y adaptados a dispositivos móviles.
        </p>
        <SocialProfile />
      </section>
      <section className='min-h-96 flex items-center justify-center container mx-auto bg-slate-200 p-8 my-photo__bg'>
        <figure className='my-photo'>
        </figure>
      </section>
    </main>
  );
}

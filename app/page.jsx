import SocialProfile from '@/components/SocialProfile';

export default function Home() {
  return (
    <main className='md:min-h-screen max-w-full'>
      <div className='container max-w-full bg-slate-900 md:min-h-screen flex flex-col md:flex-row md:items-center hero-bg px-8'>
        <section className='container mx-auto md:w-3/4 flex flex-col space-y-3 p-8'>
          <h1 className='text-balance text-left'>Humberto Colmenares </h1>
          <h2 className='text-lg text-slate-200'>
            Desarrollador Frontend y especialista en Wordpress
          </h2>
          <p className='text-balance'>
            Te ayudo a desarrollar aplicaciones y sitios web modernos, SEO
            optimizados y adaptados a dispositivos móviles.
          </p>
          <SocialProfile />
        </section>
        <section className='max-w-full md:min-h-screen flex items-center justify-center container mx-auto p-8 my-photo__bg'>
          <figure className='my-photo'></figure>
        </section>
      </div>
    </main>
  );
}

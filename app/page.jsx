import ContactForm from "@/components/ContactForm";
import SocialProfile from "@/components/SocialProfile";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto flex min-h-screen max-w-fit justify-center px-6">
        <section className="flex flex-col md:flex-row-reverse md:items-center md:justify-between">
          <div>
            <figure className="my-photo"></figure>
          </div>
          <div className="flex flex-col justify-center space-y-3 md:max-w-lg ">
            <h1 className="text-balance text-left">Humberto Colmenares </h1>
            <h2 className="text-xl font-semibold text-slate-200">
              Desarrollador Frontend y especialista en Wordpress
            </h2>
            <p>
              Te ayudo a desarrollar aplicaciones y sitios web modernos, SEO
              optimizados y adaptados a dispositivos móviles.
            </p>
            <SocialProfile />
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}

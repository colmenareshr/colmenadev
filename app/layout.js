import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Desarrollador Frontend y WordPress Especialista',
  description: 'Obtén tu sitio web SEO optimizado y adaptado a dispositivos móviles.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='es-ES'>
      <body className={poppins.className}>
        <header>
          <Navbar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

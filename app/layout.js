import './globals.css'

export const metadata = {
  title: 'colmenaDev | Frontend Developer',
  description: 'Entra ahora y descubre cómo podemos trabajar juntos.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

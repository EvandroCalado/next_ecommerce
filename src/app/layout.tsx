import type { Metadata } from 'next';
import { Navbar } from '../components';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Next Ecommerce',
  description: 'Next Ecommerce com tailwindcss',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

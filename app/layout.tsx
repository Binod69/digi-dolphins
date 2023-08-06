import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import Navbars from './Components/HomeComponents/NavBar/Navbar';
import Footer from './Components/HomeComponents/Footer/Footer';

const dm_sans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Digi Dolphins',
  description: 'Design your next business',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <Navbars />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

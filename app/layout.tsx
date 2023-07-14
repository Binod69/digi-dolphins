import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import Navbars from './Components/NavBar/Navbar';

const inter = Space_Grotesk({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <Navbars />
        {children}
      </body>
    </html>
  );
}

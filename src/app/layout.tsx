import './globals.css';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'William Huang',
  description: 'Portfolio',
  icons: {
    icon: '/favicon.ico', // or '/your-icon.png'
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png', // for iOS
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} scroll-smooth bg-dark text-text`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

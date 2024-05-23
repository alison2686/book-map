import Navigation from '@/components/nav';
import Footer from '@/components/footer';
import type { Metadata } from 'next';
import { Inter, Bangers } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const bangers = Bangers({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '600 Year Odyssey',
  description: 'Based On An Autobiography and Memoir By L.K. Lennie Lee',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={bangers.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

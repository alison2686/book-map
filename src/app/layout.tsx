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
  title: 'Sojourners to Joke Sings: Tales of Chinatown and Beyond',
  description:
    'Based On An Autobiography and Memoir By L.K. Lennie Lee. Becoming American: A 600 Year Odyssey chronicles the interesting facts and stories found while working to confirm the plausibility of Lennie’s amazing tales',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${bangers.className}`}>
        <div className='layout-grid'>
          <Navigation />
          <main className='content'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

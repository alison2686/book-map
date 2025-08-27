// app/layout.tsx
import Navigation from '@/components/nav';
import Footer from '@/components/footer';
import type { Metadata } from 'next';
import { Inter, Bangers } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const bangers = Bangers({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bangers',
});

export const metadata: Metadata = {
  title: 'Sojourners to Joke Sings: Tales of Chinatown and Beyond',
  description:
    'Based On An Autobiography and Memoir By L.K. Lennie Lee. Sojourners to Joke Sings: Tales of Chinatown and Beyond chronicles the interesting facts and stories found while working to confirm the plausibility of Lennie’s amazing tales',
};

// (Optional) move this to env: process.env.NEXT_PUBLIC_GA_ID
const GA_MEASUREMENT_ID = 'G-Z6YHJCYGG8';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <head>
        {/* Google Analytics */}
        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id='gtag-init'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      {/* Attach BOTH font variables to <body>; make Inter the default via Tailwind's font-sans */}
      <body className={`${inter.variable} ${bangers.variable} font-sans`}>
        <div className='layout-grid'>
          <Navigation />
          <main className='content'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

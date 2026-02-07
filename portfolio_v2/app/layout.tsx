// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter, IBM_Plex_Serif, JetBrains_Mono } from 'next/font/google';
import Header from './components/ui/Header/Header';
import Footer from './components/ui/Footer/Footer';
import '@/styles/globals.css';
import '@/styles/tokens.css';
import '@/styles/animations.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const ibmPlexSerif = IBM_Plex_Serif({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-serif',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: ' Design | Complexidade Domada',
  description: 'Método Ψ-TSOC para transformar caos em clareza',
  keywords: ['design system', 'complexidade', 'design automático', 'Ψ-TSOC', 'UX', 'design'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${ibmPlexSerif.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="-layout" data-observador="O4">
          <Header />
          <main className="-main">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Quicksand, Comic_Neue } from 'next/font/google';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SoundProvider } from "./contexts/SoundContext";
import "./globals.css";

const quicksand = Quicksand({ 
  subsets: ['latin'],
  variable: '--font-quicksand',
});

const comicNeue = Comic_Neue({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-comic',
  display: 'swap'
});

export const metadata: Metadata = {
  title: "PuzzleFun! - Create and Play Puzzles",
  description: "Create your own custom puzzles, play and have fun!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${quicksand.variable} ${comicNeue.variable} antialiased min-h-screen flex flex-col relative`}
        style={{
          background: `
            linear-gradient(to right, var(--background) 1px, transparent 1px),
            linear-gradient(to bottom, var(--background) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center',
        }}
      >
        <div className="fixed inset-0 bg-gradient-to-br from-primary/5 to-accent-pink/5 pointer-events-none" />
        <SoundProvider>
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </SoundProvider>
      </body>
    </html>
  );
}

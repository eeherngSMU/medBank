import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import BootstrapClient from '@/app/components/BootstrapClient';
import { Inter, Space_Grotesk } from 'next/font/google';
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: "medbank",
  description: "Improve med student's study efficiency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-10xl mx-auto">
          <Navbar/>
        {children}
        </main>
        
      </body>
      <BootstrapClient/>
    </html>
  );
}

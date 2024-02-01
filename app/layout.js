import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import { Roboto } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
})

export const metadata = {
  title: "West Denver Home Services",
  description: "Your Trusted Home Services Group",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className} >
      <NavBar/>
      {children}
      </body>
    </html>
  );
}

import { Skranji } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";


import "./globals.css";

const skranji = Skranji({ weight: ["400", "700"], subsets: ["latin"]});

export const metadata = {
  title: "FooFest 2024",
  description: "The Festival that keeps going 24/7 365 days of every year!",
};


export default function RootLayout({ children }) {
  return (
    <html lang="da" className="bg-black">
      <body className={`mx-auto max-w-[1920px] 4xl:border-green  4xl:border-x-4 ${skranji.className}`}>
        <Sidebar></Sidebar>
        <Header customStyle="-mb-[5dvh]"/>
        <main className="flex flex-col">{children}</main>
        <Footer customStyle="-mt-4"/>
      </body>
    </html>
  );
}

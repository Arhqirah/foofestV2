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
    <html lang="da">
      <body className={`${skranji.className}`}>
        <Header/>
        <Sidebar style="fixed top-4 right-2"></Sidebar>
        <main className="flex flex-col self-center justify-center">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

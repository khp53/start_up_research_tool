import Image from "next/image";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import Footer from "./footer/footer";
require('dotenv').config();

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Footer />
    </main >
  );
}

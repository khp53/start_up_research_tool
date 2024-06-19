import Image from "next/image";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Footer from "./Footer/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Footer />
    </main >
  );
}

import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Plats from "@/components/Plats/Plats";
import SanjiProfile from "@/components/SanjiProfile/SanjiProfile";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <SanjiProfile/>
      <Plats/>
      <Footer/>
    </>
  );
}

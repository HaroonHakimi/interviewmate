import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";


export default function Home() {
  return (
    <div className="bg-black">
      <Header/>
      <Hero/>
      <LogoTicker/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}

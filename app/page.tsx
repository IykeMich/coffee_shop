import Banner from "./components/Banner";
import Benefits from "./components/Benefits";
import BestSeller from "./components/BestSeller";
import BrewGuide from "./components/BrewGuide";
import Connected from "./components/Connected";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurCafe from "./components/OurCafe";
import OurOfferings from "./components/OurOfferings";
// import Image from "next/image";

export default function Home() {
  return (

        <main className='bg-[#f6f1e5]'>
          <Navbar />
          <Hero />
          <div className="mx-4 md:mx-16 lg:mx-24">
            <BestSeller />
          </div>
          <OurCafe />
          <Benefits />
          <Banner />
          <OurOfferings />
          <BrewGuide />
          <Connected />
          <Footer />
        </main>

  );
}

import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import AboutUs from "@/components/Aboutus";
import Services from "@/components/Services";
import Whychoseus from "@/components/Whychoseus";
import PortfolioSection from "@/components/PortfolioSection";


export default function Home() {
  return (
   <>
   <HeroSlider />
   <AboutUs />
   <Services />
   <Whychoseus />
   <PortfolioSection />
 

   
   </>
  );
}

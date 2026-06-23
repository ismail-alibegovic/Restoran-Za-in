import SmoothScroll from "@/components/zacin/SmoothScroll";
import Navigation from "@/components/zacin/Navigation";
import Hero from "@/components/zacin/Hero";
import AboutSection from "@/components/zacin/AboutSection";
import MenuSection from "@/components/zacin/MenuSection";
import ReserveForm from "@/components/zacin/ReserveForm";
import WhoWeAre from "@/components/zacin/WhoWeAre";
import SpecialEvents from "@/components/zacin/SpecialEvents";
import CooksNote from "@/components/zacin/CooksNote";
import Gallery from "@/components/zacin/Gallery";
import BookNowCTA from "@/components/zacin/BookNowCTA";
import Footer from "@/components/zacin/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen flex flex-col bg-paper">
        <Navigation />
        <Hero />
        <AboutSection />
        <MenuSection />
        <ReserveForm />
        <WhoWeAre />
        <SpecialEvents />
        <CooksNote />
        <Gallery />
        <BookNowCTA />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

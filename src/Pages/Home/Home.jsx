import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import TextMain from "../../components/TextMain/TextMain.jsx";
import MainServiceBox from "../../components/MainServiceBox/MainServiceBox.jsx";
import LogoScrollMain from "../../components/LogoScrollMain/LogoScrollMain.jsx";
import VideoBox from "../../components/VideoBox/VideoBox.jsx";
import FAQ from "../../components/FAQ/FAQ.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import BookingSection from "../../components/BookingSection/BookingSection.jsx";
import WhatsApp from "../../components/WhatsApp/WhatsApp.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import ChooseUsBox from "../../components/ChooseUsBox/ChooseUsBox";
import { homeChooseUs } from "../../data/homeChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <TextMain
        line1="FAST-TRACK YOUR"
        line2="TCD TESTING"
        line3="AND RENEWAL"
        line4="WITH CUSTOM"
        line5="MECHANICS"
      />
      <MainServiceBox />
      <LogoScrollMain />
      <VideoBox />
      <ChooseUsBox 
      items={homeChooseUs} />
      <FAQ />
      <Testimonials />
      <BookingSection />

      <WhatsApp />
      <Footer />
    </>
  );
}
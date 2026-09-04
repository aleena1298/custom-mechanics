import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import TextMain from "../../components/TextMain/TextMain.jsx";
import MainServiceBox from "../../components/MainServiceBox/MainServiceBox.jsx";
import LogoScrollMain from "../../components/LogoScrollMain/LogoScrollMain.jsx";
import VideoBox from "../../components/VideoBox/VideoBox.jsx";
import ChooseUsBox from "../../components/ChooseUsBox/ChooseUsBox.jsx";
import FAQ from "../../components/FAQ/FAQ.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import BookingSection from "../../components/BookingSection/BookingSection.jsx";
import WhatsApp from "../../components/WhatsApp/WhatsApp.jsx";
import Footer from "../../components/Footer/Footer.jsx";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <TextMain />
      <MainServiceBox />
      <LogoScrollMain />
      <VideoBox />
      <ChooseUsBox />
      <FAQ />
      <Testimonials />
      <BookingSection />

      <WhatsApp />
      <Footer />
    </>
  );
}
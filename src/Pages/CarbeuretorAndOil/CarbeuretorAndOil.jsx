import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Whatsapp from "../../components/WhatsApp/WhatsApp";
import Footer from "../../components/Footer/Footer";
import AnimatedVideoText from "../../components/AnimatedVideoText/AnimatedVideoText";
import video from "../../assets/videos/1130.mp4";
import Testimonials from '../../components/Testimonials/Testimonials';
import FAQ from '../../components/FAQ/FAQ';
import ChooseUsBox from '../../components/ChooseUsBox/ChooseUsBox';
import { carburetorChooseUs } from '../../data/carburetorChooseUs';
import CardSection from '../../components/CardSection/CardSection';
import { carburetorOilCards } from '../../data/carburetorOilCards';
import MarketplaceBike from '../../components/MarketplaceBike/MarketplaceBike';
import carburetor2 from '../../assets/images/carburetor2.png';
import engineoil from '../../assets/images/engineoil.png';
import AccessoriesSection from '../../components/AccessoriesSection/AccessoriesSection';


export default function CarburetorAndOil() {
  return (
    <>
      <Navbar />
      <Whatsapp />
      <AnimatedVideoText
        video={video}
        lines={[
          "Boost Bike",
          "Performance",
          "With",
          "Carburetor",
          "& Oil Change",
          "With Custom",
          "Mechanics"
        ]}
      />
      <CardSection
        title="Carburetor & Oil Change"
        cards={carburetorOilCards}
      />
      <MarketplaceBike
        variant="standard"
        head1="Carburetor"
        head2="Cleaning"
        para="Carburetor cleaning helps your bike breathe better and deliver steady power on Bermuda’s roads. Our mechanics remove dirt, varnish, and fuel buildup, restoring smooth throttle response and improved fuel efficiency. It’s a simple service that makes a big difference in everyday riding."
        image={carburetor2}
      />
      <ChooseUsBox items={carburetorChooseUs} />
      <MarketplaceBike
        variant="parallax"
        head1="Oil"
        head2="Cleaning"
        para="Oil change keeps your engine protected and running smooth. We remove old, dirty oil, clear out buildup, and refill with fresh, high grade oil that performs well in Bermuda’s warm climate. Your bike feels lighter, cooler, and more reliable after a proper oil service."
        image={engineoil}
      />
      <AccessoriesSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  )
}

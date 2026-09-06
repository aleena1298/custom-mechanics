import Navbar from "../../components/Navbar/Navbar";
import WhatsApp from "../../components/WhatsApp/WhatsApp";
import AnimatedVideoText from "../../components/AnimatedVideoText/AnimatedVideoText";
import MarketplaceBike from "../../components/MarketplaceBike/MarketplaceBike";
import AccessoriesSection from "../../components/AccessoriesSection/AccessoriesSection";
import Testimonials from "../../components/Testimonials/Testimonials";
import ChooseUsBox from "../../components/ChooseUsBox/ChooseUsBox";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";

import CardSection from "../../components/CardSection/CardSection";
import { batteryCards } from "../../data/batteryCards";
import { batteryChooseUs } from "../../data/batteryChooseUs";

import video from "../../assets/videos/1125.mp4";
import battery from "../../assets/images/battery.png";
import clip from "../../assets/images/clip.png";

export default function BikeAndBatteryReplacement() {
  return (
    <>
      <Navbar />
      <WhatsApp />

      <AnimatedVideoText
        video={video}
        lines={[
          "Fast Track",
          "Motorcycle",
          "Battery Solutions",
          "and Replacement",
          "with Custom",
          "Mechanics",
        ]}
      />

      <CardSection
        title="Battery Replacement"
        cards={batteryCards}
      />

      <MarketplaceBike
        // variant="standard"
        head1="Battery"
        head2="Replacement"
        para="Battery replacement keeps your bike running with reliable power. A weak or dying battery can leave you stranded, so replacing it at the right time makes a big difference. Skilled technicians check the connections, install a fresh unit, and make sure everything charges the way it should. You ride away with smooth starts and consistent performance."
        image={battery}
      />

      <ChooseUsBox
        items={batteryChooseUs} />


      <MarketplaceBike
        variant="parallax"
        head1="Battery"
        head2="Diagnostic"
        para="Battery diagnostics is about understanding the health of your current setup. Mechanics test the voltage, charging rate and overall condition, then pinpoint the exact issue. Sometimes you only need a recharge or a minor fix, not a full replacement. Clear diagnostics save time and money while keeping your bike dependable."
        image={clip}
      />
      <AccessoriesSection />
      <Testimonials />
      <FAQ/>
      <Footer />
    </>
  );
}
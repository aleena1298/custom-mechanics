import Navbar from "../../components/Navbar/Navbar";
import Whatsapp from "../../components/WhatsApp/WhatsApp";
import Footer from "../../components/Footer/Footer";
import AnimatedVideoText from "../../components/AnimatedVideoText/AnimatedVideoText";
import brakedisk from "../../assets/images/brakedisk.png";
import Testimonials from '../../components/Testimonials/Testimonials';
import FAQ from '../../components/FAQ/FAQ';
import AccessoriesSection from '../../components/AccessoriesSection/AccessoriesSection';
import ChooseUsBox from '../../components/ChooseUsBox/ChooseUsBox';
import { brakeRepairChooseUs } from '../../data/brakeRepairChooseUs';
import CardSection from '../../components/CardSection/CardSection';
import { brakeRepairCards } from '../../data/brakeRepairCards';
import MarketplaceBike from '../../components/MarketplaceBike/MarketplaceBike';
import handlebrake from '../../assets/images/handlebrake.png';
import brakecable from '../../assets/images/brakecable.png';

export default function BrakeRepair() {
  return (
    <>
      <Navbar />
      <Whatsapp />
      <AnimatedVideoText
        img={brakedisk}
        lines={[
          "FAST TRACK",
          "Motorcycle",
          "Battery",
          "Solutions",
          "And",
          "Replacement",
          "With Custom",
          "Mechanics"
        ]}
      />
      <CardSection
        title="Brake Repair"
        cards={brakeRepairCards} />
      <MarketplaceBike
        variant="standard"
        head1="Brakes"
        head2="Replacement"
        para="Brake replacement keeps your bike safe on Bermuda’s busy roads. Our mechanics inspect every component, remove worn pads, and install high quality replacements for smooth stopping power. Riders trust us because every job is handled with care and tuned to local riding conditions."
        image={handlebrake}
      />
      <ChooseUsBox items={brakeRepairChooseUs} />
      <MarketplaceBike
        variant="parallax"
        head1="Brake"
        head2="Repair"
        para="Brake repair is essential when your bike starts showing weak or uneven stopping. Our mechanics diagnose the issue, fix damaged parts, and fine tune the system so your brakes feel responsive again. Riders in Bermuda count on our workshop for repairs that restore confidence on every ride."
        image={brakecable}
      />
      <AccessoriesSection />
      <Testimonials />
      <FAQ />
      <Footer />

    </>
  )
}

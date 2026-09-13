import WhatsApp from '../../components/WhatsApp/WhatsApp';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Testimonials from '../../components/Testimonials/Testimonials'
import FAQ from '../../components/FAQ/FAQ'
import AnimationedVideoText from '../../components/AnimatedVideoText/AnimatedVideoText'
import engine from '../../assets/videos/engine.mp4'
import ChooseUsBox from '../../components/ChooseUsBox/ChooseUsBox'
import { engineRepairChooseUs } from '../../data/engineRepairChooseUs'
import MarketplaceBike from '../../components/MarketplaceBike/MarketplaceBike'
import engine3 from '../../assets/images/engine3.png'
import engine4 from '../../assets/images/engine4.png'
import AccessoriesSection from '../../components/AccessoriesSection/AccessoriesSection'
import CardSection from '../../components/CardSection/CardSection';
import { engineRepairCards } from '../../data/engineRepairCards'

export default function EngineRepair() {
  return (
    <>
      <Navbar />
      <AnimationedVideoText
        video={engine}
        lines={[
          "Restore Engine",
          "Performance",
          "With Expert",
          "Engine Repair",
          "& Precision",
          "Care",
          "By Custom",
          "Mechanics"
        ]}
      />
      <CardSection 
        title="Engine Repairing"
        cards={engineRepairCards}
      />
      <MarketplaceBike
        variant="standard"
        head1="Engine"
        head2="Repairing"
        para="We provide expert engine repair services in Bermuda for all types of bikes and motorcycles. Our experienced bike mechanics diagnose engine issues accurately and deliver reliable motorbike engine repairs to restore performance, power, and fuel efficiency. Whether it’s engine noise, overheating, or loss of power, our Bermuda bike repair specialists ensure long-lasting and professional results."
        image={engine3}
      />
      <ChooseUsBox items={engineRepairChooseUs} />
      <MarketplaceBike
      variant="parallax"
      head1="Routine"
      head2="Tune-Ups"
      para="At Custom Mechanics Limited, our expert bike mechanics check and adjust your engine’s key components, including spark plugs, valves, and timing, to ensure smooth operation. Regular tune-ups improve fuel efficiency, prevent costly repairs, and extend the life of your motorcycle, giving riders in Bermuda a safer and more reliable ride every time."
      image={engine4}
      />
      <AccessoriesSection />
      <WhatsApp />
      <Testimonials />
      <FAQ />
      <Footer />

    </>
  )
}

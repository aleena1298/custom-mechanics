import "./AccidentRepair.css";

import Navbar from "../../components/Navbar/Navbar";
import WhatsApp from "../../components/WhatsApp/WhatsApp";
import AnimatedVideoText from "../../components/AnimatedVideoText/AnimatedVideoText";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import MarketplaceBike from "../../components/MarketplaceBike/MarketplaceBike";
import Testimonials from "../../components/Testimonials/Testimonials";
import BookingSection from "../../components/BookingSection/BookingSection";
import Footer from "../../components/Footer/Footer";

import accidentVideo from "../../assets/videos/accident.mp4";
import brokenHandle from "../../assets/images/brokenhandle.png";
import brokenBike from "../../assets/images/brokenbike.png";
import brokenBike2 from "../../assets/images/brokenbike2.png";
import AccessoriesSection from "../../components/AccessoriesSection/AccessoriesSection";
import FAQ from "../../components/FAQ/FAQ";

export default function AccidentRepair() {
    return (
        <>
            <Navbar />

            <WhatsApp />

            <AnimatedVideoText
                video={accidentVideo}
                lines={[
                    "Fast Track",
                    "Accident",
                    "Repair and",
                    "Restoration",
                    "with Custom",
                    "Mechanics",
                ]}
            />

            <div className="accident-sparehead">
                <h1>Accident Repair</h1>
            </div>

            <div className="accident-spareparts">
                <ServiceCard
                    heading="Accident Repair"
                    para="Powerful biodegradable cleaner and degreaser for the whole motorcycle."
                    image={brokenHandle}
                    btn="Book Now"
                />

                <ServiceCard
                    heading="Bike Restoration"
                    para="The High-Security Chain & Padlock Set provides strong, everyday security for motorcycles, scooters, and valuable equipment."
                    image={brokenBike}
                    btn="Book Now"
                />
            </div>

            <MarketplaceBike
                head1="Accident"
                head2="Repair"
                para={`Motorcycle accident repairs are all about restoring your pride and joy to its former glory, whether it’s a minor scratch or major structural damage. Custom mechanics offers Expert Motorcycle Accident Repairs in Bermuda.

                This service ensures you get back in the saddle safely and confidently.Skilled mechanics with a deep understanding of bike engineering will handle every detail, using premium tools and genuine parts.`}
                image={brokenHandle}
            />

            <MarketplaceBike
                variant="parallax"
                head1="Bike"
                head2="Restoration"
                para="Bike restoration brings an older or damaged motorcycle back to life. The bike is inspected, repaired and refinished with care, from engine work to fresh paint and detailing. It keeps the original character of the machine while making it safer, cleaner and ready for the road again."
                image={brokenBike2}
            />

            <AccessoriesSection />
            <Testimonials />
            <FAQ />
            <Footer />
        </>
    );
}
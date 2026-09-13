import Navbar from "../../components/Navbar/Navbar";
import Whatsapp from "../../components/WhatsApp/WhatsApp";
import Footer from "../../components/Footer/Footer";
import AnimatedVideoText from "../../components/AnimatedVideoText/AnimatedVideoText";
import engineVideo from "../../assets/videos/engine.mp4";
import ChooseUsBox from "../../components/ChooseUsBox/ChooseUsBox";
import { tcdChooseUs } from "../../data/tcdChooseUs";
import CardSection from "../../components/CardSection/CardSection";
import { tcdCards } from "../../data/tcdCards";
import AccessoriesSection from '../../components/AccessoriesSection/AccessoriesSection';
import Testimonials from '../../components/Testimonials/Testimonials';
import FAQ from '../../components/FAQ/FAQ';
import MarketplaceBike from "../../components/MarketplaceBike/MarketplaceBike";
import bikedestr from "../../assets/images/bikedestr.png";
import doc from "../../assets/images/doc.png";

export default function TCDTesting() {
    return (
        <>
            <Navbar />
            <Whatsapp />
            <AnimatedVideoText
                video={engineVideo}
                lines={[
                    "TCD Testing",
                    "For Your Bike",
                    "Ensure Safety",
                    "& Performance",
                    "With Precision Diagnostics",
                    "By Custom Mechanics Limited",
                ]}
            />
            <CardSection
                title="TCD Testing"
                cards={tcdCards}
            />
            <MarketplaceBike
                head1="Bike"
                head2="Inspection"
                para="Ensure your bike is in top condition with our comprehensive bike inspections in Bermuda. At Custom Mechanics Limited, our expert mechanics check every critical component—from brakes and suspension to engine and electrical systems—to detect issues before they become costly repairs. Regular complete bike inspections improve safety, reliability, and performance, giving riders peace of mind and a smoother, more dependable ride every time."
                image={bikedestr}
            />
            <ChooseUsBox items={tcdChooseUs} />
            <MarketplaceBike
                variant="parallax"
                head1="TCD"
                head2="Prep, Pass, Renewal"
                para="At Custom Mechanics Limited in Bermuda, we make TCD prep, testing, and renewal hassle-free for bike owners. Our expert mechanics guide you through thorough TCD preparation, ensuring your bike meets all safety and performance standards."
                image={doc}
            />
            <AccessoriesSection />
            <Testimonials />
            <FAQ />
            <Footer />
        </>
    )
}

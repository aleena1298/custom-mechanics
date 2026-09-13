import Navbar from "../../components/Navbar/Navbar";
import Whatsapp from "../../components/WhatsApp/WhatsApp";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import AnimatedVideoText from "../../components/AnimatedVideoText/AnimatedVideoText";
import video from "../../assets/videos/1125-optimized.mp4";
import "./Accessories.css";
import AccessoriesSection from "../../components/AccessoriesSection/AccessoriesSection";
export default function Accessories() {
    return (
        <>
            <Navbar />
            <AnimatedVideoText
                video={video}
                lines={[
                    "Get All",
                    "Accessories And Spare",
                    "Parts",
                    "From Custom",
                    "Mechanics"
                ]}

            />
            <AccessoriesSection />
            <Whatsapp />
            <Testimonials />
            <FAQ />
            <Footer />
        </>
    );
}
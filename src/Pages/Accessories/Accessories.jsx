import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Whatsapp from "../../components/WhatsApp/WhatsApp";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import AnimatedVideoText from "../../components/AnimatedVideoText/AnimatedVideoText";
import video from "../../assets/videos/1125.mp4";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import motulSpray from "../../assets/images/motulspray.png";
import chainLock from "../../assets/images/chainlock.png";
import handlebarLock from "../../assets/images/handlebarlock.png";
import chainCleaner from "../../assets/images/chaincleaner.png";
import "./Accessories.css";
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


            <div className= "spareparts">
            <ServiceCard
                heading="E2 Moto Wash"
                para="Powerful biodegradable cleaner and degreaser for the whole motorcycle."
                image={motulSpray}
                btn="Buy Now"
            />

            <ServiceCard
                heading="Chain Lock"
                para="The High-Security Chain & Padlock Set provides strong, everyday security for motorcycles, scooters, and valuable equipment."
                image={chainLock}
                btn="Buy Now"
            />

            <ServiceCard
                heading="Handlebar Lock"
                para="handlebar lock provides a quick and effective way to secure your motorcycle, scooter, or ATV"
                image={handlebarLock}
                btn="Buy Now"
            />

            <ServiceCard
                heading="Chain Cleaner"
                para="MOTUL CHAIN CLEAN cleans all types of motorcycle chains (road and off-road) and those of other vehicles"
                image={chainCleaner}
                btn="Buy Now"
            />
            </div>


            <Whatsapp />
            <Testimonials />
            <FAQ />
            <Footer />
        </>
    );
}
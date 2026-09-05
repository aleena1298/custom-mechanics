import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Whatsapp from "../../components/WhatsApp/WhatsApp";
import Footer from "../../components/Footer/Footer";
import AnimatedVideoText from "../../components/AnimatedVideoText/AnimatedVideoText";
import accidentVideo from "../../assets/videos/accident.mp4";
import Testimonials from '../../components/Testimonials/Testimonials';
import FAQ from '../../components/FAQ/FAQ';

export default function AccidentRepair() {
    return (
        <>
            <Navbar />
            <AnimatedVideoText
                video={accidentVideo}
                lines={[
                "FAST TRACK",
                "ACCIDENT",
                "REPAIR",
                "& RESTORATION",
                "WITH CUSTOM",
                "MECHANICS"
            ]}
            />
            <Testimonials />
            <FAQ />
            <Whatsapp />
            <Footer />
        </>
    )
}

import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Whatsapp from "../../components/WhatsApp/WhatsApp";
import Footer from "../../components/Footer/Footer";
import AnimatedVideoText from "../../components/AnimatedVideoText/AnimatedVideoText";
import video from "../../assets/videos/1130.mp4";   
import Testimonials from '../../components/Testimonials/Testimonials';
import FAQ from '../../components/FAQ/FAQ';

export default function CarbeuratorAndOil() {
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
    <Testimonials />
    <FAQ />
    <Footer />
    </>
  )
}

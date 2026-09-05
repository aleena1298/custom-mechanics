import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Whatsapp from "../../components/WhatsApp/WhatsApp";
import Footer from "../../components/Footer/Footer";
import AnimatedVideoText from "../../components/AnimatedVideoText/AnimatedVideoText";
import brakedisk from "../../assets/images/brakedisk.png";
import Testimonials from '../../components/Testimonials/Testimonials';
import FAQ from '../../components/FAQ/FAQ';

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
    <Testimonials />
    <FAQ/>
    <Footer/>

    </>
  )
}

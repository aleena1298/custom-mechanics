import React from 'react'
import WhatsApp from '../../components/WhatsApp/WhatsApp'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import AnimatedVideoText from '../../components/AnimatedVideoText/AnimatedVideoText'
import video from '../../assets/videos/1125.mp4'
import Testimonials from '../../components/Testimonials/Testimonials'
import FAQ from '../../components/FAQ/FAQ'

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
                    "Battery",
                    "Solutions",
                    "And",
                    "Replacement",
                    "With Custom",
                    "Mechanics",
                ]}
            />
            <Testimonials/>
            <FAQ />
            <Footer />
        </>
    )
}

import React from 'react'
import WhatsApp from '../../components/WhatsApp/WhatsApp';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Testimonials from '../../components/Testimonials/Testimonials'
import FAQ from '../../components/FAQ/FAQ'  
import AnimationedVideoText from '../../components/AnimatedVideoText/AnimatedVideoText'
import engine from '../../assets/videos/engine.mp4'

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
    <WhatsApp />
    <Testimonials />
    <FAQ />
    <Footer />

    </>
  )
}

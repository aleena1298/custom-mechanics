import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Whatsapp from "../../components/WhatsApp/WhatsApp";
import Footer from "../../components/Footer/Footer";
import SparePartCard from "../../components/SparePartCard/SparePartCard";
import AnimatedVideoText from "../../components/AnimatedVideoText/AnimatedVideoText";
import stamp from "../../assets/images/stamp.png";
import file from "../../assets/images/file.png";
import engineVideo from "../../assets/videos/engine.mp4";
import "./TCDTesting.css";

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
            <div className="spare-head">
                <h1>TCD Testing</h1>
            </div>
            <div className="spare-parts">
                <SparePartCard
                    heading="TCD Testing"
                    para="At Custom Mechanics, we handle everything from Safety Checks to Paperwork, ensuring your bike is perfectly prepared for its TCD Pass."
                    image={stamp}
                    btn="Contact Now"
                />

                <SparePartCard
                    heading="Documentation"
                    para="We handle all TCD paperwork, from prep to renewal, making the process quick and hassle-free in Bermuda. Save time and stay road-ready with our support."
                    image={file}
                    btn="Contact Now"
                />
            </div>
            <Footer />
        </>
    )
}

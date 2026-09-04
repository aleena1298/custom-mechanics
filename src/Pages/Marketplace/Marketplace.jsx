import Navbar from "../../components/Navbar/Navbar.jsx";
import MarketplaceSlider from "../../components/MarketplaceSlider/MarketplaceSlider.jsx";
// import MarketplaceProducts from "../../components/MarketplaceProducts/MarketplaceProducts.jsx";
import WhatsApp from "../../components/WhatsApp/WhatsApp.jsx";
import Footer from "../../components/Footer/Footer.jsx";

export default function Marketplace() {
  return (
    <>
      <Navbar />

      <MarketplaceSlider />
      {/* <MarketplaceProducts /> */}

      <WhatsApp />
      <Footer />
    </>
  );
}
import Navbar from "../../components/Navbar/Navbar.jsx";
import MarketplaceSlider from "../../components/MarketplaceSlider/MarketplaceSlider.jsx";
// import MarketplaceProducts from "../../components/MarketplaceProducts/MarketplaceProducts.jsx";
import WhatsApp from "../../components/WhatsApp/WhatsApp.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import MarketplaceBike from "../../components/MarketplaceBike/MarketplaceBike.jsx";
import aerox from "../../assets/images/Yamaha Aerox YECVT.png";
import nmaxStd from "../../assets/images/yamaha nmax std.png";
import nmaxTechMax from "../../assets/images/Yamaha Nmax Tech max].png";
import mio from "../../assets/images/Yamaha mio.png";
import gearUltimata from "../../assets/images/Yamaha gear ultimata.png";
import hondaCrf150 from "../../assets/images/Honda crf 150.png";
import lexi from "../../assets/images/yamaha lexi.png";
import r125 from "../../assets/images/Yamaha r125.png";

export default function Marketplace() {
  return (
    <>
      <Navbar />

      <MarketplaceSlider />
      <MarketplaceBike
        head1="Yamaha"
        head2="Aerox YECVT"
        para="The 2025 Yamaha Aerox YECVT 125 features a liquid-cooled Blue Core engine with Yamaha's new Electric CVT for smoother performance and better fuel efficiency. It offers dual riding modes, smart-key access, LED lighting, and sporty 14-inch wheels, making it a perfect mix of style and power for city rides."
        image={aerox}
        primaryBtnText="Purchase"
        secondbtn="Buy Accessories"
        secondarypath="/accessories"
      />

      <MarketplaceBike
        variant="parallax"
        head1="Yamaha"
        head2="NMAX Std"
        para="The 2025 NMAX Std is powered by a 125cc Blue Core engine with YECVT technology, delivering smooth performance and excellent fuel efficiency. It features LED lighting, a digital display, and comfortable seating for daily city rides."
        image={nmaxStd}
        primaryBtnText="Purchase"
        secondbtn="Buy Accessories"
        secondarypath="/accessories"
      />

      <MarketplaceBike
        head1="Yamaha"
        head2="NMAX Tech/Max"
        para="The NMAX Tech Max 125 offers the same refined engine with added premium touches like traction control, smart key access, and Bluetooth connectivity. Perfect for riders who want style, comfort, and smart tech in one package."
        image={nmaxTechMax}
        primaryBtnText="Purchase"
        secondbtn="Buy Accessories"
        secondarypath="/accessories"
      />

      <MarketplaceBike
        variant="parallax"
        head1="Yamaha"
        head2="MIO"
        para="The 2025 Yamaha MIO 125 is light, efficient, and agile, equipped with a Blue Core air-cooled engine. Its modern design, easy handling, and low fuel consumption make it a dependable city companion."
        image={mio}
        primaryBtnText="Purchase"
        secondbtn="Buy Accessories"
        secondarypath="/accessories"
      />

      <MarketplaceBike
        variant="parallax"
        head1="Yamaha"
        head2="Gear Ultimata"
        para="Built for convenience, the Gear Ultimata 125 features a Blue Core engine with YECVT, dual riding modes, and USB charging. Compact yet powerful, it's perfect for everyday rides through busy streets."
        image={gearUltimata}
        primaryBtnText="Purchase"
        secondbtn="Buy Accessories"
        secondarypath="/accessories"
      />

      <MarketplaceBike
        head1="Honda"
        head2="CRF 150"
        para="The 2025 Honda CRF 150 comes with a 149cc air-cooled engine built for both dirt and street adventures. Its lightweight frame, long-travel suspension, and rugged design make it perfect for off-road enthusiasts and daily commuters alike."
        image={hondaCrf150}
        primaryBtnText="Purchase"
        secondbtn="Buy Accessories"
        secondarypath="/accessories"
      />

      <MarketplaceBike
        variant="parallax"
        head1="Yamaha"
        head2="Lexi LX"
        para="The 2025 Yamaha Lexi LX 125 features a Blue Core engine with YECVT transmission for smooth power and fuel efficiency. It offers LED lighting, a digital meter, and spacious seating, combining premium comfort with sporty looks."
        image={lexi}
        primaryBtnText="Purchase"
        secondbtn="Buy Accessories"
        secondarypath="/accessories"
      />

      <MarketplaceBike
        head1="Yamaha"
        head2="Yamaha r125"
        para="Inspired by the R-Series DNA, the 2025 Yamaha R125 packs a liquid-cooled 125cc engine with VVA technology. It delivers sharp handling, aggressive styling, and advanced braking, making it a true entry-level sportbike with big-bike performance."
        image={r125}
        primaryBtnText="Purchase"
        secondbtn="Buy Accessories"
        secondarypath="/accessories"
      />
      <WhatsApp />
      <Footer />
    </>
  );
}

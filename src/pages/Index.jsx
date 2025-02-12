import Navbar from "../components/sections/NavbarSocial";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import About from "../components/sections/About";
import AboutInstagram from "../components/sections/AboutInstagram";
import Cta from "../components/sections/Cta";
import Steps from "../components/sections/Steps";
import Maps from "../components/sections/Maps";
import Faq from "../components/sections/Faq";
import FooterSocial from "../components/sections/FooterSocial";

import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import BackToTopButton from "../components/interactives/BackToTopButton";

export default function Index() {
  return (
    <div>
      <Navbar LightMode={false} />
      <Hero appDownloadButtons={false} />
      <Features
        defaultFeature={true}
        button={false}
        modalWithCards={false}
        paragraphs={false}
        sixCards={false}
      />

      <About modal={true} />
      <AboutInstagram
        socialPrint={false}
        instagram={true}
        facebook={false}
        linkedin={false}
        x={false}
      />
      <Cta />
      <Steps />
      <Faq />
      <FooterSocial
        addres={false}
        instagram={true}
        facebook={false}
        linkedin={false}
        x={false}
        obs={false}
      />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </div>
  );
}

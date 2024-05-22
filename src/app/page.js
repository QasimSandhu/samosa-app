import AboutSection from "@/components/about";
import Header from "@/components/header/header";
import MainBanner from "@/components/main-banner";
import OurMenuSection from "@/components/our-menu";
import './page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Testimonials from "@/components/testiMonials";
import SamosaSection from "@/components/samosaSection";
import ExploreSamosaSection from "@/components/exploreSamosaSection";
import GetQuote from "@/components/getQuote";
import GallerySlider from "@/components/gallerySlider";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="App">
      <Header />
      <div>
        <div>
          <MainBanner />
          <OurMenuSection />
          <AboutSection />
          <Testimonials />
          <SamosaSection />
          <ExploreSamosaSection />
          <GetQuote />
          <GallerySlider />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import PackagesSection from './components/PackagesSection';
import FacilitiesSection from './components/FacilitiesSection';
import MeetingRoomsSection from './components/MeetingRoomsSection';
import GallerySection from './components/GallerySection';
import HowItWorksSection from './components/HowItWorksSection';
import FaqSection from './components/FaqSection';
import EnquireSection from './components/EnquireSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1B1F1C]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <PackagesSection />
        <FacilitiesSection />
        <MeetingRoomsSection />
        <GallerySection />
        <HowItWorksSection />
        <FaqSection />
        <EnquireSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import PlaceSection from "./components/sections/PlaceSection";
import FaqSection from "./components/sections/FaqSection";
import HeroSection from "./components/sections/HeroSection";
import RsvpSection from "./components/sections/RsvpSection";
import ScheduleSection from "./components/sections/ScheduleSection";
import StorySection from "./components/sections/StorySection";
import ContactsSection from "./components/sections/ContactsSection";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <ScheduleSection />
        <RsvpSection />
        <FaqSection />
        <ContactsSection/>
        <PlaceSection />
      </main>
      <Footer />
    </>
  );
}

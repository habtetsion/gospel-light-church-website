import Hero from "../components/home/Hero";
import WelcomeSection from "../components/home/WelcomeSection";
import ServiceTimes from "../components/home/ServiceTimes";
import UpcomingEvents from "../components/home/UpcomingEvents";
import PhotoGallery from "../components/home/PhotoGallery";
import LiveSermon from "../components/sermons/LiveSermon";

export default function Home() {
  // Set this to true when you're live streaming, false otherwise
  const isLiveNow = false;

  return (
    <>
      <Hero />
      {/* Show live sermon at top of home page when streaming */}
      {isLiveNow && <LiveSermon />}
      <WelcomeSection />
      <ServiceTimes />
      <UpcomingEvents />
      <PhotoGallery />
    </>
  );
}

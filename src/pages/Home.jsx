import Hero from '../components/home/Hero';
import WelcomeSection from '../components/home/WelcomeSection';
import ServiceTimes from '../components/home/ServiceTimes';
import UpcomingEvents from '../components/home/UpcomingEvents';
import PhotoGallery from '../components/home/PhotoGallery';

export default function Home() {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <ServiceTimes />
      <UpcomingEvents />
      <PhotoGallery />
    </>
  );
}

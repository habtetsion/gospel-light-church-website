import { Link } from 'react-router-dom';
import Container from '../common/Container';
import Button from '../common/Button';
import { HiCalendar, HiLocationMarker } from 'react-icons/hi';

export default function FeaturedEvent() {
  return (
    <section className="section-padding bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          {/* Event Image */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src="/images/events/easter-conference-2026.JPG"
                alt="Easter Conference - Grand Opening & 35th Anniversary"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Event Details */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-yellow-400 text-purple-900 rounded-full font-bold text-sm mb-4">
              SPECIAL EVENT
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 leading-tight">
              Easter Conference
            </h2>

            <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-6 text-yellow-300">
              Grand Opening & 35th Anniversary
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3 justify-center lg:justify-start">
                <HiCalendar className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">April 3-5, 2026</p>
                  <div className="text-purple-200 text-sm space-y-1 mt-2">
                    <p>Friday: 6:00 PM - 9:00 PM</p>
                    <p>Saturday: 10:00 AM - 12:30 PM & 4:00 PM - 8:00 PM</p>
                    <p>Sunday: 10:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3 justify-center lg:justify-start">
                <HiLocationMarker className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Gospel Light Eritrean Baptist Church</p>
                  <p className="text-purple-200 text-sm">11110 Garland Rd. Dallas TX 75218</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8">
              <p className="text-sm text-purple-100 mb-2">Special Guests:</p>
              <p className="font-semibold text-lg">Pastor Yonatan Abrham & Singer Sosuna Samuel</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                to="/events"
                size="lg"
                className="bg-yellow-400 text-purple-900 hover:bg-yellow-300 border-0 shadow-lg"
              >
                View All Events
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

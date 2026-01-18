import Container from '../common/Container';
import Card from '../common/Card';
import Button from '../common/Button';
import { HiClock, HiLocationMarker, HiUserGroup } from 'react-icons/hi';

export default function ServiceTimes() {
  const services = [
    {
      name: 'Sunday Worship Service',
      time: '10:00 AM',
      description: 'Join us for uplifting worship, inspiring messages, and fellowship.',
      icon: HiUserGroup,
    },
    {
      name: 'Friday Prayer Meeting',
      time: '7:00 PM',
      description: 'Join us for prayer and Bible study for spiritual refreshment.',
      icon: HiClock,
    },
    {
      name: 'Location',
      address: '11110 Garland Rd, Dallas, TX 75218',
      description: 'Find us in the heart of Dallas.',
      icon: HiLocationMarker,
    },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold mb-4">
            Join Us for Worship
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We would love to see you! Here are our regular service times and location.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2 text-neutral-900">
                {service.name}
              </h3>
              {service.time && (
                <p className="text-2xl font-bold text-primary-600 mb-3">
                  {service.time}
                </p>
              )}
              {service.address && (
                <p className="text-base font-medium text-neutral-800 mb-3">
                  {service.address}
                </p>
              )}
              <p className="text-neutral-600">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button to="/contact" variant="primary" size="lg">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}

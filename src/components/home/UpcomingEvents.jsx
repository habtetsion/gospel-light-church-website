import Container from '../common/Container';
import Card from '../common/Card';
import Button from '../common/Button';
import { HiCalendar, HiClock, HiLocationMarker } from 'react-icons/hi';

export default function UpcomingEvents() {
  const events = [
    {
      id: 1,
      title: 'Sunday Worship Service',
      date: 'Every Sunday',
      time: '10:00 AM',
      location: 'Main Sanctuary',
      category: 'Worship',
    },
    {
      id: 2,
      title: 'Youth Group Meeting',
      date: 'Every Friday',
      time: '6:00 PM',
      location: 'Youth Center',
      category: 'Youth',
    },
    {
      id: 3,
      title: 'Community Outreach',
      date: 'Last Saturday',
      time: '9:00 AM',
      location: 'Community Center',
      category: 'Outreach',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Stay connected with our church community through various events and activities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {events.map((event) => (
            <Card key={event.id}>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                  {event.category}
                </span>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-neutral-900">
                {event.title}
              </h3>
              <div className="space-y-2 text-neutral-600">
                <div className="flex items-center space-x-2">
                  <HiCalendar className="w-5 h-5 text-primary-500" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <HiClock className="w-5 h-5 text-primary-500" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <HiLocationMarker className="w-5 h-5 text-primary-500" />
                  <span>{event.location}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button to="/events" variant="outline" size="lg">
            View All Events
          </Button>
        </div>
      </Container>
    </section>
  );
}

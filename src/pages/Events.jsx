import { useState } from 'react';
import Container from '../components/common/Container';
import EventCalendar from '../components/events/EventCalendar';
import EventList from '../components/events/EventList';
import { getUpcomingEvents } from '../data/events';
import { HiViewGrid, HiViewList } from 'react-icons/hi';

export default function Events() {
  const [view, setView] = useState('list'); // 'calendar' or 'list'
  const upcomingEvents = getUpcomingEvents();

  return (
    <div className="bg-neutral-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Church Events
          </h1>
          <p className="text-xl text-primary-50 max-w-2xl">
            Join us for worship, fellowship, and community activities.
          </p>
        </Container>
      </div>

      {/* Events Section */}
      <section className="section-padding">
        <Container>
          {/* View Toggle */}
          <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-heading font-bold text-neutral-900">
                Upcoming Events
              </h2>
              <p className="text-neutral-600 mt-1">
                {upcomingEvents.length} {upcomingEvents.length === 1 ? 'event' : 'events'} scheduled
              </p>
            </div>

            {/* Calendar/List Toggle */}
            <div className="flex bg-neutral-100 rounded-lg p-1">
              <button
                onClick={() => setView('list')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  view === 'list'
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <HiViewList className="w-5 h-5" />
                <span>List</span>
              </button>
              <button
                onClick={() => setView('calendar')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  view === 'calendar'
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <HiViewGrid className="w-5 h-5" />
                <span>Calendar</span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {view === 'calendar' ? (
              <>
                {/* Calendar View */}
                <div className="lg:col-span-2">
                  <EventCalendar />
                </div>

                {/* Sidebar - Upcoming Events */}
                <div>
                  <div className="bg-white rounded-xl shadow-soft p-6 sticky top-24">
                    <h3 className="text-lg font-heading font-bold mb-4">
                      Coming Soon
                    </h3>
                    <div className="space-y-4">
                      {getUpcomingEvents(5).map((event) => {
                        const eventDate = new Date(event.date);
                        const monthShort = eventDate.toLocaleDateString('en-US', { month: 'short' });
                        const day = eventDate.getDate();

                        return (
                          <div key={event.id} className="flex space-x-3 pb-4 border-b border-neutral-200 last:border-b-0">
                            <div className="bg-primary-100 text-primary-700 rounded-lg p-2 flex flex-col items-center justify-center min-w-[50px] h-[50px]">
                              <div className="text-lg font-bold">{day}</div>
                              <div className="text-xs">{monthShort}</div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-sm text-neutral-900 truncate">
                                {event.title}
                              </h4>
                              <p className="text-xs text-neutral-600 mt-1">{event.time}</p>
                              <p className="text-xs text-neutral-500">{event.location}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* List View */
              <div className="lg:col-span-3">
                <EventList />
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}

import { useState } from 'react';
import EventCard from './EventCard';
import { getUpcomingEvents } from '../../data/events';

export default function EventList() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const upcomingEvents = getUpcomingEvents();

  // Get unique categories
  const categories = ['All', ...new Set(upcomingEvents.map(e => e.category))];

  // Filter events by category
  const filteredEvents = selectedCategory === 'All'
    ? upcomingEvents
    : upcomingEvents.filter(e => e.category === selectedCategory);

  return (
    <div>
      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-primary-500 text-white'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Event List */}
      {filteredEvents.length > 0 ? (
        <div className="space-y-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-neutral-100 rounded-xl">
          <p className="text-neutral-600">No upcoming events in this category.</p>
        </div>
      )}
    </div>
  );
}

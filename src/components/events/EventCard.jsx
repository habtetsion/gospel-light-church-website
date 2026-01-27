import { HiCalendar, HiClock, HiLocationMarker } from 'react-icons/hi';
import { formatEventDate } from '../../data/events';
import Card from '../common/Card';

export default function EventCard({ event }) {
  // Format date for display (parse as local date to avoid timezone issues)
  const [year, month, day] = event.date.split('-').map(Number);
  const eventDate = new Date(year, month - 1, day);
  const monthShort = eventDate.toLocaleDateString('en-US', { month: 'short' });
  const dayNumber = eventDate.getDate();

  return (
    <Card className="overflow-hidden p-0 flex flex-col h-full">
      <div className="flex">
        {/* Date Badge */}
        <div className="bg-primary-500 text-white p-6 flex flex-col items-center justify-center min-w-[100px]">
          <div className="text-3xl font-bold">{dayNumber}</div>
          <div className="text-sm uppercase tracking-wide">{monthShort}</div>
        </div>

        {/* Event Info */}
        <div className="p-6 flex-1">
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-3">
            {event.category}
            {event.recurring && <span className="ml-1">• {event.recurring}</span>}
          </span>

          {/* Title */}
          <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3">
            {event.title}
          </h3>

          {/* Meta Info */}
          <div className="space-y-2 mb-4 text-sm text-neutral-600">
            <div className="flex items-center space-x-2">
              <HiCalendar className="w-4 h-4 text-primary-500 flex-shrink-0" />
              <span>{formatEventDate(event.date)}</span>
            </div>

            <div className="flex items-center space-x-2">
              <HiClock className="w-4 h-4 text-primary-500 flex-shrink-0" />
              <span>
                {event.time}
                {event.endTime && ` - ${event.endTime}`}
              </span>
            </div>

            {event.location && (
              <div className="flex items-center space-x-2">
                <HiLocationMarker className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <span>{event.location}</span>
              </div>
            )}
          </div>

          {/* Description */}
          {event.description && (
            <p className="text-neutral-600 text-sm line-clamp-3">
              {event.description}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}

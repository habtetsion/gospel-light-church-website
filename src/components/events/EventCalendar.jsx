import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { hasEvents, getEventsForDate, formatEventDate } from '../../data/events';
import { HiClock, HiLocationMarker } from 'react-icons/hi';

export default function EventCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeStartDate, setActiveStartDate] = useState(new Date());

  // Get events for selected date
  const dateString = selectedDate.toISOString().split('T')[0];
  const dayEvents = getEventsForDate(dateString);

  // Custom tile content to show dots on dates with events
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      if (hasEvents(date)) {
        return (
          <div className="flex justify-center mt-1">
            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
          </div>
        );
      }
    }
    return null;
  };

  // Custom tile class to highlight dates with events
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      if (hasEvents(date)) {
        return 'has-events';
      }
    }
    return null;
  };

  return (
    <div>
      {/* Calendar */}
      <div className="bg-white rounded-xl shadow-soft p-6 mb-6">
        <style>{`
          .react-calendar {
            width: 100%;
            border: none;
            font-family: inherit;
          }

          .react-calendar__navigation button {
            font-size: 1rem;
            font-weight: 600;
            color: #262626;
            min-width: 44px;
          }

          .react-calendar__navigation button:hover {
            background-color: #f5f5f5;
          }

          .react-calendar__tile {
            padding: 1rem 0.5rem;
            font-size: 0.875rem;
          }

          .react-calendar__tile:enabled:hover {
            background-color: #e0f2fe;
            border-radius: 0.5rem;
          }

          .react-calendar__tile--active {
            background-color: #0ea5e9 !important;
            color: white !important;
            border-radius: 0.5rem;
          }

          .react-calendar__tile--now {
            background-color: #bae6fd;
            border-radius: 0.5rem;
          }

          .react-calendar__tile.has-events {
            font-weight: 600;
            color: #0ea5e9;
          }

          .react-calendar__month-view__weekdays {
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            color: #737373;
          }
        `}</style>

        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          activeStartDate={activeStartDate}
          onActiveStartDateChange={({ activeStartDate }) => setActiveStartDate(activeStartDate)}
          tileContent={tileContent}
          tileClassName={tileClassName}
          minDetail="month"
        />
      </div>

      {/* Events for Selected Date */}
      <div className="bg-white rounded-xl shadow-soft p-6">
        <h3 className="text-xl font-heading font-bold mb-4">
          Events on {formatEventDate(dateString)}
        </h3>

        {dayEvents.length > 0 ? (
          <div className="space-y-4">
            {dayEvents.map((event) => (
              <div
                key={event.id}
                className="border-l-4 border-primary-500 bg-primary-50 p-4 rounded-r-lg"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-heading font-semibold text-neutral-900">
                    {event.title}
                  </h4>
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                    {event.category}
                  </span>
                </div>

                <div className="space-y-1 text-sm text-neutral-600 mb-2">
                  <div className="flex items-center space-x-2">
                    <HiClock className="w-4 h-4 text-primary-500" />
                    <span>
                      {event.time}
                      {event.endTime && ` - ${event.endTime}`}
                    </span>
                  </div>

                  {event.location && (
                    <div className="flex items-center space-x-2">
                      <HiLocationMarker className="w-4 h-4 text-primary-500" />
                      <span>{event.location}</span>
                    </div>
                  )}
                </div>

                {event.description && (
                  <p className="text-sm text-neutral-600">{event.description}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-neutral-500 text-center py-8">
            No events scheduled for this date.
          </p>
        )}
      </div>
    </div>
  );
}

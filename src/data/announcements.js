// Church Announcements Data
// Add your announcements here for special occasions or emergency notifications

export const announcements = [
  {
    id: 1,
    type: 'special',
    message: 'Join us for our special Easter celebration service on April 20th at 10:00 AM!',
    startDate: '2026-04-01',
    endDate: '2026-04-20',
    linkText: 'View Details',
    linkTo: '/events',
    linkHref: null,
    priority: 1
  },
  {
    id: 2,
    type: 'info',
    message: 'New Bible study classes starting next month. Registration now open for all age groups.',
    startDate: '2026-01-25',
    endDate: '2026-01-31',
    linkText: 'Learn More',
    linkTo: '/contact',
    linkHref: null,
    priority: 2
  },
  {
    id: 3,
    type: 'warning',
    message: 'Please note: Sunday service time has been moved to 11:00 AM this week only.',
    startDate: '2026-02-01',
    endDate: '2026-02-07',
    linkText: null,
    linkTo: null,
    linkHref: null,
    priority: 5
  },
  {
    id: 4,
    type: 'emergency',
    message: 'Service cancelled today due to weather conditions. Join us for online worship instead.',
    startDate: '2026-03-15',
    endDate: '2026-03-15',
    linkText: 'Watch Online',
    linkTo: '/sermons',
    linkHref: null,
    priority: 10
  }
];

// Helper function to parse date string as local date (avoiding timezone issues)
const parseLocalDate = (dateString) => {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
};

// Helper function to check if an announcement is currently active
export const isAnnouncementActive = (announcement) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const start = parseLocalDate(announcement.startDate);
  const end = parseLocalDate(announcement.endDate);

  return today >= start && today <= end;
};

// Helper function to get the active announcement with highest priority
export const getActiveAnnouncement = () => {
  const active = announcements
    .filter(isAnnouncementActive)
    .sort((a, b) => b.priority - a.priority); // Highest priority first

  return active.length > 0 ? active[0] : null;
};

// Helper function to get all active announcements (for future use)
export const getAllActiveAnnouncements = () => {
  return announcements
    .filter(isAnnouncementActive)
    .sort((a, b) => b.priority - a.priority);
};

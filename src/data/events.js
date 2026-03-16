// Church Events Data
// Add your upcoming events here

export const events = [
  {
    id: 1,
    title: "Sunday Worship Service",
    date: "2025-12-28",
    time: "10:00 AM",
    endTime: "12:00 PM",
    location: "Main Sanctuary",
    description:
      "Join us for worship, prayer, and a powerful message from God's Word.",
    category: "Worship",
    recurring: "weekly", // weekly, monthly, or null for one-time
    image: null,
  },
  {
    id: 2,
    title: "Friday Prayer Meeting",
    date: "2025-12-26",
    time: "7:00 PM",
    endTime: "8:30 PM",
    location: "Prayer Room",
    description: "Gather with us for prayer and Bible study.",
    category: "Prayer",
    recurring: "weekly",
    image: null,
  },
  {
    id: 3,
    title: "Christmas Celebration",
    date: "2025-12-25",
    time: "10:00 AM",
    endTime: "1:00 PM",
    location: "Main Sanctuary",
    description:
      "Celebrate the birth of our Savior with special worship, fellowship, and refreshments.",
    category: "Special Event",
    recurring: null,
    image: null,
  },
  {
    id: 4,
    title: "New Year's Eve Service",
    date: "2025-12-31",
    time: "9:00 PM",
    endTime: "12:30 AM",
    location: "Main Sanctuary",
    description:
      "Ring in the New Year with praise, worship, and prayer as we thank God for His faithfulness.",
    category: "Special Event",
    recurring: null,
    image: null,
  },
  {
    id: 5,
    title: "Youth Fellowship",
    date: "2026-01-04",
    time: "6:00 PM",
    endTime: "8:00 PM",
    location: "Youth Center",
    description: "Youth gathering for games, worship, and discussion.",
    category: "Youth",
    recurring: "weekly",
    image: null,
  },
  {
    id: 6,
    title: "Community Outreach",
    date: "2026-01-11",
    time: "9:00 AM",
    endTime: "2:00 PM",
    location: "Community Center",
    description: "Serve our community with food distribution and prayer.",
    category: "Outreach",
    recurring: "monthly",
    image: null,
  },
  {
    id: 7,
    title: "Men's ministry fellowship",
    date: "2026-01-25",
    time: "1:00 PM",
    endTime: "3:00 PM",
    location: "Youth Center",
    description: "Youth gathering for games, worship, and discussion.",
    category: "Men age 18+",
    recurring: "monthly",
    image: null,
  },
  {
    id: 8,
    title: "Easter Conference - Grand Opening & 35th Anniversary (Friday)",
    date: "2026-04-03",
    time: "6:00 PM",
    endTime: "9:00 PM",
    location: "Gospel Light Eritrean Baptist Church, 11110 Garland Rd. Dallas TX 75218",
    description: "Join us for the grand opening of our Easter Conference celebrating 35 years of God's faithfulness. Special guests: Pastor Yonatan Abrham and Singer Sosuna Samuel.",
    category: "Special Event",
    recurring: null,
    image: "/images/events/easter-conference-2026.JPG",
  },
  {
    id: 9,
    title: "Easter Conference - 35th Anniversary (Saturday Morning)",
    date: "2026-04-04",
    time: "10:00 AM",
    endTime: "12:30 PM",
    location: "Gospel Light Eritrean Baptist Church, 11110 Garland Rd. Dallas TX 75218",
    description: "Continue our Easter Conference celebration with morning worship and teaching. Part of our 35th Anniversary celebration with Pastor Yonatan Abrham and Singer Sosuna Samuel.",
    category: "Special Event",
    recurring: null,
    image: "/images/events/easter-conference-2026.JPG",
  },
  {
    id: 10,
    title: "Easter Conference - 35th Anniversary (Saturday Evening)",
    date: "2026-04-04",
    time: "4:00 PM",
    endTime: "8:00 PM",
    location: "Gospel Light Eritrean Baptist Church, 11110 Garland Rd. Dallas TX 75218",
    description: "Join us for the evening session of our Easter Conference celebrating 35 years of ministry. Special guests: Pastor Yonatan Abrham and Singer Sosuna Samuel.",
    category: "Special Event",
    recurring: null,
    image: "/images/events/easter-conference-2026.JPG",
  },
  {
    id: 11,
    title: "Easter Conference - 35th Anniversary (Sunday Service)",
    date: "2026-04-05",
    time: "10:00 AM",
    endTime: "12:00 PM",
    location: "Gospel Light Eritrean Baptist Church, 11110 Garland Rd. Dallas TX 75218",
    description: "Conclude our Easter Conference and 35th Anniversary celebration with a powerful Sunday worship service. Special guests: Pastor Yonatan Abrham and Singer Sosuna Samuel.",
    category: "Special Event",
    recurring: null,
    image: "/images/events/easter-conference-2026.JPG",
  },
];

// Helper function to parse date string as local date (avoiding timezone issues)
const parseLocalDate = (dateString) => {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
};

// Helper function to format event date
export const formatEventDate = (dateString) => {
  const date = parseLocalDate(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Helper function to format short date
export const formatShortDate = (dateString) => {
  const date = parseLocalDate(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

// Helper function to get events for a specific date
export const getEventsForDate = (dateString) => {
  return events.filter((event) => event.date === dateString);
};

// Helper function to get upcoming events
export const getUpcomingEvents = (limit = null) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = events
    .filter((event) => parseLocalDate(event.date) >= today)
    .sort((a, b) => parseLocalDate(a.date) - parseLocalDate(b.date));

  return limit ? upcoming.slice(0, limit) : upcoming;
};

// Helper function to check if date has events
export const hasEvents = (date) => {
  const dateString = date.toISOString().split("T")[0];
  return events.some((event) => event.date === dateString);
};

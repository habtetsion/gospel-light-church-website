// Add your YouTube sermon videos here
// To get the video ID: From a YouTube URL like https://www.youtube.com/watch?v=VIDEO_ID
// Copy the VIDEO_ID part

export const sermons = [
  {
    id: 1,
    title: "ዝተባረኸ ሂወት",
    speaker: "Pastor Biniam Asefaw",
    date: "2026-01-11",
    series: "",
    scripture: "",
    description: "Sunday worship service message.",
    videoId: "yFNTZmwnanw",
    thumbnail: "https://img.youtube.com/vi/yFNTZmwnanw/maxresdefault.jpg",
    duration: "",
    category: "Sunday Service",
  },
  {
    id: 2,
    title: "ኣምልኾ ምልምማድ",
    speaker: "Pastor Biniam Asefaw",
    date: "2026-01-09",
    series: "",
    scripture: "",
    description: "Prayer meeting message.",
    videoId: "ijgrOb2Qajw",
    thumbnail: "https://img.youtube.com/vi/ijgrOb2Qajw/maxresdefault.jpg",
    duration: "",
    category: "Prayer Meeting",
  },
  {
    id: 3,
    title: "ኣምልኾ",
    speaker: "Pastor Biniam Asefaw",
    date: "2026-01-02",
    series: "",
    scripture: "",
    description: "Prayer meeting message.",
    videoId: "6_kwx3nB_YM",
    thumbnail: "https://img.youtube.com/vi/6_kwx3nB_YM/maxresdefault.jpg",
    duration: "",
    category: "Prayer Meeting",
  },
];

// Helper function to get YouTube URL from video ID
export const getYouTubeUrl = (videoId) =>
  `https://www.youtube.com/watch?v=${videoId}`;

// Helper function to format date
export const formatSermonDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

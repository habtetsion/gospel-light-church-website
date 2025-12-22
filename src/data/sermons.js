// Add your YouTube sermon videos here
// To get the video ID: From a YouTube URL like https://www.youtube.com/watch?v=VIDEO_ID
// Copy the VIDEO_ID part

export const sermons = [
  {
    id: 1,
    title: 'Sample Sermon - Faith and Hope',
    speaker: 'Pastor Name',
    date: '2024-12-15',
    series: 'Living by Faith',
    scripture: 'Hebrews 11:1',
    description: 'A powerful message about walking in faith and trusting God in uncertain times.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '45:30',
    category: 'Sunday Service',
  },
  {
    id: 2,
    title: 'Sample Sermon - God\'s Grace',
    speaker: 'Pastor Name',
    date: '2024-12-08',
    series: 'Living by Faith',
    scripture: 'Ephesians 2:8-9',
    description: 'Understanding the depth of God\'s amazing grace and what it means for our daily lives.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '42:15',
    category: 'Sunday Service',
  },
  {
    id: 3,
    title: 'Sample Sermon - The Power of Prayer',
    speaker: 'Pastor Name',
    date: '2024-12-01',
    series: 'Prayer Life',
    scripture: 'James 5:16',
    description: 'Exploring the transformative power of prayer in the life of a believer.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '38:45',
    category: 'Prayer Meeting',
  },
];

// Helper function to get YouTube URL from video ID
export const getYouTubeUrl = (videoId) => `https://www.youtube.com/watch?v=${videoId}`;

// Helper function to format date
export const formatSermonDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

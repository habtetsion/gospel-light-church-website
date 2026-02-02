import { YOUTUBE_CONFIG } from '../config/youtube';

/**
 * Fetches latest videos from YouTube channel using RSS feed via rss2json API
 * This service converts YouTube RSS feeds to JSON and handles CORS issues
 */
export async function fetchLatestSermons() {
  try {
    const { channelId, maxResults } = YOUTUBE_CONFIG;

    if (!channelId || channelId === 'YOUR_CHANNEL_ID_HERE') {
      console.warn('YouTube Channel ID not configured. Please update src/config/youtube.js');
      return [];
    }

    // YouTube RSS feed URL
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

    // Use rss2json API to convert RSS to JSON and bypass CORS
    // Free tier: 10,000 requests per day (returns ~15 latest videos by default)
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== 'ok') {
      throw new Error('Failed to fetch YouTube RSS feed');
    }

    // Transform YouTube RSS items to sermon format (limit to maxResults)
    const sermons = data.items.slice(0, maxResults).map((item, index) => {
      // Extract video ID from the link
      const videoId = item.link.split('v=')[1];

      // Extract publish date
      const publishDate = new Date(item.pubDate);

      return {
        id: index + 1,
        title: item.title,
        speaker: 'Pastor Biniam Asefaw', // Default speaker, can be customized
        date: publishDate.toISOString().split('T')[0], // Format: YYYY-MM-DD
        series: '',
        scripture: '',
        description: item.description || 'Sunday worship service message.',
        videoId: videoId,
        thumbnail: item.thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        duration: '',
        category: detectCategory(item.title, publishDate),
      };
    });

    return sermons;
  } catch (error) {
    console.error('Error fetching YouTube sermons:', error);
    // Return empty array on error to prevent app crash
    return [];
  }
}

/**
 * Detect sermon category based on title and publish date
 */
function detectCategory(title, publishDate) {
  const titleLower = title.toLowerCase();
  const dayOfWeek = publishDate.getDay(); // 0 = Sunday, 5 = Friday

  // Check title for keywords
  if (titleLower.includes('prayer') || titleLower.includes('ጸሎት')) {
    return 'Prayer Meeting';
  }

  // Check day of week (Friday = Prayer Meeting, Sunday = Sunday Service)
  if (dayOfWeek === 5) {
    return 'Prayer Meeting';
  }

  if (dayOfWeek === 0) {
    return 'Sunday Service';
  }

  // Default to Sunday Service
  return 'Sunday Service';
}

/**
 * Get YouTube video URL from video ID
 */
export const getYouTubeUrl = (videoId) =>
  `https://www.youtube.com/watch?v=${videoId}`;

/**
 * Format sermon date for display
 */
export const formatSermonDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

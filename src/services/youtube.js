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
    // Add timestamp to reduce caching issues
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}&_t=${Date.now()}`;

    const response = await fetch(apiUrl, { cache: 'no-cache' });

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

      // Try to extract actual service date from title
      const extractedDate = extractDateFromTitle(item.title);

      // If no date in title, parse publish date carefully to avoid timezone issues
      // pubDate format: "2026-01-25 23:40:14" (local time)
      const publishDateStr = extractDateFromPubDate(item.pubDate);

      // Use extracted date from title, otherwise use publish date
      const serviceDateStr = extractedDate || publishDateStr;

      // Parse the date string to get day of week for categorization
      // Use date string directly (without time) to avoid timezone shifting
      const serviceDate = new Date(serviceDateStr);

      // Extract speaker from title
      const speaker = extractSpeaker(item.title);

      return {
        id: index + 1,
        title: item.title,
        speaker: speaker,
        date: serviceDateStr, // Already in YYYY-MM-DD format
        series: '',
        scripture: '',
        description: item.description || 'Worship service message.',
        videoId: videoId,
        thumbnail: item.thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        duration: '',
        category: detectCategory(item.title, serviceDate),
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
 * Extract date from pubDate string without timezone conversion
 * pubDate format: "2026-01-25 23:40:14"
 * Returns: "2026-01-25" (YYYY-MM-DD)
 */
function extractDateFromPubDate(pubDateStr) {
  // Just extract the date part before the space
  return pubDateStr.split(' ')[0];
}

/**
 * Extract actual service date from video title if available
 * Looks for patterns like "Sunday January 25, 2026" or "Friday January 24, 2026"
 * Returns: "2026-01-25" (YYYY-MM-DD) or null
 */
function extractDateFromTitle(title) {
  // Pattern: Day Month DD, YYYY (e.g., "Sunday January 25, 2026")
  const datePattern = /(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),?\s+(\d{4})/i;
  const match = title.match(datePattern);

  if (match) {
    const monthNames = {
      'january': '01', 'february': '02', 'march': '03', 'april': '04',
      'may': '05', 'june': '06', 'july': '07', 'august': '08',
      'september': '09', 'october': '10', 'november': '11', 'december': '12'
    };

    const month = monthNames[match[2].toLowerCase()];
    const day = match[3].padStart(2, '0');
    const year = match[4];

    return `${year}-${month}-${day}`;
  }

  return null;
}

/**
 * Extract speaker name from video title
 * Looks for pattern "by [Name]"
 */
function extractSpeaker(title) {
  const speakerPattern = /by\s+([^-]+?)(?:\s+-|$)/i;
  const match = title.match(speakerPattern);

  if (match) {
    return match[1].trim();
  }

  // Default speaker
  return 'Pastor Biniam Asefaw';
}

/**
 * Detect sermon category based on title and service date
 */
function detectCategory(title, serviceDate) {
  const titleLower = title.toLowerCase();

  // Check for explicit day mentions in title
  if (titleLower.includes('friday') || titleLower.includes('ዓርቢ')) {
    return 'Prayer Meeting';
  }

  if (titleLower.includes('sunday') || titleLower.includes('ሰንበት')) {
    return 'Sunday Service';
  }

  // Check for special events
  if (titleLower.includes('conference') || titleLower.includes('special event')) {
    return 'Special Event';
  }

  // Check for Prayer Meeting keywords
  const prayerKeywords = ['prayer', 'ጸሎት', 'prayer meeting', 'prayer night', 'የጸሎት', 'ምሸት ጸሎት'];
  if (prayerKeywords.some(keyword => titleLower.includes(keyword))) {
    return 'Prayer Meeting';
  }

  // Check day of week from service date
  const dayOfWeek = serviceDate.getDay(); // 0 = Sunday, 5 = Friday

  // For "Live Program" videos, use smarter detection
  if (titleLower.includes('live program') || titleLower.includes('live stream')) {
    // Thursday or Friday uploads are Prayer Meetings
    if (dayOfWeek === 4 || dayOfWeek === 5) {
      return 'Prayer Meeting';
    }
    // Saturday uploads could be either (uploaded after Friday service)
    // Check the hour - if late Friday night it might show as Saturday in UTC
    if (dayOfWeek === 6) {
      return 'Prayer Meeting'; // Assume Friday service uploaded late
    }
    // Sunday, Monday, Tuesday uploads are Sunday Services
    return 'Sunday Service';
  }

  // Direct day of week detection for other videos
  // Friday = Prayer Meeting
  if (dayOfWeek === 5) {
    return 'Prayer Meeting';
  }

  // Thursday could be uploaded day for Friday service
  if (dayOfWeek === 4) {
    return 'Prayer Meeting';
  }

  // Sunday = Sunday Service
  if (dayOfWeek === 0) {
    return 'Sunday Service';
  }

  // Saturday could be uploaded day for Sunday service (uploaded in advance)
  if (dayOfWeek === 6) {
    return 'Sunday Service';
  }

  // Default to Sunday Service for Sermon/Worship videos
  return 'Sunday Service';
}

/**
 * Get YouTube video URL from video ID
 */
export const getYouTubeUrl = (videoId) =>
  `https://www.youtube.com/watch?v=${videoId}`;

/**
 * Format sermon date for display
 * Handles YYYY-MM-DD format without timezone conversion issues
 */
export const formatSermonDate = (dateString) => {
  // Parse YYYY-MM-DD manually to avoid timezone issues
  const [year, month, day] = dateString.split('-').map(Number);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                      'July', 'August', 'September', 'October', 'November', 'December'];

  return `${monthNames[month - 1]} ${day}, ${year}`;
};

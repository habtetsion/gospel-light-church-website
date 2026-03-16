import { HiCalendar, HiUser, HiBookOpen } from 'react-icons/hi';
import { formatSermonDate } from '../../data/sermons';
import Card from '../common/Card';

export default function SermonCard({ sermon }) {
  const youtubeUrl = `https://www.youtube.com/watch?v=${sermon.videoId}`;

  return (
    <Card className="overflow-hidden p-0">
      {/* Video Thumbnail */}
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative aspect-video bg-neutral-900 block"
      >
        <img
          src={sermon.thumbnail}
          alt={sermon.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        {sermon.duration && (
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
            {sermon.duration}
          </div>
        )}
      </a>

      {/* Sermon Info */}
      <div className="p-6">
        {/* Category Badge */}
        {sermon.category && (
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-3">
            {sermon.category}
          </span>
        )}

        {/* Title */}
        <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3">
          {sermon.title}
        </h3>

        {/* Meta Info */}
        <div className="space-y-2 mb-4 text-sm text-neutral-600">
          <div className="flex items-center space-x-2">
            <HiCalendar className="w-4 h-4 text-primary-500" />
            <span>{formatSermonDate(sermon.date)}</span>
          </div>

          {sermon.speaker && (
            <div className="flex items-center space-x-2">
              <HiUser className="w-4 h-4 text-primary-500" />
              <span>{sermon.speaker}</span>
            </div>
          )}

          {sermon.scripture && (
            <div className="flex items-center space-x-2">
              <HiBookOpen className="w-4 h-4 text-primary-500" />
              <span>{sermon.scripture}</span>
            </div>
          )}
        </div>

        {/* Description */}
        {sermon.description && (
          <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
            {sermon.description}
          </p>
        )}

        {/* Series */}
        {sermon.series && (
          <div className="pt-4 border-t border-neutral-200">
            <p className="text-xs text-neutral-500">
              Part of series: <span className="font-semibold text-neutral-700">{sermon.series}</span>
            </p>
          </div>
        )}

        {/* Action Button */}
        <div className="mt-4">
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 text-sm font-medium inline-flex items-center gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            Watch on YouTube →
          </a>
        </div>
      </div>
    </Card>
  );
}

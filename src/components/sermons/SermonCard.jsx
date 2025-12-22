import { useState } from 'react';
import ReactPlayer from 'react-player';
import { HiPlay, HiCalendar, HiUser, HiBookOpen } from 'react-icons/hi';
import { formatSermonDate } from '../../data/sermons';
import Card from '../common/Card';

export default function SermonCard({ sermon }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Card className="overflow-hidden p-0">
      {/* Video Player */}
      <div className="relative aspect-video bg-neutral-900">
        {isPlaying ? (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${sermon.videoId}`}
            width="100%"
            height="100%"
            controls
            playing
            config={{
              youtube: {
                playerVars: { modestbranding: 1 }
              }
            }}
          />
        ) : (
          <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
            <img
              src={sermon.thumbnail}
              alt={sermon.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <HiPlay className="w-8 h-8 text-primary-600 ml-1" />
              </div>
            </div>
            {sermon.duration && (
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                {sermon.duration}
              </div>
            )}
          </div>
        )}
      </div>

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

        {/* Watch on YouTube Link */}
        <div className="mt-4">
          <a
            href={`https://www.youtube.com/watch?v=${sermon.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 text-sm font-medium"
          >
            Watch on YouTube →
          </a>
        </div>
      </div>
    </Card>
  );
}

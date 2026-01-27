import {
  HiInformationCircle,
  HiExclamation,
  HiExclamationCircle,
  HiSparkles,
} from 'react-icons/hi';
import Button from '../common/Button';
import { getActiveAnnouncement } from '../../data/announcements';

export default function AnnouncementBanner() {
  const announcement = getActiveAnnouncement();

  // Don't render if no active announcements
  if (!announcement) return null;

  // Map announcement types to icons
  const iconMap = {
    info: HiInformationCircle,
    warning: HiExclamation,
    emergency: HiExclamationCircle,
    special: HiSparkles,
  };

  // Map announcement types to background colors
  const backgroundMap = {
    info: 'bg-primary-50',
    warning: 'bg-amber-50',
    emergency: 'bg-red-50',
    special: 'bg-secondary-50',
  };

  // Map announcement types to border colors
  const borderMap = {
    info: 'border-primary-500',
    warning: 'border-accent',
    emergency: 'border-red-500',
    special: 'border-secondary-500',
  };

  // Map announcement types to text colors
  const textColorMap = {
    info: 'text-primary-900',
    warning: 'text-amber-900',
    emergency: 'text-red-900',
    special: 'text-secondary-900',
  };

  // Map announcement types to icon colors
  const iconColorMap = {
    info: 'text-primary-500',
    warning: 'text-accent',
    emergency: 'text-red-500',
    special: 'text-secondary-500',
  };

  // Map announcement types to button variants
  const buttonVariantMap = {
    info: 'primary',
    warning: 'accent',
    emergency: 'outline',
    special: 'secondary',
  };

  // Get ARIA role based on type
  const ariaRole = announcement.type === 'emergency' ? 'alert' : 'status';

  const Icon = iconMap[announcement.type];
  const backgroundClass = backgroundMap[announcement.type];
  const borderClass = borderMap[announcement.type];
  const textColorClass = textColorMap[announcement.type];
  const iconColorClass = iconColorMap[announcement.type];
  const buttonVariant = buttonVariantMap[announcement.type];

  return (
    <div className={`${backgroundClass} border-l-4 ${borderClass}`} role={ariaRole}>
      <div className="container-custom">
        <div className="flex items-center gap-4 py-4 flex-col sm:flex-row">
          {/* Icon */}
          <Icon className={`w-6 h-6 flex-shrink-0 ${iconColorClass}`} aria-hidden="true" />

          {/* Message */}
          <p className={`flex-grow ${textColorClass} font-medium text-sm sm:text-base`}>
            {announcement.message}
          </p>

          {/* Optional CTA Button */}
          {(announcement.linkTo || announcement.linkHref) && (
            <Button
              to={announcement.linkTo}
              href={announcement.linkHref}
              variant={buttonVariant}
              size="sm"
              className="flex-shrink-0"
            >
              {announcement.linkText || 'Learn More'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

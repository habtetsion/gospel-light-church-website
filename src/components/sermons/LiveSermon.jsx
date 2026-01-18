import Container from "../common/Container";
import { HiStatusOnline } from "react-icons/hi";

/**
 * LiveSermon Component - Embeds YouTube live stream
 *
 * To get your YouTube Channel ID:
 * 1. Go to YouTube Studio (studio.youtube.com)
 * 2. Click Settings (bottom left) → Channel → Advanced settings
 * 3. Copy your Channel ID
 *
 * Or use this URL and replace YOUR_HANDLE:
 * https://www.youtube.com/@YOUR_HANDLE → View page source → Search for "channelId"
 */

export default function LiveSermon({ channelId = "UCl4bq_3WtsrvGz7xP6lQOLw" }) {
  // YouTube channel live URL - automatically shows the current live stream
  const liveEmbedUrl = `https://www.youtube.com/embed/live_stream?channel=${channelId}&autoplay=0`;

  return (
    <section className="section-padding bg-gradient-to-br from-red-50 via-white to-primary-50">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Live Badge */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-3 bg-red-600 text-white px-6 py-3 rounded-full shadow-lg animate-pulse">
              <HiStatusOnline className="w-6 h-6" />
              <span className="font-bold text-lg">LIVE NOW</span>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Watch Live Service
            </h2>
            <p className="text-lg text-neutral-600">
              Join us for our live worship service streaming now on YouTube
            </p>
          </div>

          {/* Video Player */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative aspect-video">
              <iframe
                src={liveEmbedUrl}
                title="Live Sermon"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Info Bar */}
            <div className="p-6 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-heading font-bold text-xl mb-1">
                    Sunday Worship Service
                  </h3>
                  <p className="text-primary-100">
                    Gospel Light Eritrean Baptist Church
                  </p>
                </div>
                <a
                  href={`https://www.youtube.com/channel/${channelId}/live`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent bg-white text-primary-700 hover:bg-primary-50 whitespace-nowrap"
                >
                  Open in YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Chat Section (Optional) */}
          <div className="mt-8 text-center">
            <p className="text-neutral-600 mb-4">
              Join the conversation and connect with other viewers in the
              YouTube chat
            </p>
            <a
              href={`https://www.youtube.com/channel/${channelId}/live`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              View Live Chat →
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

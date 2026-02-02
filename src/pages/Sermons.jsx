import { useState, useEffect } from 'react';
import Container from '../components/common/Container';
import SermonList from '../components/sermons/SermonList';
import LiveSermon from '../components/sermons/LiveSermon';
import { sermons as fallbackSermons } from '../data/sermons';
import { fetchLatestSermons } from '../services/youtube';
import { FaYoutube } from 'react-icons/fa';

export default function Sermons() {
  // Set this to true when you're live streaming, false otherwise
  const isLiveNow = false;

  // State for sermons data
  const [sermons, setSermons] = useState(fallbackSermons);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch sermons from YouTube on component mount
  useEffect(() => {
    async function loadSermons() {
      try {
        setLoading(true);
        const youtubeSermons = await fetchLatestSermons();

        // If we got sermons from YouTube, use them; otherwise use fallback
        if (youtubeSermons && youtubeSermons.length > 0) {
          setSermons(youtubeSermons);
        }
      } catch (err) {
        console.error('Failed to load YouTube sermons:', err);
        setError(err.message);
        // Keep using fallback sermons on error
      } finally {
        setLoading(false);
      }
    }

    loadSermons();
  }, []);

  return (
    <div className="bg-neutral-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Sermons & Messages
              </h1>
              <p className="text-xl text-primary-50 max-w-2xl">
                Watch and listen to inspiring messages from our worship services.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Live Sermon Section - Shows when live streaming */}
      {isLiveNow && <LiveSermon />}

      {/* Sermons Section */}
      <section className="section-padding">
        <Container>
          {/* YouTube Channel Link */}
          <div className="mb-12 bg-white rounded-xl shadow-soft p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <FaYoutube className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-neutral-900">
                    Subscribe to Our YouTube Channel
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Get notified when we upload new sermons and live streams
                  </p>
                </div>
              </div>
              <a
                href="https://www.youtube.com/@GospeLlightEritreanChurch"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Subscribe on YouTube
              </a>
            </div>
          </div>

          {/* Sermon Count */}
          <div className="mb-6">
            <h2 className="text-2xl font-heading font-bold text-neutral-900">
              Recent Sermons
            </h2>
            <p className="text-neutral-600 mt-2">
              {loading ? (
                'Loading latest sermons...'
              ) : (
                <>
                  {sermons.length} {sermons.length === 1 ? 'sermon' : 'sermons'} available
                  {error && (
                    <span className="text-amber-600 text-sm ml-2">
                      (Showing cached sermons)
                    </span>
                  )}
                </>
              )}
            </p>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                <p className="text-neutral-600">Loading sermons from YouTube...</p>
              </div>
            </div>
          ) : (
            /* Sermon List with Filters */
            <SermonList sermons={sermons} />
          )}

          {/* Load More / View All */}
          <div className="mt-12 text-center">
            <a
              href="https://www.youtube.com/@GospeLlightEritreanChurch/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-block"
            >
              View All Sermons on YouTube →
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}

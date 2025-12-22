import { useState } from 'react';
import SermonCard from './SermonCard';

export default function SermonList({ sermons }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(sermons.map(s => s.category))];

  // Filter sermons by category
  const filteredSermons = selectedCategory === 'All'
    ? sermons
    : sermons.filter(s => s.category === selectedCategory);

  return (
    <div>
      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-primary-500 text-white'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Sermon Grid */}
      {filteredSermons.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSermons.map((sermon) => (
            <SermonCard key={sermon.id} sermon={sermon} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-neutral-600">No sermons found in this category.</p>
        </div>
      )}
    </div>
  );
}

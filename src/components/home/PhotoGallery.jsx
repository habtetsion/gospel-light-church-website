import Container from '../common/Container';

export default function PhotoGallery() {
  const galleryImages = [
    {
      id: 1,
      src: `${import.meta.env.BASE_URL}images/hero/hero-worship.webp`,
      alt: 'Worship Service',
      title: 'Sunday Worship'
    },
    {
      id: 2,
      src: `${import.meta.env.BASE_URL}images/gallery/church-building.webp`,
      alt: 'Church Building',
      title: 'Our Church Home'
    },
    {
      id: 3,
      src: `${import.meta.env.BASE_URL}images/leadership/hq720.jpg`,
      alt: 'Pastor Biniam Asefaw',
      title: 'Our Pastor'
    },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold mb-4">
            Our Church Gallery
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Take a glimpse into our vibrant church community and worship services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-heading font-semibold text-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

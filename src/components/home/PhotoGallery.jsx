import Container from '../common/Container';

export default function PhotoGallery() {
  // Christmas Eve 2025 Photos
  const christmasPhotos = [
    'IMG_9871.JPG', 'IMG_9873.JPG', 'IMG_9876.JPG', 'IMG_9877.JPG', 'IMG_9878.JPG',
    'IMG_9889.JPG', 'IMG_9890.JPG', 'IMG_9899.JPG', 'IMG_9901.JPG', 'IMG_9905.JPG',
    'IMG_9906.JPG', 'IMG_9911.JPG', 'IMG_9912.JPG', 'IMG_9922.JPG', 'IMG_9931.JPG',
    'IMG_9934.JPG', 'IMG_9935.JPG', 'IMG_9936.JPG', 'IMG_9937.JPG', 'IMG_9938.JPG',
    'IMG_9939.JPG', 'IMG_9941.JPG', 'IMG_9946.JPG', 'IMG_9948.JPG', 'IMG_9950.JPG',
    'IMG_9952.JPG', 'IMG_9953.JPG', 'IMG_9955.JPG', 'IMG_9962.JPG'
  ].map((filename, index) => ({
    id: `christmas-${index}`,
    src: `${import.meta.env.BASE_URL}images/events/Christmas Eve 2025/${filename}`,
    alt: `Christmas Eve 2025 - Photo ${index + 1}`,
    title: 'Christmas Eve 2025'
  }));

  // New Year 2026 Photos
  const newYearPhotos = [
    'IMG_0155.JPG', 'IMG_0156.JPG', 'IMG_0157.JPG',
    'IMG_0158.JPG', 'IMG_0159.JPG', 'IMG_0160.JPG', 'IMG_0161.JPG', 'IMG_0162.JPG',
    'IMG_0163.JPG', 'IMG_0164.JPG', 'IMG_0165.JPG', 'IMG_0166.JPG', 'IMG_0167.JPG',
    'IMG_0168.JPG', 'IMG_0169.JPG', 'IMG_0170.JPG', 'IMG_0171.JPG', 'IMG_0172.JPG',
    'IMG_0178.JPG', 'IMG_0179.JPG', 'IMG_0180.JPG', 'IMG_0181.JPG', 'IMG_0182.JPG',
    'IMG_0183.JPG', 'IMG_0184.JPG', 'IMG_0185.JPG', 'IMG_0192.JPG', 'IMG_0193.JPG',
    'IMG_0194.JPG', 'IMG_0195.JPG', 'IMG_0203.JPG', 'IMG_0206.JPG', 'IMG_0208.JPG'
  ].map((filename, index) => ({
    id: `newyear-${index}`,
    src: `${import.meta.env.BASE_URL}images/events/New Year 2026 Pictures/${filename}`,
    alt: `New Year 2026 - Photo ${index + 1}`,
    title: 'New Year 2026 Celebration'
  }));

  const galleryImages = [...christmasPhotos, ...newYearPhotos];

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

import Container from '../common/Container';

export default function Mission() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Our Mission
          </h2>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <p className="text-xl md:text-2xl leading-relaxed mb-6">
              To glorify God by making disciples of Jesus Christ through worship, fellowship,
              biblical teaching, and compassionate service to our community.
            </p>

            <div className="border-t border-white/30 pt-6">
              <p className="text-primary-100 italic">
                "Go therefore and make disciples of all nations, baptizing them in the name of
                the Father and of the Son and of the Holy Spirit, teaching them to observe all
                that I have commanded you."
              </p>
              <p className="text-primary-200 text-sm mt-2">— Matthew 28:19-20</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-3">📖</div>
              <h3 className="font-heading font-bold text-lg mb-2">Biblical Teaching</h3>
              <p className="text-primary-100 text-sm">
                Grounded in Scripture, we teach God's Word faithfully and apply it to daily life.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-heading font-bold text-lg mb-2">Fellowship</h3>
              <p className="text-primary-100 text-sm">
                Building authentic relationships and supporting one another in love.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-3">❤️</div>
              <h3 className="font-heading font-bold text-lg mb-2">Service</h3>
              <p className="text-primary-100 text-sm">
                Serving our community with compassion and demonstrating Christ's love.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

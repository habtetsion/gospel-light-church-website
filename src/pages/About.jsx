import Container from '../components/common/Container';
import History from '../components/about/History';
import Mission from '../components/about/Mission';
import Values from '../components/about/Values';
import Leadership from '../components/about/Leadership';

export default function About() {
  return (
    <div className="bg-neutral-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About Us
          </h1>
          <p className="text-xl text-primary-50 max-w-2xl">
            Learn about our history, mission, and the people who make Gospel Light
            Eritrean Baptist Church a welcoming community of faith.
          </p>
        </Container>
      </div>

      {/* Welcome Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              {/* Image/Placeholder */}
              <div className="order-2 md:order-1">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary-200 to-primary-400 rounded-2xl shadow-xl flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <p className="text-6xl mb-4">⛪</p>
                    <p className="text-2xl font-heading font-semibold">Church Photo</p>
                    <p className="text-sm opacity-90 mt-2">Add your church building photo here</p>
                  </div>
                </div>
              </div>

              {/* Welcome Text */}
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-heading font-bold mb-6">
                  Welcome to Gospel Light
                </h2>
                <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                  Gospel Light Eritrean Baptist Church is a vibrant community of believers
                  in Dallas, Texas, dedicated to worshiping God, growing in faith, and
                  serving others.
                </p>
                <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                  We are a family of faith from diverse backgrounds, united by our love
                  for Jesus Christ and our commitment to sharing His Gospel with the
                  Eritrean community and beyond.
                </p>
                <div className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded-r-lg">
                  <p className="text-neutral-700 italic">
                    "For where two or three gather in my name, there am I with them."
                  </p>
                  <p className="text-sm text-neutral-600 mt-2 font-semibold">
                    — Matthew 18:20
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-neutral-50 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">14+</div>
                <div className="text-sm text-neutral-600">Years Serving</div>
              </div>
              <div className="text-center p-6 bg-neutral-50 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-sm text-neutral-600">Members</div>
              </div>
              <div className="text-center p-6 bg-neutral-50 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-sm text-neutral-600">Ministries</div>
              </div>
              <div className="text-center p-6 bg-neutral-50 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-sm text-neutral-600">Faith Focused</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <Mission />

      {/* History */}
      <History />

      {/* Values */}
      <Values />

      {/* Leadership */}
      <Leadership />

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Join Our Church Family
            </h2>
            <p className="text-xl text-primary-50 mb-8">
              Whether you're looking for a church home or just want to visit, we'd love to
              meet you. Come experience the warmth of our fellowship and the power of worship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/services" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
                Plan Your Visit
              </a>
              <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                Contact Us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

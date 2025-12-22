import Container from '../common/Container';
import Button from '../common/Button';

export default function WelcomeSection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary-200 to-primary-400 rounded-2xl shadow-xl flex items-center justify-center">
              <div className="text-center text-white p-8">
                <p className="text-6xl mb-4">📖</p>
                <p className="text-2xl font-heading font-semibold">Pastor's Photo</p>
                <p className="text-sm opacity-90 mt-2">Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="font-heading font-bold mb-6">
              Welcome to Our Church Family
            </h2>
            <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
              We are delighted that you're here! Gospel Light Eritrean Baptist Church is a vibrant community of believers committed to worshiping God, growing in faith, and serving others.
            </p>
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              Whether you're searching for a church home, looking to deepen your relationship with Christ, or simply exploring what it means to follow Jesus, we invite you to join us on this journey.
            </p>
            <blockquote className="border-l-4 border-primary-500 pl-4 mb-6 italic text-neutral-600">
              "For where two or three gather in my name, there am I with them."
              <footer className="text-sm mt-2 not-italic font-semibold">— Matthew 18:20</footer>
            </blockquote>
            <Button to="/about" variant="primary">
              Learn More About Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

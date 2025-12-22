import Container from '../components/common/Container';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

export default function Contact() {
  return (
    <div className="bg-neutral-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-primary-50 max-w-2xl">
            We're here to answer your questions and connect with you.
          </p>
        </Container>
      </div>

      {/* Contact Section */}
      <section className="section-padding">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <ContactInfo />
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-soft p-8">
                <h2 className="text-2xl font-heading font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section (Optional - can add later) */}
      <section className="pb-0">
        <div className="h-96 bg-neutral-200 flex items-center justify-center">
          <div className="text-center">
            <p className="text-neutral-600 mb-4">Interactive Map Coming Soon</p>
            <a
              href="https://maps.google.com/?q=11110+Garland+Rd+Dallas+TX+75218"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

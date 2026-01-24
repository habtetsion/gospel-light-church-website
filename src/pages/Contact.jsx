import Container from '../components/common/Container';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Map from '../components/contact/Map';

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

      {/* Map Section */}
      <section className="pb-0">
        <Map />
      </section>
    </div>
  );
}

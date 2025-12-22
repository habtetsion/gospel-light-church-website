import { HiMail, HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi';
import { FaFacebook, FaYoutube } from 'react-icons/fa';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-heading font-bold mb-6">Get in Touch</h2>
        <p className="text-neutral-600 leading-relaxed mb-6">
          We'd love to hear from you! Whether you have questions about our services,
          want to learn more about our church, or need prayer, please reach out to us.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <HiLocationMarker className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900 mb-1">Address</h3>
            <p className="text-neutral-600">
              11110 Garland Rd<br />
              Dallas, TX 75218
            </p>
            <a
              href="https://maps.google.com/?q=11110+Garland+Rd+Dallas+TX+75218"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-1 inline-block"
            >
              Get Directions →
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <HiPhone className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900 mb-1">Phone</h3>
            <a
              href="tel:+12123231234"
              className="text-neutral-600 hover:text-primary-600 transition-colors"
            >
              (212) 323-1234
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <HiMail className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900 mb-1">Email</h3>
            <a
              href="mailto:gospellight@gmail.com"
              className="text-neutral-600 hover:text-primary-600 transition-colors"
            >
              gospellight@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <HiClock className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900 mb-1">Service Times</h3>
            <p className="text-neutral-600">
              Sunday Worship: 10:00 AM<br />
              Friday Prayer: 7:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div>
        <h3 className="font-semibold text-neutral-900 mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/BerhanWongelDallasEritrenChurch/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-primary-100 hover:bg-primary-200 rounded-lg flex items-center justify-center transition-colors"
            aria-label="Facebook"
          >
            <FaFacebook className="w-6 h-6 text-primary-600" />
          </a>
          <a
            href="https://www.youtube.com/@GospeLlightEritreanChurch"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-primary-100 hover:bg-primary-200 rounded-lg flex items-center justify-center transition-colors"
            aria-label="YouTube"
          >
            <FaYoutube className="w-6 h-6 text-primary-600" />
          </a>
        </div>
      </div>
    </div>
  );
}

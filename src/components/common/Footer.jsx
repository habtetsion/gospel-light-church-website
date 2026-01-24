import { Link } from 'react-router-dom';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-4">
              Gospel Light Eritrean Baptist Church
            </h3>
            <p className="text-sm leading-relaxed">
              A community of believers dedicated to worship, fellowship, and spreading the Gospel of Jesus Christ.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/ministries" className="hover:text-primary-400 transition-colors">
                  Ministries
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-primary-400 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/sermons" className="hover:text-primary-400 transition-colors">
                  Sermons
                </Link>
              </li>
              <li>
                <Link to="/giving" className="hover:text-primary-400 transition-colors">
                  Give
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <HiLocationMarker className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>11110 Garland Rd<br />Dallas, TX 75218</span>
              </li>
              <li className="flex items-center space-x-2">
                <HiPhone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+12143275700" className="hover:text-primary-400 transition-colors">
                  (214) 327-5700
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <HiMail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:Berhanwongeldallas@gmail.com" className="hover:text-primary-400 transition-colors">
                  Berhanwongeldallas@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Service Times & Social */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Service Times</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <span className="font-semibold text-white">Sunday Worship:</span><br />
                10:00 AM
              </li>
              <li>
                <span className="font-semibold text-white">Friday Prayer:</span><br />
                7:00 PM
              </li>
            </ul>

            <h4 className="text-white font-heading font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/BerhanWongelDallasEritrenChurch/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@GospeLlightEritreanChurch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-primary-400 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {currentYear} Gospel Light Eritrean Baptist Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/events', label: 'Events' },
    { to: '/sermons', label: 'Sermons' },
    { to: '/contact', label: 'Contact' },
    { to: '/giving', label: 'Give' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Church Name */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <img
              src="/images/logo/church-logo.svg"
              alt="Gospel Light Church Logo"
              className="w-12 h-12"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-heading font-bold text-neutral-900">
                Gospel Light
              </h1>
              <p className="text-xs md:text-sm text-neutral-600">Eritrean Baptist Church</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 lg:px-4 py-2 rounded-lg font-medium transition-colors ${
                    isActive
                      ? 'bg-primary-500 text-white'
                      : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-neutral-700 hover:text-primary-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-neutral-200">
            <div className="flex flex-col space-y-2 pt-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-500 text-white'
                        : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-600'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import { Menu, X, Edit, Eye, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#events', label: 'Events' },
     { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleEditProfile = () => {
    console.log('Edit profile clicked');
    setIsProfileDropdownOpen(false);
  };

  const handleViewMore = () => {
    scrollToSection('#about');
    setIsProfileDropdownOpen(false);
  };

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="profile-section">
            <div 
              className="profile-trigger"
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            >
              <div className="profile-photo-wrapper">
                <img src="../assets/Pass_Photo.jpg" alt="Profile" className="profile-photo" />
                <div className="online-indicator"></div>
              </div>
              <div className="profile-name">
                <h1 className={`name ${isScrolled ? 'text-dark' : 'text-light'}`}>Uday Kumar Naik Mudavath</h1>
                <ChevronDown 
                  className={`dropdown-icon ${isScrolled ? 'text-dark' : 'text-light'} ${isProfileDropdownOpen ? 'rotate' : ''}`}
                />
              </div>
            </div>

            {isProfileDropdownOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-header">
                  <div className="dropdown-photo">
                    <img src="../assets/Pass_Photo.jpg" alt="Profile" />
                  </div>
                  <div>
                    <p className="dropdown-name">Uday Kumar Naik Mudavath</p>
                    <p className="dropdown-role">Full Stack Developer</p>
                  </div>
                </div>
                <div className="dropdown-options">
                  {/* <button onClick={handleEditProfile}>
                    <Edit size={16} />
                    <span>Edit Profile</span>
                  </button> */}
                  <button onClick={handleViewMore}>
                    <Eye size={16} />
                    <span>View More About Me</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="nav-links desktop-only">
            {navItems.map(item => (
              <button key={item.href} onClick={() => scrollToSection(item.href)} className={`nav-btn ${isScrolled ? 'text-dark' : 'text-light'}`}>
                {item.label}
              </button>
            ))}
          </div>

          <div className="mobile-menu-button mobile-only">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={isScrolled ? 'text-dark' : 'text-light'}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu mobile-only">
            {navItems.map(item => (
              <button key={item.href} onClick={() => scrollToSection(item.href)} className="mobile-nav-btn">
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {isProfileDropdownOpen && (
        <div className="dropdown-overlay" onClick={() => setIsProfileDropdownOpen(false)}></div>
      )}
    </header>
  );
};

export default Header;

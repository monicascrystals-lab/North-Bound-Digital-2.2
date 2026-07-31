import northboundLogo from "../assets/Images/logo.png";
function Navbar({ isOpen, activeSection, hasScrolled, onToggleMenu, onLinkClick }) {
  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'why', label: 'Why Choose Me' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className={`site-header ${hasScrolled ? 'scrolled' : ''}`}>
<div className="header-inner">
  <a href="#home" className="brand-link" onClick={onLinkClick}>
    <img
      src={northboundLogo}
      alt="Northbound Digital logo"
      className="brand-logo"
    />

    <div className="brand-text">
      <span className="brand-name">Northbound Digital</span>
      <span className="brand-tagline">
        Websites built to move your business forward
      </span>
    </div>
  </a>

        <button
          type="button"
          className={`menu-toggle ${isOpen ? 'open' : ''}`}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={onToggleMenu}
        >
          <span className="menu-line" />
          <span className="menu-line" />
          <span className="menu-line" />
        </button>

        <nav className={`primary-nav ${isOpen ? 'open' : ''}`} aria-label="Primary navigation">
          <ul>
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  onClick={onLinkClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

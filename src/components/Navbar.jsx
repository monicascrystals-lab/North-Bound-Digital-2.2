import northboundLogo from '../assets/Images/logo.png'

function Navbar({ isOpen, activeSection, hasScrolled, onToggleMenu, onLinkClick }) {
  const navigation = [
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Work' },
    { id: 'process', label: 'Process' },
    { id: 'about', label: 'About' },
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
          <span className="brand-name">Northbound<span>Digital</span></span>
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
            <li className="nav-cta">
              <a href="#contact" onClick={onLinkClick}>Start a project <span aria-hidden="true">↗</span></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

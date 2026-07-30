function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <p className="eyebrow">Northbound Digital</p>
          <p className="footer-tagline">Websites built to move your business forward</p>
        </div>

        <div className="footer-links">
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Phone: 076 611 5666</p>
        <p>Email: Northbounddigital@gmail.co.za</p>
        <p>WhatsApp: 076 611 5666</p>
        <p>Location: Bloemfontein, South Africa</p>
      </div>

      <div className="footer-copy">
        <p>© {new Date().getFullYear()} Northbound Digital. All rights reserved.</p>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  )
}

export default Footer

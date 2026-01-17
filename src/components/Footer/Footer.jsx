import './Footer.css';

function Footer() {
  return (
    <footer className="footer">

      {/* Text Row */}
      <div className="footer-text">
        <span>About</span>
        <span>Privacy</span>
        <span>Terms</span>
        <span>Help</span>
      </div>

      {/* Copyright */}
      <div className="footer-copy">
        © {new Date().getFullYear()} Community Dashboard
      </div>
    </footer>
  );
}

export default Footer;

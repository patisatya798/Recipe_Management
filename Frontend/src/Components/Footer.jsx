import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">
        <div className="footer-section">
          <h2>RecipeHub 🍲</h2>
          <p>
            Discover, cook, and share amazing recipes from around the world.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@recipehub.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Location: India</p>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© 2026 RecipeHub. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;
import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-glow"></div>

      <div className="footer-container">

        {/* Brand Section */}

        <div className="footer-brand">

          <h2 className="footer-logo">
            FIT<span>CART</span>
          </h2>
 
          <p>
            Premium fitness equipment, supplements,
            recovery tools and performance gear
            designed for modern athletes.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

        </div>

        {/* Categories */}

        <div className="footer-column">

          <h3>Categories</h3>

          <Link href="/StrengthEquipment">Strength Equipment</Link>
          <Link href="/CardioEquipment">Cardio Equipment</Link>
          <Link href="/Supplements">Supplements</Link>
          <Link href="/RecoveryTools">Recovery Tools</Link>

        </div>

        {/* Contact */}

        <div className="footer-column">

          <h3>Contact</h3>

          <p>Address: Mumbai, India</p>
          <p>Email: support@fitcart.com</p>
          <p>Phone No: +91 98765 43210</p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 FitCart. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}
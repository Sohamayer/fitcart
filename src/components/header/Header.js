"use client";

import { useEffect, useState } from "react";   // ← add useEffect
import Link from "next/link";
import {
  FiShoppingCart,
  FiMenu,
  FiX,
  FiUser,
  FiChevronDown,
  FiLogOut                                      // ← add this icon
} from "react-icons/fi";

import "./Header.css";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [collectionOpen, setCollectionOpen] =
  useState(false);

  // NEW: tracks whether someone is logged in, and their basic info
  const [user, setUser] = useState(null);        // null = logged out
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.loggedIn ? data.customer : null);
      })
      .catch(() => setUser(null))
      .finally(() => setCheckingAuth(false));
  }, []);

  return (
    <header className="header">

      <div className="header-container">

        {/* Logo */}

        <div className="logo">
          <Link href="/">
            FIT<span className="logo-accent">CART</span>
          </Link>
        </div>

        {/* Navigation */}

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

          <Link
            href="/"
            className="nav-item"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/products"
            className="nav-item"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>

          <div className="dropdown">

            <button
              className="nav-item dropdown-btn"
              onClick={() =>
                setCollectionOpen(!collectionOpen)
              }
            >

              Collections

              <FiChevronDown
                className={
                  collectionOpen
                    ? "arrow rotate"
                    : "arrow"
                }
              />

            </button>

            <div
              className={
                collectionOpen
                  ? "dropdown-menu active"
                  : "dropdown-menu"
              }
            >

              <Link
                href="/StrengthEquipment"
                onClick={() => {
                  setCollectionOpen(false);
                  setMenuOpen(false);
                }}
              >
                Strength Equipment
              </Link>

              <Link
                href="/CardioEquipment"
                onClick={() => {
                  setCollectionOpen(false);
                  setMenuOpen(false);
                }}
              >
                Cardio Equipment
              </Link>

              <Link
                href="/Supplements"
                onClick={() => {
                  setCollectionOpen(false);
                  setMenuOpen(false);
                }}
              >
                Supplements
              </Link>

              <Link
                href="/RecoveryTools"
                onClick={() => {
                  setCollectionOpen(false);
                  setMenuOpen(false);
                }}
              >
                Recovery Tools
              </Link>

            </div>

          </div>

          <Link
            href="/about"
            className="nav-item"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            href="/contact"
            className="nav-item"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <div className="mobile-bottom">

            <Link
              href="/cart"
              className="mobile-cart"
              onClick={() => setMenuOpen(false)}
            >
              <FiShoppingCart />
              <span>Cart</span>
            </Link>

          </div>

        </nav>

        {/* Right Side Actions */}

        <div className="header-actions">

          {!checkingAuth && user ? (
            <div className="user-menu">
              <Link href="/account" className="login-btn">
                <FiUser />
                <span>{user.firstName || "Account"}</span>
              </Link>

              <a href="/api/auth/logout" className="login-btn">
                <FiLogOut />
                <span>Logout</span>
              </a>
            </div>
          ) : (
            <Link href="/login" className="login-btn">
              <FiUser />
              <span>Login</span>
            </Link>
          )}

          <Link
            href="/cart"
            className="cart-trigger"
          >
            <FiShoppingCart />

            <span className="cart-label">
              Cart
            </span>
          </Link>

          <button
            className="menu-btn" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>

      </div>

    </header>
  );
}
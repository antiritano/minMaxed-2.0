import styles from "./styles.module.css";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = "/";
  return (
    <div className={styles.Header}>
      <div className={styles.Header__leftContainer}>
        <a href="/">
          <h1 className="text-blue-800 text-2xl">
            <span className="text-white text-2xl">min</span>Maxed
          </h1>
        </a>
      </div>
      <div className={styles.Header__rightContainer}>
        <nav>
          <section className={styles.Header__mobileMenu}>
            <div
              className={styles.Header__hamburger}
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className={styles.Header__hamburgerLine}></span>
              <span className={styles.Header__hamburgerLine}></span>
              <span className={styles.Header__hamburgerLine}></span>
            </div>

            <div
              className={isNavOpen ? styles.showMenuNav : styles.hideMenuNav}
            >
              {" "}
              <div
                className={styles.Header__cross}
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className={styles.Header__hamburgerMenu}>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/reviews">Reviews</a>
                </li>
                <li>
                  <a href="#/articles">Articles</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </section>

          <ul className={styles.Header__desktopMenu}>
            <li className={styles.Header__rightContainerItem}>
              <a
                className={
                  location.pathname === "/"
                    ? styles.Nav__itemActive
                    : styles.Nav__item
                }
                href="/"
              >
                Home
              </a>
            </li>
            <li className={styles.Header__rightContainerItem}>
              <a
                className={
                  location.pathname === "/reviews"
                    ? styles.Nav__itemActive
                    : styles.Nav__item
                }
                href="/reviews"
              >
                Reviews
              </a>
            </li>
            <li className={styles.Header__rightContainerItem}>
              <a
                className={
                  location.pathname === "/articles"
                    ? styles.Nav__itemActive
                    : styles.Nav__item
                }
                href="/articles"
              >
                Articles
              </a>
            </li>
            <li className={styles.Header__rightContainerItem}>
              <a
                className={
                  location.pathname === "/about"
                    ? styles.Nav__itemActive
                    : styles.Nav__item
                }
                href="/about"
              >
                About
              </a>
            </li>
            <li className={styles.Header__rightContainerItem}>
              <a
                className={
                  location.pathname === "/contact"
                    ? styles.Nav__itemActive
                    : styles.Nav__item
                }
                href="/about"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

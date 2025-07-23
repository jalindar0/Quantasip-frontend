// src/components/CookieConsent.js
import React, { useEffect, useState } from "react";
import styles from "./cookieconsent.module.css";

const COOKIE_KEY = "cookie_consent_accepted";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    // show after short delay for natural effect
    setVisible(true);
    if (localStorage.getItem(COOKIE_KEY) !== "true") {
      setTimeout(() => setVisible(true), 300);
    }
  }, []);

  function acceptCookies() {
    setAnimateOut(true);
    setTimeout(() => {
      localStorage.setItem(COOKIE_KEY, "true");
      setVisible(false);
      setAnimateOut(false);
    }, 400); // match transition duration
  }

  if (!visible && !animateOut) return null;

  return (
    <div
      className={`${styles.cookieConsentBanner} ${visible && !animateOut ? styles.show : ""} ${animateOut ? styles.hide : ""}`}
      role="dialog"
      aria-live="polite"
    >
      <span>
        We use cookies to enhance your experience. By clicking "Accept all cookies", you agree to our privacy policy.
      </span>
      <button className={styles.cookieConsentBtn} onClick={acceptCookies}>
        Accept all cookies
      </button>
    </div>
  );
}

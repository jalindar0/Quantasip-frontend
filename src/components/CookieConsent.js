// src/components/CookieConsent.js
import React, { useEffect, useState } from "react";
import styles from "./cookieconsent.module.css";

const COOKIE_KEY = "cookie_consent_accepted";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(COOKIE_KEY) !== "true") {
      setTimeout(() => setVisible(true), 300);
    }
  }, []);

  function acceptCookies() {
    setAnimateOut(true);
  
    let userId = localStorage.getItem("quanta_user_id");
    if (!userId) {
      userId = "user_" + Math.random().toString(36).substr(2, 9);
      localStorage.setItem("quanta_user_id", userId);
    }
  
    const timestamp = new Date().toISOString();
  
    // Try to get geolocation (HTML5 API)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          sendConsentData(userId, timestamp, latitude, longitude);
        },
        (error) => {
          // If user denies permission or error occurs
          console.warn("Geolocation error:", error.message);
          sendConsentData(userId, timestamp, null, null);
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    } else {
      sendConsentData(userId, timestamp, null, null);
    }
  
    setTimeout(() => {
      localStorage.setItem(COOKIE_KEY, "true");
      setVisible(false);
      setAnimateOut(false);
    }, 400);
  }
  
  function sendConsentData(user_id, timestamp, latitude, longitude) {
    fetch("https://qb.quantasip.com/api/cookie-accept", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        timestamp,
        latitude,
        longitude,
      }),
    });
  }  

  if (!visible && !animateOut) return null;

  return (
    <div
      className={`${styles.cookieConsentBanner} ${
        visible && !animateOut ? styles.show : ""
      } ${animateOut ? styles.hide : ""}`}
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

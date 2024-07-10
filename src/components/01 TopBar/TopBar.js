import React, { useState, useEffect } from "react";
import styles from "./TopBar.module.css";
import { smoothScroll } from "../../utils/scrollUtilis";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Phone } from "../../assets/images/phone.svg";

import defaultProfileImageSrc from "../../assets/images/profile.png";

const defaultTrainerName = "Piotr Piechnik";
const defaultTrainerSubtitle = "Trener fizjoterapeuta";
const defaultPhone = "+48 667 745 056";

function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.topBarWrapper}>
        <div className={styles.topBarBackground}></div>
        <div className={styles.topBar}>
          <div className="container flex">
            <a href="/" className={styles.topBarLogo}>
              <Logo className={styles.topBarLogoImage} />
            </a>
            <div className={styles.topBarContactInfo}>
              <div className={styles.topBarContactInfoWrapper}>
                <div className={styles.topBarProfileImageWrapper}>
                  <img
                    src={defaultProfileImageSrc}
                    alt={defaultTrainerName}
                    className={styles.topBarProfileImage}
                  />
                </div>
                <div className={styles.topBarTextInfo}>
                  <p className={styles.topBarName}>{defaultTrainerName}</p>
                  <p className={styles.topBarSubtitle}>
                    {defaultTrainerSubtitle}
                  </p>
                </div>
              </div>
              <div className={styles.topBarContactDetails}>
                <p className={styles.topBarPhone}>{defaultPhone}</p>
                <p className={styles.topBarContact}>Kontakt</p>
              </div>
              <a
                href="#form"
                className={styles.topBarConsultButton}
                onClick={smoothScroll}
              >
                Zapisz się na <b>darmową</b> konsultację
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.topBarMobile} ${
          isScrolled ? styles.visible : styles.hidden
        }`}
      >
        <div className={styles.topBarContactInfoWrapper}>
          <div className={styles.topBarProfileImageWrapper}>
            <img
              src={defaultProfileImageSrc}
              alt={defaultTrainerName}
              className={styles.topBarProfileImage}
            />
          </div>
          <div className={styles.topBarTextInfo}>
            <p className={styles.topBarName}>{defaultTrainerName}</p>
            <p className={styles.topBarSubtitle}>{defaultTrainerSubtitle}</p>
          </div>
        </div>
        <a href={`tel:${defaultPhone}`} className={styles.topBarPhoneMobile}>
          <Phone />
        </a>
      </div>
    </>
  );
}

export default TopBar;

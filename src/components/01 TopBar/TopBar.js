import React from "react";
import styles from "./TopBar.module.css";
import { smoothScroll } from "../../utils/scrollUtilis";
import logo from "../../assets/images/logo.png";

function TopBar({ trainerName, trainerSubtitle, phone, profileImageSrc }) {
  return (
    <div className={styles.topBar}>
      <div className="container flex">
        <a href="/" className={styles.topBarLogo}>
          <img src={logo} alt="Logo" className={styles.topBarLogoImage} />
        </a>
        <div className={styles.topBarContactInfo}>
          <div className={styles.topBarContactInfoWrapper}>
            <div className={styles.topBarProfileImageWrapper}>
              <img
                src={profileImageSrc}
                alt={trainerName}
                className={styles.topBarProfileImage}
              />
            </div>
            <div className={styles.topBarTextInfo}>
              <p className={styles.topBarName}>{trainerName}</p>
              <p className={styles.topBarSubtitle}>{trainerSubtitle}</p>
            </div>
          </div>
          <div className={styles.topBarContactDetails}>
            <p className={styles.topBarPhone}>+{phone}</p>
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
  );
}

export default TopBar;

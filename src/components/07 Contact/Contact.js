import React from "react";
import styles from "./Contact.module.css";
import mapImage from "../../assets/images/map.png";
import locationImage1 from "../../assets/images/location1.png";
import locationImage2 from "../../assets/images/location2.png";
import iconOpen from "../../assets/images/icon-openInNewTab.png";

function Contact() {
  return (
    <section className={styles.contact}>
      <div className={`${styles.contact__container} container flex`}>
        <div className={styles.contact__mapContainer}>
          <img src={mapImage} alt="Map" className={styles.contact__map} />
        </div>
        <div className={styles.contact__infoContainer}>
          <h3 className={styles.contact__sectionTitle}>Jak dojechać</h3>
          <h2 className={styles.contact__title}>Move Center</h2>
          <p className={styles.contact__address}>ul. Zawiła 61A, Kraków</p>
          <p className={styles.contact__parkingInfo}>
            Czeka na Ciebie darmowy parking i stojaki na rowery.
          </p>
          <a
            href="https://g.co/kgs/dtEQp7X"
            className={styles.contact__link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={iconOpen}
              className={styles.contact__linkIcon}
              alt="open in new tab icon"
            />
            Przejdź do Google Maps
          </a>
          <div className={styles.contact__imagesContainer}>
            <img
              src={locationImage1}
              alt="Location 1"
              className={styles.contact__locationImage}
            />
            <img
              src={locationImage2}
              alt="Location 2"
              className={styles.contact__locationImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

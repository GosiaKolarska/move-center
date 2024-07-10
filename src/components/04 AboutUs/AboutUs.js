import React from "react";
import { smoothScroll } from "../../utils/scrollUtilis";

import { ReactComponent as IconStar } from "../../assets/images/icon-star.svg";
import { ReactComponent as IconLike } from "../../assets/images/icon-like.svg";
import { ReactComponent as IconRect } from "../../assets/images/icon-rect.svg";
import { ReactComponent as IconPencil } from "../../assets/images/icon-pencil.svg";

import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <section className={styles.aboutUs}>
      <div className="container flex">
        <div className={styles.statsContainer}>
          <div className={styles.stat}>
            <div className={styles.icon}>
              <IconRect />
            </div>
            <div className={styles.statText}>
              <p>Doświadczenie</p>
              <h3>+12 lat</h3>
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.icon}>
              <IconLike />
            </div>
            <div className={styles.statText}>
              <p>Zadowoleni klienci</p>
              <h3>+1255</h3>
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.icon}>
              <IconStar />
            </div>
            <div className={styles.statText}>
              <p>Wykwalifikowani trenerzy</p>
              <h3>+6</h3>
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.icon}>
              <IconPencil />
            </div>
            <div className={styles.statText}>
              <p>Powierzchni treningowej</p>
              <h3>+512 m²</h3>
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <h2>Move Center dla Ciebie</h2>
          <ul>
            <li>Twój personalny trener</li>
            <li>Trening bez tłoku</li>
            <li>Ćwiczysz bez skrępowania</li>
            <li>Przestrzenna siłownia</li>
            <li>Darmowy parking</li>
          </ul>
          <a href="#form" className={styles.button} onClick={smoothScroll}>
            Umów się za darmo
          </a>
        </div>
      </div>
      <a href="#form" className={styles.buttonMobile} onClick={smoothScroll}>
        Umów się za darmo
      </a>
    </section>
  );
}

export default AboutUs;

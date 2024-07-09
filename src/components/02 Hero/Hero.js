import React from "react";
import styles from "./Hero.module.css";
import { smoothScroll } from "../../utils/scrollUtilis";

import iconHeart from "../../assets/images/icon-heart.png";
import iconGoogle from "../../assets/images/logo-google.png";

import reviewer1 from "../../assets/images/review1.png";
import reviewer2 from "../../assets/images/review2.png";
import reviewer3 from "../../assets/images/review3.png";

function Hero({ recommenderName }) {
  return (
    <section className={styles.hero}>
      <div className="container flex">
        <div className={styles.heroContent}>
          <div className={styles.heroContentColumn}>
            <p className={styles.recommendation}>
              <img src={iconHeart} alt="icon heart" />
              Poleca <b>{recommenderName}</b>
            </p>
            <h1>
              Odbierz <br />
              Darmowy Trening<span className="blue">.</span>
            </h1>
            <p className={styles.subText}>
              Twój znajomy polecił Cię w Move Center. Dlatego możesz odebrać
              darmowy trening bez zobowiązań.
            </p>
          </div>
          <div className={styles.heroContentColumn}>
            <a href="#form" className={styles.ctaButton} onClick={smoothScroll}>
              Odbieram trening za 0 zł
            </a>
            <div className={styles.reviews}>
              <div className={styles.rating}>
                <div className={styles.ratingRow}>
                  <span className={styles.ratingScore}>4.9</span>
                  <span className={styles.ratingStars}>★★★★★</span>
                </div>
                <div className={styles.ratingRow}>
                  <img src={iconGoogle} alt="icon Google" />
                  <p className={styles.ratingRevies}>79 opinii</p>
                </div>
              </div>
              <div className={styles.reviewers}>
                <img
                  src={reviewer1}
                  alt="Reviewer 1"
                  className={styles.reviewerImage}
                />
                <img
                  src={reviewer2}
                  alt="Reviewer 2"
                  className={styles.reviewerImage}
                />
                <img
                  src={reviewer3}
                  alt="Reviewer 3"
                  className={styles.reviewerImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

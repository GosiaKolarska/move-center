import React, { useEffect } from "react";
import styles from "./Hero.module.css";
import { smoothScroll } from "../../utils/scrollUtilis";

import { ReactComponent as IconHeart } from "../../assets/images/icon-heart.svg";
import { ReactComponent as LogoGoogle } from "../../assets/images/logo-google.svg";

import reviewer1 from "../../assets/images/review1.png";
import reviewer2 from "../../assets/images/review2.png";
import reviewer3 from "../../assets/images/review3.png";

import heroBgBelow from "../../assets/images/hero-bg-below.png";
import { ReactComponent as MoveImage } from "../../assets/images/move.svg";
import heroBgAbove from "../../assets/images/hero-bg-above.png";

function Hero({ recommenderName }) {
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth >= 1024) {
        const moveElement = document.querySelector(`.${styles.move}`);
        const x = (e.clientX - window.innerWidth / 2) * 0.01;
        const y = (e.clientY - window.innerHeight / 2) * 0.01;
        moveElement.style.left = `calc(51% + ${x}px)`;
        moveElement.style.top = `calc(43% + ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <img
        src={heroBgBelow}
        alt="Background below"
        className={styles.heroBgBelow}
      />
      <MoveImage className={styles.move} />
      <img
        src={heroBgAbove}
        alt="Background above"
        className={styles.heroBgAbove}
      />
      <div className={styles.heroContent}>
        <div className="container flex">
          <div className={styles.heroContentColumn}>
            <div className={styles.recommendation}>
              <IconHeart />
              Poleca <b>{recommenderName}</b>
            </div>
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
                  <LogoGoogle />
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

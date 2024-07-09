import React from "react";
import styles from "./Benefits.module.css";
import trainersImage from "../../assets/images/trainers.png";

function Benefits() {
  return (
    <section className={styles.benefits}>
      <div className="container flex">
        <div className={styles.benefits__textContainer}>
          <p className={styles.benefits__subtitle}>TU SIĘ FAJNIE ĆWICZY!</p>
          <h2 className={styles.benefits__title}>Trening personalny</h2>
          <p className={styles.benefits__description}>
            Zobacz, jak szybko poczujesz się ZDROWIEJ.
          </p>
          <ul className={styles.benefits__list}>
            <li className={styles.benefits__item}>
              Lepsza kondycja z profesjonalnym planem od trenera. Szybciej
              osiągniesz wyniki!
            </li>
            <li className={styles.benefits__item}>
              Przestrzenna siłownia - bez tłoku. Ćwiczysz tak jak lubisz.
            </li>
            <li className={styles.benefits__item}>
              Nie płacisz dodatkowo za siłownię. Tylko za trening. Co oznacza
              oszczędność kilkuset złotych miesięcznie.
            </li>
            <li className={styles.benefits__item}>
              Łatwy dojazd i parking za darmo. Co oznacza brak stresu i
              dodatkową oszczędność.
            </li>
          </ul>
          <button className={styles.benefits__button}>
            Odbieram trening za 0 zł
          </button>
        </div>
        <div className={styles.benefits__imageContainer}>
          <img
            src={trainersImage}
            alt="Trainers"
            className={styles.benefits__image}
          />
        </div>
      </div>
    </section>
  );
}

export default Benefits;

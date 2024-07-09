import React, { useState } from "react";
import styles from "./Form.module.css";
import emailjs from "emailjs-com";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.overlay}>
        <h2 className={styles.title}>
          Zapisz się na darmową konsultację<span className="blue">.</span>
        </h2>
        <p className={styles.description}>
          Zostaw kontakt do siebie byśmy mogli umówić się na nasze pierwsze
          spotkanie
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formInner}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Imię
              </label>
              <input
                type="text"
                id="name"
                placeholder="Twoje imię"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Twój adres email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>
                Numer telefonu
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Twój numer telefonu"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.formGroupCheckbox}>
            <input
              type="checkbox"
              id="consent"
              checked={formData.consent}
              onChange={handleChange}
              className={styles.checkbox}
            />
            <label htmlFor="consent" className={styles.checkboxLabel}>
              Zgadzam się na kontakt telefoniczny w sprawie umówienia
              konsultacji
            </label>
          </div>

          <a type="submit" className={styles.submitButton}>
            Wyślij wiadomość
          </a>
        </form>
      </div>
    </section>
  );
}

export default Form;

import React, { useState } from "react";
import styles from "./FAQItem.module.css";
import iconChevron from "../../assets/images/icon-chevron.png";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <div className={styles.question} onClick={() => setIsOpen(!isOpen)}>
        {question}
        <img
          src={iconChevron}
          alt="Chevron icon"
          className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
        />
      </div>
      {isOpen && <div className={styles.answer}>{answer}</div>}
    </div>
  );
}

export default FAQItem;

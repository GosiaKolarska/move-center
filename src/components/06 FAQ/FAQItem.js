import React, { useState } from "react";
import styles from "./FAQItem.module.css";

import { ReactComponent as IconChevron } from "../../assets/images/icon-chevron.svg";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <div className={styles.question} onClick={() => setIsOpen(!isOpen)}>
        {question}
        <IconChevron
          className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
        />
      </div>
      {isOpen && <div className={styles.answer}>{answer}</div>}
    </div>
  );
}

export default FAQItem;

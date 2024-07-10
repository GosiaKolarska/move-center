import React, { useState, useRef, useEffect } from "react";
import styles from "./FAQItem.module.css";
import { ReactComponent as IconChevron } from "../../assets/images/icon-chevron.svg";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isOpen]);

  return (
    <div className={styles.faqItem}>
      <div className={styles.question} onClick={() => setIsOpen(!isOpen)}>
        {question}
        <IconChevron
          className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
        />
      </div>
      <div className={styles.answerWrapper} ref={contentRef}>
        <div
          className={styles.answer}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </div>
  );
}

export default FAQItem;

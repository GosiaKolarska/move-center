import React from "react";
import styles from "./Footer.module.css";

import logoFooter from "../../assets/images/logo-footer.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logoFooter} alt="logo Move Center" />
      <p>&copy; 2024. All rights reserved. Made in Krakow.</p>
    </footer>
  );
}

export default Footer;

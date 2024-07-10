import React from "react";
import styles from "./Footer.module.css";

import { ReactComponent as LogoFooter } from "../../assets/images/logo-footer.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <LogoFooter />
      <p>&copy; 2024. All rights reserved. Made in Krakow.</p>
    </footer>
  );
}

export default Footer;

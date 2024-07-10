import React from "react";
import styles from "./Layout.module.css";
import TopBar from "../01 TopBar/TopBar";
import Footer from "../09 Footer/Footer";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <TopBar />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

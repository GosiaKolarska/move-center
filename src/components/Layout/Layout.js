import React from "react";
import styles from "./Layout.module.css";
import TopBar from "../01 TopBar/TopBar";
import Footer from "../09 Footer/Footer";

function Layout({
  children,
  trainerName,
  trainerSubtitle,
  phone,
  profileImageSrc,
}) {
  return (
    <div className={styles.layout}>
      <TopBar
        trainerName={trainerName}
        trainerSubtitle={trainerSubtitle}
        phone={phone}
        profileImageSrc={profileImageSrc}
      />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
